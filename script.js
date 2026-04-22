// --- 1. MOTOR DE HISTORIA ---
let nodoActual = "inicio";

function procesarDecision(proximoNodo, url = null) {
    if (url) {
        window.open(url, '_blank');
        return;
    }
    nodoActual = proximoNodo;
    actualizarPantalla();
}

function actualizarPantalla() {
    const datos = historia[nodoActual];
    const textoElement = document.getElementById('texto-historia');
    const contenedorTexto = document.getElementById('pantalla-juego'); // El padre que posicionas
    const contenedorBotones = document.getElementById('botones-historia');

    // 1. Gestionar el texto
    if (textoElement) textoElement.innerText = datos.texto;

    // 2. Gestionar la POSICIÓN (Añade/Quita clases CSS)
    // Asumimos que tienes una clase base "pantalla-juego" y las del JSON añaden diseño
    contenedorTexto.className = 'pantalla-juego'; // Resetea a la clase base
    if (datos.posicion) {
        contenedorTexto.classList.add(datos.posicion);
    }

    // 3. Gestionar los BOTONES
    if (contenedorBotones) {
        contenedorBotones.innerHTML = '';

        datos.opciones.forEach(opcion => {
            const btn = document.createElement('button');
            
            // Si hay "tipo" usa esa clase, si no, usa el botón normal
            btn.className = opcion.tipo || "menu-btn";
            
            btn.innerText = opcion.texto;
            btn.onclick = () => procesarDecision(opcion.siguiente, opcion.url);
            contenedorBotones.appendChild(btn);
        });

        // Parche de seguridad
        if (datos.opciones.length === 0) {
            const btnContinuar = document.createElement('button');
            btnContinuar.className = "menu-btn";
            btnContinuar.innerText = "FIN";
            btnContinuar.onclick = () => alert("Historia terminada.");
            contenedorBotones.appendChild(btnContinuar);
        }
    }
}

// --- 2. INICIALIZACIÓN AUTOMÁTICA ---
window.onload = () => {
    if (document.getElementById('pantalla-juego')) {
        console.log("Iniciando motor narrativo...");
        actualizarPantalla();
    }

    const musicToggle = document.getElementById('music-toggle');
    if (musicToggle) {
        musicToggle.checked = localStorage.getItem('musicEnabled') === 'true';
    }
    
    // Asegúrate de que bucleDeCaos exista o elimínalo si no lo usas en esta página
    if (typeof bucleDeCaos === 'function') {
        setInterval(bucleDeCaos, 60); 
    }
};

// --- 3. FUNCIONES DE APOYO ---
function toggleMenu(event) {
    if (event) event.stopPropagation();
    const panel = document.getElementById('panel-quienes-somos');
    panel.classList.toggle('oculto');
}

document.addEventListener('click', function(event) {
    const panel = document.getElementById('panel-quienes-somos');
    const btnInfo = document.getElementById('btn-info');
    if (panel && btnInfo && !panel.classList.contains('oculto') && 
        !panel.contains(event.target) && !btnInfo.contains(event.target)) {
        panel.classList.add('oculto');
    }
});

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
    }
});