let typingTimeout;

const projectDoc = {
    "intro": {
        cat: "01_DATOS_GENERALES",
        title: "INTRODUCCIÓN",
        body: "Chaos Red es un entorno experimental de narrativa interactiva.\n\nDiseñado como una interfaz de búnker post-apocalíptico, el sistema permite al usuario navegar por una historia ramificada donde el diseño visual y el feedback sonoro construyen una atmósfera de tensión constante."
    },
    "concept": {
        cat: "02_DISEÑO_VISUAL",
        title: "CONCEPTO Y ARTE",
        body: "Inspiración: Minimalismo brutalista y estética 'Terminal Retro'.\n\nElementos clave:\n- Uso de desenfoque Gaussiano (Backdrop Filter).\n- Tipografía Courier para legibilidad de código.\n- Paleta monocromática basada en la señal de alerta 'Crimson Red'."
    },
    "tech": {
        cat: "03_INFRAESTRUCTURA",
        title: "STACK TECNOLÓGICO",
        body: "El proyecto se ha construido bajo estándares modernos de optimización:\n- HTML5 Semántico.\n- CSS3 Avanzado (Keyframes, CSS Variables).\n- Vanilla JS: Gestión de hilos de animación mediante temporizadores de recursividad."
    },
    "mechanics": {
        cat: "04_MOTOR_LÓGICO",
        title: "MECÁNICAS",
        body: "1. Motor Typewriter: Renderizado progresivo de texto con capacidad de interrupción por eventos de usuario.\n2. Audio Reactivo: Sistema de clonación de nodos de audio para permitir sonidos superpuestos rápidos.\n3. UI Dinámica: Menús laterales inteligentes y overlays de detección de clic fuera de área."
    },
    "stats": {
        cat: "05_ANALÍTICA",
        title: "ESTADÍSTICAS DEL PROYECTO",
        body: "Recuento de activos del sistema:\n- Líneas de CSS: 250+\n- Funciones Lógicas: 12\n- Assets de Video: 1 (Fondo dinámico 1080p)\n- Tiempo de compilación visual: < 1.2s\n- Estado de integridad: 100% (Estable)"
    },
    "future": {
        cat: "06_OBJETIVOS",
        title: "DESARROLLO FUTURO",
        body: "Próximas fases:\n- Implementación de LocalStorage para guardar el progreso.\n- Sistema de inventario de objetos encontrados en el búnker.\n- Soporte multilingüe mediante diccionarios JSON."
    }
};

function typeWriter(elementId, text, speed, callback = null) {
    const element = document.getElementById(elementId);
    if(!element) return;

    clearTimeout(typingTimeout);
    element.innerHTML = ""; 
    let i = 0;

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            typingTimeout = setTimeout(typing, speed);
        } else {
            if (callback) callback();
        }
    }
    typing();
}

function showMemory(id) {
    const data = projectDoc[id];
    if (!data) return;
    
    document.getElementById('db-category').innerText = data.cat;
    document.getElementById('db-title').innerText = data.title;
    
    // Escritura un poco más rápida para secciones largas
    typeWriter('db-body', data.body, 12);

    // Actualizar botones lateralmente
    document.querySelectorAll('.db-item').forEach(item => {
        item.classList.remove('active');
        if(item.innerText.toLowerCase().includes(id.toLowerCase()) || 
           (id === 'intro' && item.innerText.includes('INTRODUCCIÓN')) ||
           (id === 'stats' && item.innerText.includes('ESTADÍSTICAS'))) {
            item.classList.add('active');
        }
    });
}

window.onload = () => {
    const video = document.getElementById('bg-video');
    if(video) {
        video.play().catch(() => console.log("Video listo tras interacción"));
    }

    setTimeout(() => { showMemory('intro'); }, 500);
};