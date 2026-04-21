const titulo = document.getElementById('main-title');

// Intensidades: Cuanto más alto, más frecuente
const INTENSIDAD_GLITCH = 0.4; 
const INTENSIDAD_SHAKE = 0.2;  

function bucleDeCaos() {
    const RNG_Visual = Math.random();
    const RNG_Shake = Math.random();

    // Fallo visual del título
    if (RNG_Visual < INTENSIDAD_GLITCH) {
        titulo.classList.add('visual-glitch');
        
        setTimeout(() => {
            titulo.classList.remove('visual-glitch');
        }, Math.random() * 60 + 20);
    }

    // Sacudida del título
    if (RNG_Shake < INTENSIDAD_SHAKE) {
        titulo.classList.add('shake-glitch');

        setTimeout(() => {
            titulo.classList.remove('shake-glitch');
        }, Math.random() * 80 + 40);
    }
}

// Ejecución constante cada 60ms para fluidez
window.onload = () => {
    console.log("Error 404: Humanity - Sistema de Interfaz Cargado");
    setInterval(bucleDeCaos, 60); 
};

// Función base para el botón
function startGame() {
    alert("Iniciando conexión con la red neuronal...");
    // Aquí iría tu lógica para cambiar a la primera escena del juego
}

const modal = document.getElementById('config-modal');
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const volumeControl = document.getElementById('volume-control');

// Abrir y cerrar menú
function openConfig() {
    modal.style.display = "flex";
}

function closeConfig() {
    modal.style.display = "none";
}

// Control de Música
function toggleMusic() {
    if (musicToggle.checked) {
        bgMusic.play().catch(error => {
            console.log("Error: El usuario debe interactuar primero.");
        });
    } else {
        bgMusic.pause();
    }
}

// Control de Volumen
function updateVolume() {
    bgMusic.volume = volumeControl.value;
}

// Guardar preferencia
localStorage.setItem('musicEnabled', musicToggle.checked);

// Leer preferencia al cargar
window.onload = () => {
    const savedMusic = localStorage.getItem('musicEnabled') === 'true';
    musicToggle.checked = savedMusic;
    if(savedMusic) { /* reproducir */ }
    // ... tu bucleDeCaos() aquí ...
};

// --- FUNCIONES DE NAVEGACIÓN DEL MENÚ ---

function openConfig() {
    console.log("Abriendo configuración..."); // Esto saldrá en la consola (F12) para debuguear
    const modal = document.getElementById('config-modal');
    if (modal) {
        modal.style.display = "flex";
    } else {
        console.error("No se encontró el elemento config-modal");
    }
}

function closeConfig() {
    const modal = document.getElementById('config-modal');
    
    if (modal) {
        console.log("Iniciando animación de cierre...");
        
        // 1. Añadimos la clase que dispara la animación CSS
        modal.classList.add('modal-closing');

        // 2. IMPORTANTE: Esperamos el tiempo exacto de la animación (0.5s = 500ms)
        // antes de poner el display: none
        setTimeout(() => {
            modal.style.display = "none";
            
            // 3. Quitamos la clase para que al volver a abrirlo esté "limpio"
            modal.classList.remove('modal-closing');
            console.log("Menú cerrado y limpiado.");
        }, 500); 
    }
}

// --- LÓGICA DE AUDIO ---

function toggleMusic() {
    const bgMusic = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');
    
    if (musicToggle.checked) {
        bgMusic.play().catch(e => console.warn("Interacción requerida para audio"));
    } else {
        bgMusic.pause();
    }
}

function updateVolume() {
    const bgMusic = document.getElementById('bg-music');
    const volumeControl = document.getElementById('volume-control');
    bgMusic.volume = volumeControl.value;
}

// --- LÓGICA DEL MENÚ DE SALIDA ---

function abrirModalSalida() {
    const modalSalida = document.getElementById('exit-modal');
    if (modalSalida) {
        modalSalida.style.display = "flex";
        console.log("Sistema: Solicitud de desconexión detectada.");
    }
}

function cerrarModalSalida() {
    const modalSalida = document.getElementById('exit-modal');
    if (modalSalida) {
        modalSalida.classList.add('modal-closing');
        
        setTimeout(() => {
            modalSalida.style.display = "none";
            modalSalida.classList.remove('modal-closing');
        }, 500); // Mismo tiempo que configuramos para el otro menú
    }
}

function confirmarSalida() {
    console.log("Desconectando...");
    
    // Efecto visual de fundido a negro antes de intentar cerrar
    document.body.style.transition = "all 0.5s ease";
    document.body.style.opacity = "0";
    document.body.style.background = "black";

    setTimeout(() => {
        // Intento de cerrar la pestaña
        window.close();

        // Nota realista: Los navegadores bloquean window.close() si no se abrió por script.
        // Si no se cierra, avisamos al usuario o redirigimos.
        setTimeout(() => {
            alert("Acceso denegado por el navegador. Por favor, cierra la pestaña manualmente.");
            window.location.href = "about:blank";
        }, 300);
    }, 500);
}

function toggleMenu() {
    const menu = document.getElementById('menu-desplegable');
    // Alterna la clase 'oculto' para mostrar/esconder
    menu.classList.toggle('oculto');
}

function toggleMenu() {
    const panel = document.getElementById('panel-quienes-somos');
    panel.classList.toggle('oculto');
}

// IMPORTANTE: Modifica el botón de CONFIGURACIÓN en tu HTML 
// para que llame a openConfig():
// <button class="menu-btn" onclick="openConfig()">CONFIGURACIÓN</button>