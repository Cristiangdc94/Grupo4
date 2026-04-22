// --- BUCLE DE CAOS (GLITCH) ---
const titulo = document.getElementById('main-title');
const INTENSIDAD_GLITCH = 0.4; 
const INTENSIDAD_SHAKE = 0.2;  

function bucleDeCaos() {
    const RNG_Visual = Math.random();
    const RNG_Shake = Math.random();

    if (RNG_Visual < INTENSIDAD_GLITCH && titulo) {
        titulo.classList.add('visual-glitch');
        setTimeout(() => { titulo.classList.remove('visual-glitch'); }, Math.random() * 60 + 20);
    }

    if (RNG_Shake < INTENSIDAD_SHAKE && titulo) {
        titulo.classList.add('shake-glitch');
        setTimeout(() => { titulo.classList.remove('shake-glitch'); }, Math.random() * 80 + 40);
    }
}

// --- CARGA INICIAL ---
window.onload = () => {
    console.log("Error 404: Humanity - Sistema de Interfaz Cargado");
    
    // Configuración música
    const musicToggle = document.getElementById('music-toggle');
    const savedMusic = localStorage.getItem('musicEnabled') === 'true';
    if(musicToggle) musicToggle.checked = savedMusic;
    
    // Iniciar bucle
    setInterval(bucleDeCaos, 60); 
};

// --- LÓGICA DE NAVEGACIÓN Y CONFIGURACIÓN ---

function startGame() {
    alert("Iniciando conexión con la red neuronal...");
}

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

function toggleMusic() {
    const bgMusic = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');
    if (musicToggle.checked) {
        bgMusic.play().catch(e => console.warn("Interacción requerida para audio"));
    } else {
        bgMusic.pause();
    }
    localStorage.setItem('musicEnabled', musicToggle.checked);
}

function updateVolume() {
    const bgMusic = document.getElementById('bg-music');
    const volumeControl = document.getElementById('volume-control');
    bgMusic.volume = volumeControl.value;
}

// --- LÓGICA DEL MENÚ DE SALIDA ---

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

// --- LÓGICA MENÚ ¿QUIÉNES SOMOS? ---

function toggleMenu(event) {
    // Detiene la propagación para que el clic del botón no cierre el menú inmediatamente
    if (event) event.stopPropagation();
    
    const panel = document.getElementById('panel-quienes-somos');
    panel.classList.toggle('oculto');
}

<<<<<<< HEAD
/* --- LÓGICA DEL SLIDER VERTICAL --- */
function toggleVerticalSlider() {
    const slider = document.getElementById('slider-lateral');
    const overlay = document.getElementById('slider-overlay');
    
    slider.classList.toggle('active');
    overlay.classList.toggle('active');

    if (slider.classList.contains('active')) {
        console.log("Slider: Conexión establecida.");
    } else {
        console.log("Slider: Conexión finalizada.");
    }
}

// Cerrar el slider si se pulsa la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        const slider = document.getElementById('slider-lateral');
        if (slider.classList.contains('active')) {
            toggleVerticalSlider();
        }
    }
});

// Nota: He mantenido tus funciones anteriores intactas. 
// Asegúrate de que el window.onload no sobrescriba el anterior.
// Puedes añadir la inicialización aquí:
const originalOnload = window.onload;
window.onload = () => {
    if (originalOnload) originalOnload();
    console.log("Módulo de Slider Vertical Inyectado.");
};

/* --- CONTROL DEL SLIDER INFORMATIVO --- */
function toggleVerticalSlider() {
    const slider = document.getElementById('slider-lateral');
    const overlay = document.getElementById('slider-overlay');
    
    // Alternamos las clases active para mostrar/ocultar
    if (!slider.classList.contains('active')) {
        slider.classList.add('active');
        overlay.classList.add('active');
        console.log("Terminal de información: Acceso concedido.");
    } else {
        slider.classList.remove('active');
        overlay.classList.remove('active');
        console.log("Terminal de información: Desconexión.");
    }
}

// Cerrar con tecla Escape por accesibilidad
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        const slider = document.getElementById('slider-lateral');
        if (slider.classList.contains('active')) {
            toggleVerticalSlider();
        }
=======
// Event listener global para cerrar al hacer clic fuera
document.addEventListener('click', function(event) {
    const panel = document.getElementById('panel-quienes-somos');
    const btnInfo = document.getElementById('btn-info');
    
    // Solo cerrar si el panel está visible y el clic es fuera del panel y fuera del botón
    if (panel && btnInfo && !panel.classList.contains('oculto') && 
        !panel.contains(event.target) && !btnInfo.contains(event.target)) {
        
        panel.classList.add('oculto');
>>>>>>> ae573aedd82443e6bd2c6360520bea3c5a3103d2
    }
});