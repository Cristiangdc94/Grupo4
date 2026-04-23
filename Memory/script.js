let typingTimeout;
let masterMuted = false;
let musicMuted = false;
let currentMasterVol = 0.2;
let currentMusicVol = 0.2;

// Archivos de sonido
const typeSound = new Audio('../Game/Sound/undertale-text.mp3');
const hoverSound = document.getElementById('hover-sound'); 
let bgMusic; 

const projectDoc = {
    "intro": { cat: "01_DATOS_GENERALES", title: "INTRODUCCIÓN", body: "Chaos Red es un entorno experimental de narrativa interactiva.\n\nDiseñado como una interfaz de búnker post-apocalíptico." },
    "concept": { cat: "02_DISEÑO_VISUAL", title: "CONCEPTO Y ARTE", body: "Inspiración: Minimalismo brutalista y estética 'Terminal Retro'." },
    "tech": { cat: "03_INFRAESTRUCTURA", title: "STACK TECNOLÓGICO", body: "El proyecto se ha construido bajo estándares modernos de optimización." },
    "mechanics": { cat: "04_MOTOR_LÓGICO", title: "MECÁNICAS", body: "1. Motor Typewriter progresivo.\n2. Audio Reactivo.\n3. UI Dinámica." },
    "stats": { cat: "05_ANALÍTICA", title: "ESTADÍSTICAS", body: "Recuento de activos: Líneas de CSS: 250+, Assets de Video: 1." },
    "future": { cat: "06_OBJETIVOS", title: "DESARROLLO FUTURO", body: "Implementación de LocalStorage y sistema de inventario." }
};

// Función para inicializar sonidos hover en elementos con clase .chaos-hover
function initHoverEffects() {
    const interactiveElements = document.querySelectorAll('.chaos-hover');
    const hSound = document.getElementById('hover-sound');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (!masterMuted && hSound) {
                const soundClone = hSound.cloneNode();
                hoverSound.volume = 0.3;
                soundClone.volume = currentMasterVol; // USA EL VOLUMEN MASTER
                soundClone.play().catch(() => {});
            }
        });
    });
}

function typeWriter(elementId, text, speed) {
    const element = document.getElementById(elementId);
    if(!element) return;

    clearTimeout(typingTimeout);
    element.innerHTML = ""; 
    let i = 0;

    function typing() {
        if (i < text.length) {
            let char = text.charAt(i);
            element.innerHTML += char;

            // Sonido de teclas (afectado por volumen Master)
            if (char !== " " && char !== "\n" && !masterMuted) {
                const soundClone = typeSound.cloneNode();
                soundClone.volume = currentMasterVol;
                soundClone.play().catch(() => {});
            }

            i++;
            typingTimeout = setTimeout(typing, speed);
        }
    }
    typing();
}

function showMemory(id) {
    const data = projectDoc[id];
    if (!data) return;
    
    document.getElementById('db-category').innerText = data.cat;
    document.getElementById('db-title').innerText = data.title;
    typeWriter('db-body', data.body, 15);

    document.querySelectorAll('.db-item').forEach(item => {
        // Ajuste para marcar activo correctamente
        const itemText = item.innerText.toLowerCase();
        item.classList.toggle('active', itemText.includes(id.toLowerCase()));
    });
}

function setupAudio() {
    bgMusic = document.getElementById('bg-music');
    const btnMaster = document.getElementById('btn-mute-master');
    const btnMusic = document.getElementById('btn-mute-music');
    const sliderMaster = document.getElementById('volume-master');
    const sliderMusic = document.getElementById('volume-music');
    const masterIcon = document.getElementById('master-icon');
    const musicIcon = document.getElementById('music-icon');

    // Control Slider Master (Teclas y Hover)
    sliderMaster.oninput = (e) => {
        currentMasterVol = parseFloat(e.target.value);
        masterMuted = (currentMasterVol === 0);
        masterIcon.className = masterMuted ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high";
    };

    // Control Slider Música
    sliderMusic.oninput = (e) => {
        currentMusicVol = parseFloat(e.target.value);
        bgMusic.volume = currentMusicVol;
        musicMuted = (currentMusicVol === 0);
        musicIcon.className = musicMuted ? "fa-solid fa-music-slash" : "fa-solid fa-music";
    };

    // Botón Mute Master
    btnMaster.onclick = () => {
        masterMuted = !masterMuted;
        btnMaster.classList.toggle('muted', masterMuted);
        masterIcon.className = masterMuted ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high";
    };

    // Botón Mute Música
    btnMusic.onclick = () => {
        musicMuted = !musicMuted;
        bgMusic.muted = musicMuted;
        btnMusic.classList.toggle('muted', musicMuted);
        musicIcon.className = musicMuted ? "fa-solid fa-music-slash" : "fa-solid fa-music";
    };

    const startAudio = () => {
        bgMusic.volume = currentMusicVol;
        bgMusic.play().catch(() => {});
        document.removeEventListener('click', startAudio);
    };
    document.addEventListener('click', startAudio);
}

window.onload = () => {
    setupAudio();
    initHoverEffects(); // Inicializa los sonidos hover
    showMemory('intro');
};