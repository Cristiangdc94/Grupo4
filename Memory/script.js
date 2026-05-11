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
        body: "DISEÑO VISUAL:\nLos escenarios y personajes han sido generados mediante IA, pero refinados y editados manualmente con ADOBE PHOTOSHOP para asegurar una estética coherente inspirada en el Anime Clásico y la representación visual de las escenas son inspiracion de los Final Fantasy antiguos.\n\nHISTORIA:\nNarrativa 100% original. Se ha diseñado un guion ramificado sin intervención de IA, basándonos en la improvisación y la pasión por los juegos de toma de decisiones como DETROIT: BECOME HUMAN. Cada línea de diálogo busca conectar emocionalmente con el usuario y mostrar de la forma adecuada las consecuencias de tus actos, la historia cambia si haces las cosas bien o sin pensar pensando que no pasara nada." 
    },
    "tecnico": { 
        cat: "02_ARQUITECTURA_MOTOR", 
        title: "APARTADO TÉCNICO", 
        body: "MOTOR DE JUEGO (VANILLA JS):\nEl sistema funciona mediante un intérprete de objetos JSON que gestiona nodos de historia, expresiones de personajes y rutas dinámicas. No se han utilizado librerías externas para la lógica central.\n\nSISTEMAS AVANZADOS:\n1. PERSISTENCIA: Uso de LocalStorage para guardar nombre, decisiones y volumen.\n2. DINÁMICA: Sistema de mirroring automático (espejo) para personajes según su posición (left/right).\n3. TYPEWRITER: Motor de texto progresivo con soporte para comandos en tiempo real (pipes |) que cambian el estado visual del juego mientras se escribe." 
    },
    "web": { 
    cat: "03_ENTORNO_FRONTEND", 
    title: "APARTADO WEB", 
    body: "SISTEMA DE AUDIO DINÁMICO:\nGestión multicanal (BGM/SFX) mediante objetos de audio asíncronos. Se utiliza la técnica de 'Audio Cloning' para permitir la superposición de efectos sonoros en las teclas y botones, garantizando una latencia cero durante la interacción.\n\nMOTOR DE TEXTO (TYPEWRITER):\nAlgoritmo de renderizado carácter a carácter basado en temporizadores de JS. El motor procesa el texto en tiempo real, sincronizando cada pulsación visual con un evento acústico y permitiendo la inserción de comandos lógicos entre líneas.\n\nPOST-PROCESADO VISUAL (FX):\nUso intensivo de CSS3 avanzado para simular hardware antiguo: capas de 'Scanlines' con gradientes lineales, aberración cromática mediante sombras y filtros de ruido. Las sacudidas y glitches se controlan con animaciones aleatorias disparadas por el motor lógico.\n\nARQUITECTURA Y PERSISTENCIA:\nDiseño SPA (Single Page Application) que gestiona modales y menús mediante manipulación del DOM. Incluye un sistema de persistencia basado en LocalStorage que sincroniza el volumen global, el progreso de la narrativa y el expediente del usuario entre sesiones." 
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