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
    
    if (bgMusic) bgMusic.volume = 0.50;
    if (hoverSound) hoverSound.volume = 0.05;

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
                hoverSound.currentTime = 0; 
                let currentSliderVal = volumeControl ? volumeControl.value : 0.5;
                hoverSound.volume = currentSliderVal * 0.15; 
                
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
    
    bgMusic.volume = volumeControl.value;
    
    if (hoverSound) {
        hoverSound.volume = volumeControl.value * 0.15;
    }
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

// --- 7. NAVEGACIÓN Y LÓGICA DE CARGA (NUEVO / ACTUALIZADO) ---

function prepararNuevaPartida() {
    // Limpia el LocalStorage antes de navegar a la base del juego
    localStorage.removeItem('chaos_red_save');
}

function abrirInfoCarga() {
    const save = localStorage.getItem('chaos_red_save');
    if (save) {
        try {
            const data = JSON.parse(save);
            
            // Creamos un div temporal para contar las decisiones en el log guardado
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data.log;
            const numDecisiones = tempDiv.querySelectorAll('.log-entry').length;

            // Rellenar datos en el modal de la interfaz
            document.getElementById('load-name').innerText = data.nombre || "Desconocido";
            document.getElementById('load-node').innerText = data.nodo ? data.nodo.toUpperCase() : "INICIO";
            document.getElementById('load-decisions').innerText = numDecisiones;
            
            // Mostrar el modal
            document.getElementById('load-info-modal').style.display = "flex";
        } catch (e) {
            console.error("Error al procesar el archivo de guardado.");
        }
    } else {
        alert("SISTEMA: No se han encontrado registros de sincronización previos.");
    }
}

function cerrarInfoCarga() {
    const modal = document.getElementById('load-info-modal');
    if (modal) {
        modal.classList.add('modal-closing');
        setTimeout(() => {
            modal.style.display = "none";
            modal.classList.remove('modal-closing');
        }, 500);
    }
}

function confirmarCarga() {
    window.location.href = "Game/MainGame/Base.html";
}

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

        const loadModal = document.getElementById('load-info-modal');
        if (loadModal && loadModal.style.display === "flex") cerrarInfoCarga();
    }
});