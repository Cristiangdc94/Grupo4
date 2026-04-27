// --- ESTADO DE AUDIO Y SISTEMA ---
let masterVol = 0.25, musicVol = 0.25; 
let masterMuted = false, musicMuted = false;
let prevMasterVol = 0.25, prevMusicVol = 0.25;
let isTyping = false;
let playerName = "Invitado";

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

// --- NUEVA LÓGICA DE NOMBRE ---
function saveUserName() {
    const input = document.getElementById('user-name-input');
    if (input.value.trim() !== "") {
        playerName = input.value.trim();
        document.getElementById('display-player-name').innerText = playerName;
        document.getElementById('name-modal').style.display = "none";
        guardarProgreso();
        actualizarInterfaz(); // Refrescar para aplicar el nombre
    } else {
        input.style.borderColor = "red";
    }
}

function exitToMenu() {
    window.location.href = "../../index.html";
}

// --- LÓGICA DE GUARDADO (LOCAL STORAGE) ---
function guardarProgreso() {
    const dataSave = {
        nodo: nodoActual,
        log: document.getElementById('decision-log').innerHTML,
        volMaster: masterVol,
        volMusic: musicVol,
        nombre: playerName
    };
    localStorage.setItem('chaos_red_save', JSON.stringify(dataSave));
}

function cargarProgreso() {
    const save = localStorage.getItem('chaos_red_save');
    if (save) {
        const data = JSON.parse(save);
        nodoActual = data.nodo;
        document.getElementById('decision-log').innerHTML = data.log;
        masterVol = data.volMaster;
        musicVol = data.volMusic;
        playerName = data.nombre || "Invitado";
        masterSlider.value = masterVol;
        musicSlider.value = musicVol;
        document.getElementById('display-player-name').innerText = playerName;
        document.getElementById('name-modal').style.display = "none";
    } else {
        document.getElementById('name-modal').style.display = "flex";
    }
}

function borrarPartida() {
    if(confirm("¿Eliminar todos los datos de sincronización?")) {
        localStorage.removeItem('chaos_red_save');
        location.reload();
    }
}

function handleChoice(nodoSiguiente, etiqueta, titulo, textoDesc, logDesc) {
    isTyping = false; 
    const log = document.getElementById('decision-log');
    if (log && logDesc) {
        const empty = log.querySelector('.empty-msg');
        if (empty) empty.remove();
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        // Reemplazar nombre en el log
        let formattedLog = logDesc.replace(/{PLAYER}/g, playerName);
        entry.innerHTML = `<strong>${titulo}</strong><p>${formattedLog}</p>`;
        log.prepend(entry);
    }

    nodoActual = nodoSiguiente;
    guardarProgreso(); // Guardar automáticamente en cada decisión
    actualizarInterfaz();
}

function actualizarInterfaz() {
    isTyping = false;
    const datos = historia[nodoActual];
    if (!datos) return;

    const bg = document.querySelector('.background-image');
    if (bg && datos.fondo) bg.style.backgroundImage = `url('${datos.fondo}')`;

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

    document.getElementById('choice-title').innerText = datos.titulo;
    // REEMPLAZO DE NOMBRE EN DESCRIPCIÓN
    let textoProcesado = datos.descripcion.replace(/{PLAYER}/g, playerName);
    typeWriter('choice-desc', textoProcesado, 20);

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

    initHoverSounds();
}

function initHoverSounds() {
    const targets = document.querySelectorAll('.chaos-hover');
    targets.forEach(target => {
        target.onmouseenter = () => {
            if (!masterMuted && masterVol > 0 && hoverSound) {
                const hSound = hoverSound.cloneNode();
                hSound.volume = masterVol * 0.15; 
                hSound.play().catch(() => {});
            }
        };
    });
}

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
    guardarProgreso();
}

function updateMusicUI(val) {
    musicVol = parseFloat(val);
    musicMuted = musicVol === 0;
    if (bgMusic) bgMusic.volume = musicVol;
    musicIcon.style.color = musicMuted ? "#555" : "#FF0000";
    guardarProgreso();
}

document.getElementById('btn-mute-master').addEventListener('click', () => {
    if (!masterMuted) { prevMasterVol = masterVol; updateMasterUI(0); masterSlider.value = 0; }
    else { let r = prevMasterVol > 0 ? prevMasterVol : 0.25; updateMasterUI(r); masterSlider.value = r; }
});

document.getElementById('btn-mute-music').addEventListener('click', () => {
    if (!musicMuted) { prevMusicVol = musicVol; updateMusicUI(0); musicSlider.value = 0; }
    else { let r = prevMusicVol > 0 ? prevMusicVol : 0.25; updateMusicUI(r); musicSlider.value = r; }
});

function iniciarAudio() {
    if (bgMusic) {
        bgMusic.volume = musicVol;
        bgMusic.play().catch(() => {});
        document.removeEventListener('click', iniciarAudio);
    }
}
document.addEventListener('click', iniciarAudio);

window.onload = () => {
    cargarProgreso(); // Intentar cargar partida
    actualizarInterfaz();
};