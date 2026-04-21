/* =========================================
   1. CONFIGURACIÓN DE LENIS (SCROLL SUAVE)
   ========================================= */
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* =========================================
   2. ANIMACIONES INTERACTIVAS (GLOBALES)
   ========================================= */

// EFECTO MÁQUINA DE ESCRIBIR
const textToType = "Enfocado en desarrollo web front‑end, buenas prácticas y aprendizaje constante.";
const typeWriterElement = document.querySelector('.typewriter');
let i = 0;

function typeWriter() {
    if (typeWriterElement && i < textToType.length) {
        typeWriterElement.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
    }
}
window.addEventListener('load', () => {
    if(typeWriterElement) {
        typeWriterElement.innerHTML = ""; 
        setTimeout(typeWriter, 500);
    }
});

// EFECTO SPOTLIGHT (MOUSE)
document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
    document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
});

// SCROLL REVEAL
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* =========================================
   3. LÓGICA DE VENTANAS FLOTANTES (MODALES)
   ========================================= */
function openModal(event, modalId) {
    if(event) event.preventDefault();
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        lenis.stop();
    }
}

function closeModalBtn(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        lenis.start();
    }
}

function closeModal(event, modalId) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModalBtn(modalId);
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            lenis.start();
        });
    }
});

/* =========================================
   4. MENÚ LATERAL (CONTROL MANUAL ROBUSTO)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    const links = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', (e) => {
        e.preventDefault(); 
        e.stopPropagation(); 
        menuToggle.checked = !menuToggle.checked; 
    });

    sidebar.addEventListener('click', (e) => { e.stopPropagation(); });

    links.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => { menuToggle.checked = false; }, 150);
        });
    });

    document.addEventListener('click', (event) => {
        if (menuToggle.checked) {
            menuToggle.checked = false;
        }
    });
});

/* =========================================
   5. EFECTO RED NEURONAL (SOLO EN CARTA)
   ========================================= */
const neuralCanvas = document.getElementById('neural-canvas');

if (neuralCanvas) {
    const ctx = neuralCanvas.getContext('2d');
    let particlesArray;
    const container = document.getElementById('sidebar-container');

    // Ajustar tamaño inicial
    neuralCanvas.width = container.offsetWidth;
    neuralCanvas.height = container.offsetHeight;

    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x; this.y = y;
            this.directionX = directionX; this.directionY = directionY;
            this.size = size; this.color = color;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        update() {
            if (this.x > neuralCanvas.width || this.x < 0) this.directionX = -this.directionX;
            if (this.y > neuralCanvas.height || this.y < 0) this.directionY = -this.directionY;
            this.x += this.directionX; this.y += this.directionY;
            this.draw();
        }
    }

    function initParticles() {
        particlesArray = [];
        let numberOfParticles = (neuralCanvas.height * neuralCanvas.width) / 9000;
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 2) + 1;
            let x = (Math.random() * ((neuralCanvas.width - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((neuralCanvas.height - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 0.4) - 0.2;
            let directionY = (Math.random() * 0.4) - 0.2;
            let color = Math.random() > 0.5 ? 'rgba(0, 243, 255, 0.6)' : 'rgba(255, 0, 60, 0.6)';
            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    function connectParticles() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (neuralCanvas.width/7) * (neuralCanvas.height/7)) {
                    opacityValue = 1 - (distance / 10000);
                    ctx.strokeStyle = 'rgba(148, 163, 184,' + opacityValue + ')';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        requestAnimationFrame(animateParticles);
        ctx.clearRect(0, 0, neuralCanvas.width, neuralCanvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connectParticles();
    }

    window.addEventListener('resize', () => {
        neuralCanvas.width = container.offsetWidth;
        neuralCanvas.height = container.offsetHeight;
        initParticles();
    });

    initParticles();
    animateParticles();
    console.log("Sistema Neuronal: Activo");
}

console.log("Script Global: Cargado");