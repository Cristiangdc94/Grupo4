// --- ESTADO DE AUDIO Y SISTEMA ---
let masterVol = 0.5, musicVol = 0.4;
let masterMuted = false, musicMuted = false;
let prevMasterVol = 0.5, prevMusicVol = 0.4;
let isTyping = false;

const typeSound = new Audio('../Sound/undertale-text.mp3');
// Referencia al elemento audio del HTML
const bgMusic = document.getElementById('bg-music');

// --- SELECTORES ---
const masterSlider = document.getElementById('input-master');
const musicSlider = document.getElementById('input-music');
const masterIcon = document.getElementById('volume-icon');
const musicIcon = document.getElementById('music-icon');
const menuControl = document.getElementById('menu-control');
const menuOverlay = document.getElementById('menu-overlay');

// --- MOTOR DE HISTORIA ---
let nodoActual = "inicio";

// Función unificada: Maneja tanto la interfaz como la secuencia de escritura
function handleChoice(nodoSiguiente, etiqueta, titulo, textoDesc, logDesc) {
    isTyping = false; 
    console.log("Navegando a:", nodoSiguiente);

    const log = document.getElementById('decision-log');
    if (log && logDesc) {
        const empty = log.querySelector('.empty-msg');
        if (empty) empty.remove();
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.innerHTML = `<strong>${titulo}</strong><p>${logDesc}</p>`;
        log.prepend(entry);
    }

    nodoActual = nodoSiguiente;
    actualizarInterfaz();
}

function actualizarInterfaz() {
    isTyping = false;
    const datos = historia[nodoActual];
    if (!datos) return;

    // Fondo
    const bg = document.querySelector('.background-image');
    if (bg && datos.fondo) bg.style.backgroundImage = `url('${datos.fondo}')`;

    // Personajes
    const charContainer = document.getElementById('character-container');
    charContainer.innerHTML = ''; // Limpiamos escenario

    if (datos.personajes) {
        datos.personajes.forEach(p => {
            const img = document.createElement('img');
            img.src = p.src;
            img.setAttribute('data-id', p.id); // Guardamos el ID aquí
            img.style.cssText = `position: absolute; bottom: 0; ${p.pos} height: 85%; transition: left 0.5s ease;`;
            charContainer.appendChild(img);
        });
    }

    // Título y contenido
    document.getElementById('choice-title').innerText = datos.titulo;
    typeWriter('choice-desc', datos.descripcion, 20);

    // Generación de botones (Grid)
    const contenedorBotones = document.getElementById('bottom-buttons');
    contenedorBotones.innerHTML = '';
    const centro = document.createElement('div');
    centro.className = 'bottom-buttons-center';
    contenedorBotones.appendChild(centro);

    datos.opciones.forEach((opcion) => {
        const btn = document.createElement('a');
        btn.href = "#";
        btn.innerText = opcion.texto;
        btn.className = (opcion.tipo === 'flecha') ? 'flecha-contexto' : 'game-option chaos-hover';
        btn.onclick = (e) => {
            e.preventDefault();
            handleChoice(opcion.siguiente, opcion.etiqueta, opcion.titulo, opcion.descripcion, opcion.log);
        };
        (opcion.tipo === 'flecha') ? contenedorBotones.appendChild(btn) : centro.appendChild(btn);
    });
}

// --- MOTOR DE ESCRITURA ---
function typeWriter(elementId, text, speed, callback = null) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.innerHTML = "";
    let i = 0;
    isTyping = true;

    function typing() {
        if (i < text.length) {
            let char = text.charAt(i);
            if (char === '|') {
                let end = text.indexOf('|', i + 1);
                if (end !== -1) {
                    let comando = text.substring(i + 1, end);
                    let [id, ruta] = comando.split(':');
                    const charImg = document.querySelector(`[data-id="${id}"]`);
                    if (charImg) charImg.src = ruta;
                    i = end + 1;
                }
            } else {
                element.innerHTML += char;
                i++;
            }
            setTimeout(typing, speed);
        } else {
            isTyping = false;
            if (callback) callback();
        }
    }
    typing();
}

// --- LÓGICA DE VOLUMEN Y MENÚ ---
menuOverlay.addEventListener('click', () => menuControl.checked = false);

masterSlider.addEventListener('input', (e) => updateMasterUI(e.target.value));
musicSlider.addEventListener('input', (e) => updateMusicUI(e.target.value));

document.getElementById('btn-mute-master').addEventListener('click', () => {
    if (!masterMuted) { 
        prevMasterVol = masterVol; 
        masterSlider.value = 0; 
        updateMasterUI(0); 
    } else { 
        let r = prevMasterVol > 0 ? prevMasterVol : 0.5; 
        masterSlider.value = r; 
        updateMasterUI(r); 
    }
});

document.getElementById('btn-mute-music').addEventListener('click', () => {
    if (!musicMuted) { 
        prevMusicVol = musicVol; 
        musicSlider.value = 0; 
        updateMusicUI(0); 
    } else { 
        let r = prevMusicVol > 0 ? prevMusicVol : 0.4; 
        musicSlider.value = r; 
        updateMusicUI(r); 
    }
});

function updateMasterUI(val) {
    masterVol = parseFloat(val);
    masterMuted = masterVol === 0;
    masterIcon.className = masterVol === 0 ? "fa-solid fa-volume-xmark" : (masterVol < 0.5 ? "fa-solid fa-volume-low" : "fa-solid fa-volume-high");
}

function updateMusicUI(val) {
    musicVol = parseFloat(val);
    musicMuted = musicVol === 0;
    
    // Actualizamos el volumen real del objeto de música
    if (bgMusic) {
        bgMusic.volume = musicVol;
    }
    
    musicIcon.style.color = musicMuted ? "#555" : "#FF0000";
}

document.getElementById('btn-reset').addEventListener('click', (e) => {
    if(!confirm("¿Reiniciar el caos?")) e.preventDefault();
});

// --- SISTEMA DE ARRANQUE (Bypass de Autoplay) ---
function iniciarMusica() {
    if (bgMusic) {
        bgMusic.volume = musicVol;
        bgMusic.play().catch(error => console.log("Audio bloqueado temporalmente..."));
        // Removemos el evento para que solo se active una vez
        document.removeEventListener('click', iniciarMusica);
    }
}

// Escuchar el primer clic en el documento para activar el sonido
document.addEventListener('click', iniciarMusica);

// --- INICIALIZACIÓN ---
window.onload = () => {
    actualizarInterfaz();
};