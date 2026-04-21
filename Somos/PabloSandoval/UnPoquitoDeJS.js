// Seleccionamos los elementos
const cvImagen = document.querySelector('.cv-imagen');
const cartaPresentacion = document.querySelector('.carta-presentacion');
const heroVideo = document.querySelector('.hero-video');
const screenHeight = window.innerHeight;

// -------- Función que maneja scroll y aparición --------
function handleScroll() {
    const scrollY = window.scrollY;

    // Efecto fantasma para CV
    const topCV = cvImagen.getBoundingClientRect().top;
    if (topCV < screenHeight - 100) {
        cvImagen.classList.add('visible');
    }

    // Efecto fantasma para carta de presentación
    const topCarta = cartaPresentacion.getBoundingClientRect().top;
    if (topCarta < screenHeight - 150) {
        cartaPresentacion.classList.add('visible');
    }

    // Efecto parallax para el vídeo
    heroVideo.style.top = `calc(50% + ${scrollY * 0.2}px)`;
}

// -------- Ejecutar al cargar para que no se vea cortado --------
window.addEventListener('load', handleScroll);

// -------- Ejecutar al hacer scroll --------
window.addEventListener('scroll', handleScroll);

// -------- Menú desplegable --------
const btnMenu = document.getElementById("btnMenu");
const panelMenu = document.getElementById("panelMenu");

btnMenu.addEventListener("click", function() {
    if (panelMenu.style.left === "0px") {
        panelMenu.style.left = "-260px"; 
    } else {
        panelMenu.style.left = "0px"; 
    }
});
