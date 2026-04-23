// --- 1. VARIABLES GLOBALES ---
let nodoActual = "inicio";
const titulo = document.getElementById('main-title');
const bgMusic = document.getElementById('bg-music');
const hoverSound = document.getElementById('hover-sound'); 
const musicToggle = document.getElementById('music-toggle');
const volumeControl = document.getElementById('volume-control');

const INTENSIDAD_GLITCH = 0.4; 
const INTENSIDAD_SHAKE = 0.2;  

// --- 2. INICIALIZACIÓN Y AUTO-PLAY ---
window.onload = () => {
    console.log("Error 404: Humanity - Sistema Cargado");

    if (musicToggle) musicToggle.checked = true;
    
    // MODIFICACIÓN: Ambos sonidos empiezan al 25%
    if (bgMusic) bgMusic.volume = 0.25;
    if (hoverSound) hoverSound.volume = 0.25;

    // Inicializar sonidos de hover en los botones
    initHoverSounds();

    const intentarReproducir = () => {
        if (bgMusic && musicToggle.checked) {
            bgMusic.play().then(() => {
                console.log("Audio sincronizado.");
                document.removeEventListener('click', intentarReproducir);
            }).catch(() => {
                console.warn("Bloqueo de navegador: Haz click para activar audio.");
            });
        }
    };

    intentarReproducir();
    document.addEventListener('click', intentarReproducir);

    setInterval(bucleDeCaos, 60);

    if (document.getElementById('pantalla-juego')) {
        actualizarPantalla();
    }
};

// --- 3. NUEVA FUNCIÓN: EFECTO DE SONIDO HOVER ---
function initHoverSounds() {
    const botones = document.querySelectorAll('.menu-btn');
    
    botones.forEach(boton => {
        boton.addEventListener('mouseenter', () => {
            if (hoverSound) {
                // Reiniciamos el sonido por si se pasa rápido entre botones
                hoverSound.currentTime = 0; 
                // MODIFICACIÓN: Aseguramos que use el volumen actual del slider al sonar
                hoverSound.volume = volumeControl ? volumeControl.value : 0.25;
                hoverSound.play().catch(e => console.log("Sonido hover bloqueado"));
            }
        });
    });
}

// --- 4. CONTROLES DE AUDIO ---
function toggleMusic() {
    if (!bgMusic || !musicToggle) return;

    if (musicToggle.checked) {
        bgMusic.play().catch(e => console.error("Error al reproducir:", e));
    } else {
        bgMusic.pause();
    }
    localStorage.setItem('musicEnabled', musicToggle.checked);
}

function updateVolume() {
    if (!bgMusic || !volumeControl) return;
    // MODIFICACIÓN: El slider ahora controla ambos audios simultáneamente
    bgMusic.volume = volumeControl.value;
    if (hoverSound) hoverSound.volume = volumeControl.value; 
}

// --- 5. GESTIÓN DE MODALES ---
function openConfig() {
    const modal = document.getElementById('config-modal');
    if (modal) modal.style.display = "flex";
}

function closeConfig() {
    const modal = document.getElementById('config-modal');
    if (modal) {
        modal.classList.add('modal-closing');
        setTimeout(() => {
            modal.style.display = "none";
            modal.classList.remove('modal-closing');
        }, 500); 
    }
}

// --- 6. EFECTOS VISUALES ---
function bucleDeCaos() {
    if (!titulo) return;
    const RNG_Visual = Math.random();
    const RNG_Shake = Math.random();

    if (RNG_Visual < INTENSIDAD_GLITCH) {
        titulo.classList.add('visual-glitch');
        setTimeout(() => titulo.classList.remove('visual-glitch'), 50);
    }

    if (RNG_Shake < INTENSIDAD_SHAKE) {
        titulo.classList.add('shake-glitch');
        setTimeout(() => titulo.classList.remove('shake-glitch'), 50);
    }
}

// --- 7. NAVEGACIÓN Y MENÚS EXTRA ---
function toggleMenu(event) {
    if (event) event.stopPropagation();
    const panel = document.getElementById('panel-quienes-somos');
    if (panel) panel.classList.toggle('oculto');
}

function toggleVerticalSlider() {
    const slider = document.getElementById('slider-lateral');
    const overlay = document.getElementById('slider-overlay');
    if (slider && overlay) {
        slider.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

document.addEventListener('click', function(event) {
    const panel = document.getElementById('panel-quienes-somos');
    const btnInfo = document.getElementById('btn-info');
    if (panel && !panel.classList.contains('oculto')) {
        if (!panel.contains(event.target) && !btnInfo.contains(event.target)) {
            panel.classList.add('oculto');
        }
    }
});

// --- 8. SALIDA DEL SISTEMA ---
function abrirModalSalida() {
    const modalSalida = document.getElementById('exit-modal');
    if (modalSalida) modalSalida.style.display = "flex";
}

function cerrarModalSalida() {
    const modalSalida = document.getElementById('exit-modal');
    if (modalSalida) {
        modalSalida.classList.add('modal-closing');
        setTimeout(() => {
            modalSalida.style.display = "none";
            modalSalida.classList.remove('modal-closing');
        }, 500);
    }
}

function confirmarSalida() {
    document.body.style.transition = "all 0.5s ease";
    document.body.style.opacity = "0";
    document.body.style.background = "black";
    setTimeout(() => {
        window.close();
        setTimeout(() => {
            alert("Acceso denegado por el navegador. Cierra la pestaña manualmente.");
            window.location.href = "about:blank";
        }, 300);
    }, 500);
}

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        const slider = document.getElementById('slider-lateral');
        if (slider && slider.classList.contains('active')) toggleVerticalSlider();
        
        const config = document.getElementById('config-modal');
        if (config && config.style.display === "flex") closeConfig();
    }
});