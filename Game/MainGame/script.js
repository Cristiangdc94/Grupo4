// --- ESTADO DE AUDIO Y SISTEMA ---
let masterVol = 0.25, musicVol = 0.25; // Inicializados al 25%
let masterMuted = false, musicMuted = false;
let prevMasterVol = 0.25, prevMusicVol = 0.25;
let isTyping = false;

const typeSound = new Audio('../Sound/undertale-text.mp3');
const bgMusic = document.getElementById('bg-music');
const hoverSound = document.getElementById('hover-sound');

// --- SELECTORES ---
const masterSlider = document.getElementById('input-master');
const musicSlider = document.getElementById('input-music');
const masterIcon = document.getElementById('volume-icon');
const musicIcon = document.getElementById('music-icon');
const menuControl = document.getElementById('menu-control');
const menuOverlay = document.getElementById('menu-overlay');

// --- MOTOR DE HISTORIA ---
let nodoActual = "inicio";

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
    charContainer.innerHTML = ''; 

    if (datos.personajes) {
        datos.personajes.forEach(p => {
            const img = document.createElement('img');
            img.src = p.src;
            img.setAttribute('data-id', p.id);
            img.style.cssText = `position: absolute; bottom: 0; ${p.pos} height: 85%; transition: left 0.5s ease;`;
            charContainer.appendChild(img);
        });
    }

    // Título y contenido
    document.getElementById('choice-title').innerText = datos.titulo;
    typeWriter('choice-desc', datos.descripcion, 20);

    // Generación de botones
    const contenedorBotones = document.getElementById('bottom-buttons');
    contenedorBotones.innerHTML = '';
    const centro = document.createElement('div');
    centro.className = 'bottom-buttons-center';
    contenedorBotones.appendChild(centro);

    datos.opciones.forEach((opcion) => {
        const btn = document.createElement('a');
        btn.href = "#";
        btn.innerText = opcion.texto;
        btn.className = (opcion.tipo === 'flecha') ? 'flecha-contexto chaos-hover' : 'game-option chaos-hover';
        btn.onclick = (e) => {
            e.preventDefault();
            handleChoice(opcion.siguiente, opcion.etiqueta, opcion.titulo, opcion.descripcion, opcion.log);
        };
        (opcion.tipo === 'flecha') ? contenedorBotones.appendChild(btn) : centro.appendChild(btn);
    });

    // Re-vincular sonidos hover a los nuevos botones
    initHoverSounds();
}

// --- SONIDOS HOVER ---
function initHoverSounds() {
    const targets = document.querySelectorAll('.chaos-hover');
    targets.forEach(target => {
        target.onmouseenter = () => {
            if (!masterMuted && masterVol > 0 && hoverSound) {
                const hSound = hoverSound.cloneNode();
                hSound.volume = masterVol;
                hSound.play().catch(() => {});
            }
        };
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
        if (!isTyping) return;
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
                // Sonido de teclas sincronizado con Master
                if (char !== " " && !masterMuted && masterVol > 0) {
                    const soundClone = typeSound.cloneNode();
                    soundClone.volume = masterVol;
                    soundClone.play().catch(() => {});
                }
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

// --- LÓGICA DE VOLUMEN ---
masterSlider.addEventListener('input', (e) => updateMasterUI(e.target.value));
musicSlider.addEventListener('input', (e) => updateMusicUI(e.target.value));

function updateMasterUI(val) {
    masterVol = parseFloat(val);
    masterMuted = masterVol === 0;
    masterIcon.className = masterMuted ? "fa-solid fa-volume-xmark" : (masterVol < 0.5 ? "fa-solid fa-volume-low" : "fa-solid fa-volume-high");
}

function updateMusicUI(val) {
    musicVol = parseFloat(val);
    musicMuted = musicVol === 0;
    if (bgMusic) bgMusic.volume = musicVol;
    musicIcon.style.color = musicMuted ? "#555" : "#FF0000";
}

// Mutes
document.getElementById('btn-mute-master').addEventListener('click', () => {
    if (!masterMuted) { prevMasterVol = masterVol; updateMasterUI(0); masterSlider.value = 0; }
    else { let r = prevMasterVol > 0 ? prevMasterVol : 0.25; updateMasterUI(r); masterSlider.value = r; }
});

document.getElementById('btn-mute-music').addEventListener('click', () => {
    if (!musicMuted) { prevMusicVol = musicVol; updateMusicUI(0); musicSlider.value = 0; }
    else { let r = prevMusicVol > 0 ? prevMusicVol : 0.25; updateMusicUI(r); musicSlider.value = r; }
});

// --- SISTEMA DE ARRANQUE ---
function iniciarAudio() {
    if (bgMusic) {
        bgMusic.volume = musicVol;
        bgMusic.play().catch(() => {});
        document.removeEventListener('click', iniciarAudio);
    }
}
document.addEventListener('click', iniciarAudio);

window.onload = () => {
    // Forzar volúmenes iniciales en los objetos de audio
    if (bgMusic) bgMusic.volume = musicVol;
    actualizarInterfaz();
};