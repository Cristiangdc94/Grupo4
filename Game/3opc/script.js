// --- ESTADO DE AUDIO Y SISTEMA ---
let masterVol = 0.5, musicVol = 0.4;
let masterMuted = false, musicMuted = false;
let prevMasterVol = 0.5, prevMusicVol = 0.4;

let isTyping = false;
const typeSound = new Audio('../imagenes/mecanico.mp3'); // Ajustada la ruta si estás en subcarpeta

// --- SELECTORES ---
const masterSlider = document.getElementById('input-master');
const musicSlider = document.getElementById('input-music');
const masterIcon = document.getElementById('volume-icon');
const musicIcon = document.getElementById('music-icon');
const menuControl = document.getElementById('menu-control');
const menuOverlay = document.getElementById('menu-overlay');

// --- MOTOR DE ESCRITURA CON CALLBACK ---
function typeWriter(elementId, text, speed, callback = null) {
    const element = document.getElementById(elementId);
    if(!element) return;
    element.innerHTML = ""; 
    let i = 0;
    isTyping = true;

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            
            if (text.charAt(i) !== " " && !masterMuted) {
                const soundClone = typeSound.cloneNode();
                soundClone.volume = masterVol; 
                soundClone.play().catch(() => {}); 
            }

            i++;
            setTimeout(typing, speed);
        } else {
            if (callback) {
                callback(); 
            } else {
                isTyping = false; 
            }
        }
    }
    typing();
}

// --- SECUENCIA: ETIQUETA -> TÍTULO -> DESCRIPCIÓN ---
function handleChoice(etiqueta, titulo, textoDesc, logDesc) {
    if (isTyping) return; 

    typeWriter('choice-label', etiqueta, 60, () => {
        typeWriter('choice-title', titulo, 60, () => {
            typeWriter('choice-desc', textoDesc, 80, () => {
                isTyping = false; 
            });
        });
    });

    const log = document.getElementById('decision-log');
    if(log){
        const empty = log.querySelector('.empty-msg');
        if (empty) empty.remove();
        
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.innerHTML = `<strong>${titulo}</strong><p>${logDesc}</p>`;
        log.prepend(entry);
    }
}

// --- CIERRE AUTOMÁTICO DE MENÚ ---
menuOverlay.addEventListener('click', () => {
    menuControl.checked = false;
});

// --- LÓGICA DE VOLUMEN ---
function updateMasterUI(val) {
    masterVol = parseFloat(val);
    masterMuted = masterVol === 0;
    masterIcon.className = masterVol === 0 ? "fa-solid fa-volume-xmark" : (masterVol < 0.5 ? "fa-solid fa-volume-low" : "fa-solid fa-volume-high");
}

function updateMusicUI(val) {
    musicVol = parseFloat(val);
    musicMuted = musicVol === 0;
    musicIcon.style.color = musicMuted ? "#555" : "#FF0000";
}

masterSlider.addEventListener('input', (e) => updateMasterUI(e.target.value));
musicSlider.addEventListener('input', (e) => updateMusicUI(e.target.value));

document.getElementById('btn-mute-master').addEventListener('click', () => {
    if (!masterMuted) { prevMasterVol = masterVol; masterSlider.value = 0; updateMasterUI(0); }
    else { let r = prevMasterVol > 0 ? prevMasterVol : 0.5; masterSlider.value = r; updateMasterUI(r); }
});

document.getElementById('btn-mute-music').addEventListener('click', () => {
    if (!musicMuted) { prevMusicVol = musicVol; musicSlider.value = 0; updateMusicUI(0); }
    else { let r = prevMusicVol > 0 ? prevMusicVol : 0.4; musicSlider.value = r; updateMusicUI(r); }
});

// Eventos de botones (AHORA CON 3)
document.getElementById('opt-1').addEventListener('click', (e) => {
    e.preventDefault();
    handleChoice('LOG_01', 'Fragmentación', 'Has decidido romper el tejido de la realidad.', 'Elegiste fragmentar.');
});

document.getElementById('opt-2').addEventListener('click', (e) => {
    e.preventDefault();
    handleChoice('LOG_02', 'Resistencia', 'Te mantienes firme ante el caos.', 'Elegiste resistir.');
});

document.getElementById('opt-3').addEventListener('click', (e) => {
    e.preventDefault();
    handleChoice('LOG_03', 'Neutralidad', 'Observas el vacío sin intervenir.', 'Elegiste observar.');
});

// Reset
document.getElementById('btn-reset').addEventListener('click', (e) => {
    if(!confirm("¿Reiniciar el caos?")) e.preventDefault();
});

// Lanzar texto inicial
window.onload = () => {
    setTimeout(() => {
        handleChoice('PROTOCOLO_INICIO', 'Punto Cero', 'La realidad se fragmenta ante ti. Elige tu camino.', 'Inicio.');
    }, 500);
};