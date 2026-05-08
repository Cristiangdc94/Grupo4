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
        body: "DISEÑO VISUAL:\nLas imágenes de los fondos y personajes han sido generadas mediante IA y editadas manualmente con PHOTOSHOP para mantener una atmósfera coherente. Se ha buscado una estética al puro estilo del Anime Japones y una representacion como los juegos antiguos de FINAL FANTASY, tanto en los escenarios como en los personajes\n\nHISTORIA:\nLa narrativa es totalmente creada sin IA, saliendo de nuestras ideas, improvisaciones y corazon..., nos inspiramos en juegos con diferentes finales y caminos para acabar la historia como DETROIT: BECOME HUMAN." 
    },
    "tecnico": { 
        cat: "02_ARQUITECTURA_MOTOR", 
        title: "APARTADO TÉCNICO", 
        body: "MOTOR DE JUEGO:\nDesarrollado en JavaScript puro (Vanilla JS). El motor interpreta un objeto JSON que dicta personajes, expresiones, sonidos y el camino que tomará la historia en base a tus decisiones.\n\nSISTEMAS:\nSe ha implementado un sistema de mirroring automático para personajes a la izquierda, gestión de LocalStorage para el progreso y un motor Typewriter dinámico con soporte para comandos en tiempo real." 
    },
    "web": { 
        cat: "03_ENTORNO_FRONTEND", 
        title: "APARTADO WEB", 
        body: "FRONT-END:\nLa web utiliza HTML y CSS avanzado junto a animaciones hechas en JS para una mejor presentacion a la portada de nuestra web. Se han aplicado animaciones gracias a un TypeWriter que hace que el texto sea más inmersivo y bonito de leer.\n\nESTRUCTURA:\nDiseño SPA (Single Page Application) que permite transiciones instantáneas entre el menú de inicio y la base del juego, optimizando la carga de recursos multimedia." 
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