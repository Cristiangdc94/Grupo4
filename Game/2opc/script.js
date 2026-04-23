// --- CLASE GESTORA DE SONIDO ---
class SoundManager {
    constructor() {
        this.masterVolume = 0.5;
        this.musicVolume = 0.4;
        
        // Efectos de sonido
        this.sfx = {
            typeWriter: new Audio('../Sounds/mecanico.mp3') 
        };

        // Vinculamos la música al elemento del HTML
        this.music = document.getElementById('../Music/fondo-juego.mp3') || null;

        this.init();
    }

    init() {
        if (this.music) {
            this.music.volume = this.musicVolume;
        }
    }

    playSFX(name) {
        if (this.masterVolume <= 0) return;
        const sound = this.sfx[name].cloneNode();
        sound.volume = this.masterVolume;
        sound.play().catch(() => {}); 
    }

    updateMusicVolume(val) {
        this.musicVolume = parseFloat(val);
        if (this.music) {
            this.music.volume = this.musicVolume;
        }
    }

    updateMasterVolume(val) {
        this.masterVolume = parseFloat(val);
    }
}

const AudioManager = new SoundManager();

// --- ESTADO ---
let isTyping = false;

// --- MOTOR DE ESCRITURA ---
function typeWriter(elementId, text, speed, callback = null) {
    const element = document.getElementById(elementId);
    if(!element) return;
    
    element.innerHTML = ""; 
    let i = 0;
    isTyping = true;

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            
            // Sonido de tecla
            if (text.charAt(i) !== " ") {
                AudioManager.playSFX('typeWriter');
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

// --- LÓGICA DE INTERFAZ ---
function handleChoice(etiqueta, titulo, textoDesc, logDesc) {
    if (isTyping) return; 

    // Desbloqueo de audio (si el navegador lo tenía pausado)
    if (AudioManager.music && AudioManager.music.paused) {
        AudioManager.music.play().catch(() => {});
    }

    // Secuencia encadenada
    typeWriter('choice-label', etiqueta, 50, () => {
        typeWriter('choice-title', titulo, 50, () => {
            typeWriter('choice-desc', textoDesc, 30, () => {
                isTyping = false; 
            });
        });
    });

    // Actualizar historial
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

// --- SELECTORES Y EVENTOS ---
const masterSlider = document.getElementById('input-master');
const musicSlider = document.getElementById('input-music');
const masterIcon = document.getElementById('volume-icon');

masterSlider.addEventListener('input', (e) => {
    const val = e.target.value;
    AudioManager.updateMasterVolume(val);
    masterIcon.className = val == 0 ? "fa-solid fa-volume-xmark" : (val < 0.5 ? "fa-solid fa-volume-low" : "fa-solid fa-volume-high");
});

musicSlider.addEventListener('input', (e) => {
    AudioManager.updateMusicVolume(e.target.value);
});

// Botones de Mute
document.getElementById('btn-mute-master').addEventListener('click', () => {
    const target = AudioManager.masterVolume > 0 ? 0 : 0.5;
    masterSlider.value = target;
    masterSlider.dispatchEvent(new Event('input'));
});

document.getElementById('btn-mute-music').addEventListener('click', () => {
    const target = AudioManager.musicVolume > 0 ? 0 : 0.4;
    musicSlider.value = target;
    musicSlider.dispatchEvent(new Event('input'));
});

// Eventos de opciones
document.getElementById('opt-1').addEventListener('click', (e) => {
    e.preventDefault();
    handleChoice('LOG_DATA_ERROR', 'Fragmentación', 'Has decidido romper el tejido de la realidad.', 'Elegiste el camino del caos absoluto.');
});

document.getElementById('opt-2').addEventListener('click', (e) => {
    e.preventDefault();
    handleChoice('SYSTEM_STABLE', 'Resistencia', 'Te mantienes firme. El código se estabiliza.', 'Decidiste resistir la influencia del rojo.');
});

// Overlay y Menú
document.getElementById('menu-overlay').addEventListener('click', () => {
    document.getElementById('menu-control').checked = false;
});

// Inicialización
window.onload = () => {
    // Al primer clic en el body, activamos el audio por si el navegador lo bloqueó
    document.body.addEventListener('click', () => {
        if (AudioManager.music) AudioManager.music.play().catch(() => {});
    }, { once: true });

    setTimeout(() => {
        handleChoice('PROTOCOLO_INICIO', 'Punto Cero', 'La realidad se fragmenta ante ti.', 'Inicio de la sesión.');
    }, 500);
};