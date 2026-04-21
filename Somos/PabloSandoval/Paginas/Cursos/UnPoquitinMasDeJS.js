// Selección de elementos
const btnAmigos = document.getElementById('btnAmigos');
const cartasAmigos = document.getElementById('cartasAmigos');

btnAmigos.addEventListener('click', () => {
    // Mostrar el contenedor de cartas
    cartasAmigos.style.display = 'block';

    // Añadir efecto "fantasma" a cada carta
    const cartas = cartasAmigos.querySelectorAll('.carta-presentacion');
    cartas.forEach(carta => {
        carta.style.opacity = 0;
        carta.style.transform = 'translateY(50px)';
        carta.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        setTimeout(() => {
            carta.style.opacity = 1;
            carta.style.transform = 'translateY(0)';
        }, 50);
    });

    // Ocultar el botón
    btnAmigos.style.display = 'none';
});
