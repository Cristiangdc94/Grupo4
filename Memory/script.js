let typingTimeout;
let masterMuted = false;
let musicMuted = false;
let currentMasterVol = 0.2;
let currentMusicVol = 0.2;

const typeSound = new Audio('../Game/Sound/undertale-text.mp3');
const hoverSound = document.getElementById('hover-sound'); 
let bgMusic; 

const projectDoc = {
    "grafico": { 
        cat: "01_DISEÑO_Y_NARRATIVA", 
        title: "APARTADO GRÁFICO", 
        body: "DISEÑO VISUAL:\nLas imágenes han sido generadas mediante IA y editadas manualmente para mantener una atmósfera coherente. Se ha buscado una estética 'Cyber-Noir' con alto contraste.\n\nHISTORIA:\nLa narrativa se desarrolla a través de un guion ramificado gestionado por JSON, donde cada decisión visual se apoya en fondos que refuerzan la inmersión del búnker." 
    },
    "tecnico": { 
        cat: "02_ARQUITECTURA_MOTOR", 
        title: "APARTADO TÉCNICO", 
        body: "MOTOR DE JUEGO:\nDesarrollado en JavaScript puro (Vanilla JS). El motor interpreta un objeto JSON que dicta personajes, expresiones, sonidos y rutas.\n\nSISTEMAS:\nSe ha implementado un sistema de mirroring automático para personajes a la izquierda, gestión de LocalStorage para el progreso y un motor Typewriter dinámico con soporte para comandos en tiempo real." 
    },
    "web": { 
        cat: "03_ENTORNO_FRONTEND", 
        title: "APARTADO WEB", 
        body: "FRONT-END:\nLa web utiliza HTML5 y CSS3 avanzado. Se han aplicado filtros de Scanlines y animaciones de 'Chaos' para simular una terminal antigua dañada.\n\nESTRUCTURA:\nDiseño SPA (Single Page Application) que permite transiciones instantáneas entre el menú de inicio y la base del juego, optimizando la carga de recursos multimedia." 
    }
};

function initHoverEffects() {
    const interactiveElements = document.querySelectorAll('.chaos-hover');
    const hSound = document.getElementById('hover-sound');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (!masterMuted && hSound) {
                const soundClone = hSound.cloneNode();
                soundClone.volume = currentMasterVol * 0.15; 
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
        const clickAttr = item.getAttribute('onclick') || "";
        item.classList.toggle('active', clickAttr.includes(id));
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

    bgMusic.volume = currentMusicVol;

    sliderMaster.oninput = (e) => {
        currentMasterVol = parseFloat(e.target.value);
        masterMuted = (currentMasterVol === 0);
        masterIcon.className = masterMuted ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high";
    };

    sliderMusic.oninput = (e) => {
        currentMusicVol = parseFloat(e.target.value);
        bgMusic.volume = currentMusicVol;
        musicMuted = (currentMusicVol === 0);
        musicIcon.className = musicMuted ? "fa-solid fa-music-slash" : "fa-solid fa-music";
    };

    btnMaster.onclick = () => {
        masterMuted = !masterMuted;
        masterIcon.className = masterMuted ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high";
    };

    btnMusic.onclick = () => {
        musicMuted = !musicMuted;
        bgMusic.muted = musicMuted;
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
    initHoverEffects(); 
    showMemory('grafico');
};