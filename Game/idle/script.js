// --- ESTADO DE AUDIO Y SISTEMA ---
let masterVol = 0.5, musicVol = 0.4;
let masterMuted = false, musicMuted = false;
let prevMasterVol = 0.5, prevMusicVol = 0.4;

let isTyping = false;
const typeSound = new Audio('../imagenes/mecanico.mp3'); 

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
function handleNarrative(etiqueta, titulo, textoDesc) {
    if (isTyping) return; 

    typeWriter('choice-label', etiqueta, 60, () => {
        typeWriter('choice-title', titulo, 60, () => {
            typeWriter('choice-desc', textoDesc, 80, () => {
                isTyping = false; 
            });
        });
    });
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

// Reset
document.getElementById('btn-reset').addEventListener('click', (e) => {
    if(!confirm("¿Reiniciar el caos?")) e.preventDefault();
});

// Lanzar texto inicial
window.onload = () => {
    setTimeout(() => {
        handleNarrative('TRANSMISION_ENTRANTE', 'Zona de Paso', 'Observas los pasillos del búnker. Todo parece estar en calma, pero el aire se siente denso. Desliza hacia la derecha para avanzar.');
    }, 500);
};