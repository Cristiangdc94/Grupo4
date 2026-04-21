document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. NAVEGACIÓN Y SCROLL ---
    const itemsMenu = document.querySelectorAll('.menu-navegacion li');
    const encabezado = document.getElementById('encabezado');
    const desplazamientoEncabezado = 80;

    itemsMenu.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); 
            itemsMenu.forEach(menu => menu.classList.remove('activo'));
            item.classList.add('activo');
            const idObjetivo = item.getAttribute('data-objetivo');
            const seccion = document.getElementById(idObjetivo);
            if (seccion) {
                const posicionSeccion = seccion.offsetTop - desplazamientoEncabezado;
                window.scrollTo({ top: posicionSeccion, behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) encabezado.classList.add('scrolled');
        else encabezado.classList.remove('scrolled');
    });

    // --- 2. ANIMACIONES REVERSIBLES ---
    const itemsLineaTiempo = document.querySelectorAll('.item-linea-tiempo');
    const observerTimeline = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) entry.target.classList.add('aparecer');
            else entry.target.classList.remove('aparecer');
        });
    }, { threshold: 0.15 });
    itemsLineaTiempo.forEach(el => observerTimeline.observe(el));

    const barras = document.querySelectorAll('.relleno-progreso');
    const observerSkills = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const ancho = entry.target.getAttribute('data-ancho');
                entry.target.style.width = ancho;
            } else {
                entry.target.style.width = '0%';
            }
        });
    }, { threshold: 0.1 });
    barras.forEach(el => observerSkills.observe(el));

    // --- 3. DIBUJO DE LÍNEA DE PROGRESO (SCROLL DRAW) ---
    const contenedorTimeline = document.querySelector('.contenedor-linea-tiempo');
    const lineaProgreso = document.querySelector('.linea-progreso');

    window.addEventListener('scroll', () => {
        if (!contenedorTimeline || !lineaProgreso) return;
        const rect = contenedorTimeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const startPoint = windowHeight * 0.8; 
        let scrollY = startPoint - rect.top;
        const totalHeight = contenedorTimeline.offsetHeight;
        let porcentaje = (scrollY / totalHeight) * 100;
        if (porcentaje < 0) porcentaje = 0;
        if (porcentaje > 100) porcentaje = 100;
        lineaProgreso.style.height = `${porcentaje}%`;
    });

    // --- 4. MODALES ---
    const modalEquipo = document.getElementById("modal-equipo");
    const modalProyecto = document.getElementById("modal-proyecto");
    const closeBtns = document.querySelectorAll(".close-modal");

    closeBtns.forEach(btn => {
        btn.onclick = () => {
            modalEquipo.classList.remove("mostrar");
            modalProyecto.classList.remove("mostrar");
        }
    });

    window.onclick = (e) => {
        if (e.target == modalEquipo) modalEquipo.classList.remove("mostrar");
        if (e.target == modalProyecto) modalProyecto.classList.remove("mostrar");
    }

    // CLICK EN TARJETA
    const track = document.getElementById('track');
    let isClickValid = true;

    track.addEventListener('click', (e) => {
        if(!isClickValid) return; 

        const card = e.target.closest('.proyecto-card');
        if (!card || card.classList.contains('proyecto-futuro')) return;

        const img = card.querySelector('img').src;
        const title = card.querySelector('h3').innerText;
        const desc = card.querySelector('p').innerText;
        const tags = card.querySelector('.tecnologias-tags').innerHTML;
        
        const repoLink = card.getAttribute('data-repo');
        const downLink = card.getAttribute('data-download');
        const isTeam = card.getAttribute('data-team') === 'true';

        let htmlContent = `
            <div class="modal-proyecto-grid">
                <div class="modal-img-container">
                    <img src="${img}" alt="${title}">
                </div>
                <div class="modal-info-container">
                    <h3>${title}</h3>
                    <p>${desc}</p>
                    <div class="modal-tags">${tags}</div>
                    <div class="modal-botones">
                        ${isTeam ? `<button class="btn-sm btn-equipo" id="btn-team-trigger"><i class="fas fa-users"></i> Ver Equipo</button>` : ''}
                        ${repoLink ? `<a href="${repoLink}" target="_blank" class="btn-sm btn-github"><i class="fab fa-github"></i> Código</a>` : ''}
                        ${downLink ? `<a href="${downLink}" class="btn-sm btn-demo"><i class="fas fa-download"></i> Descargar</a>` : ''}
                    </div>
                </div>
            </div>
        `;

        document.getElementById('contenido-modal-dinamico').innerHTML = htmlContent;
        modalProyecto.classList.add('mostrar');

        const btnTeam = document.getElementById('btn-team-trigger');
        if(btnTeam) {
            btnTeam.onclick = () => {
                modalProyecto.classList.remove('mostrar');
                setTimeout(() => modalEquipo.classList.add('mostrar'), 200);
            }
        }
    });

    // --- 5. CARRUSEL DRAG CON INERCIA ---
    const escenario = document.querySelector('.carousel-escenario');
    const botonesFiltro = document.querySelectorAll('.filtro-btn');
    
    let tarjetasOriginales = Array.from(document.querySelectorAll('.proyecto-card'));
    let tarjetasVisibles = [];
    
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    let currentVel = 0;
    let lastPos = 0;
    let lastTime = 0;
    let cardWidth = 380; 
    let maxTranslate = 0; 

    const setupCarousel = (filtro = 'todos') => {
        cancelAnimationFrame(animationID);
        track.innerHTML = '';
        track.style.transition = 'none';
        track.classList.remove('modo-grid');
        track.style.transform = 'translateX(0px)';
        currentTranslate = 0;
        prevTranslate = 0;
        
        if (filtro === 'todos') {
            tarjetasVisibles = tarjetasOriginales;
        } else {
            tarjetasVisibles = tarjetasOriginales.filter(card => {
                const techAttr = card.getAttribute('data-tech');
                if(!techAttr) return false;
                const techs = techAttr.toLowerCase();
                const filterLower = filtro.toLowerCase();
                return techs.includes(filterLower) || techs.includes('todos');
            });
        }

        if (tarjetasVisibles.length === 0) return;

        if (tarjetasVisibles.length <= 2 && window.innerWidth > 768) {
            track.classList.add('modo-grid');
            tarjetasVisibles.forEach(c => {
                c.style.display = 'flex'; 
                track.appendChild(c);
            });
            return;
        }

        tarjetasVisibles.forEach(c => {
            c.style.display = 'flex';
            track.appendChild(c);
        });

        actualizarDimensiones();
    };

    const actualizarDimensiones = () => {
        const card = track.querySelector('.proyecto-card');
        if (card) {
            cardWidth = card.getBoundingClientRect().width + 30; 
            const containerWidth = escenario.getBoundingClientRect().width;
            const totalWidth = tarjetasVisibles.length * cardWidth;
            maxTranslate = -(totalWidth - containerWidth + 20); 
            if (maxTranslate > 0) maxTranslate = 0;
        }
    };

    const setSliderPosition = () => {
        track.style.transform = `translateX(${currentTranslate}px)`;
    }

    const touchStart = (event) => {
        if (track.classList.contains('modo-grid')) return;
        isDragging = true;
        isClickValid = true; 
        startPos = getPositionX(event);
        lastPos = startPos;
        lastTime = Date.now();
        currentVel = 0;
        escenario.style.cursor = 'grabbing';
        cancelAnimationFrame(animationID);
    }

    const touchMove = (event) => {
        if (!isDragging) return;
        const currentPosition = getPositionX(event);
        const diff = currentPosition - startPos;
        if(Math.abs(diff) > 5) isClickValid = false;
        currentTranslate = prevTranslate + diff;
        
        const now = Date.now();
        const dt = now - lastTime;
        if (dt > 0) {
            currentVel = (currentPosition - lastPos) / dt;
        }
        lastPos = currentPosition;
        lastTime = now;
        setSliderPosition();
    }

    const touchEnd = () => {
        isDragging = false;
        escenario.style.cursor = 'grab';
        prevTranslate = currentTranslate;
        requestAnimationFrame(momentumLoop);
    }

    const getPositionX = (event) => {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    const momentumLoop = () => {
        if (isDragging) return;
        
        currentVel *= 0.95; 
        currentTranslate += currentVel * 16;

        if (currentTranslate > 0) {
            currentTranslate = currentTranslate * 0.9; 
            if (Math.abs(currentTranslate) < 1) currentTranslate = 0;
        } else if (currentTranslate < maxTranslate) {
            const over = currentTranslate - maxTranslate;
            currentTranslate = maxTranslate + (over * 0.9);
            if (Math.abs(currentTranslate - maxTranslate) < 1) currentTranslate = maxTranslate;
        }

        prevTranslate = currentTranslate;
        setSliderPosition();

        if (Math.abs(currentVel) > 0.05 || currentTranslate > 0.5 || currentTranslate < maxTranslate - 0.5) {
             animationID = requestAnimationFrame(momentumLoop);
        } else {
            if(currentTranslate > 0) currentTranslate = 0;
            if(currentTranslate < maxTranslate) currentTranslate = maxTranslate;
            setSliderPosition();
        }
    }

    escenario.addEventListener('touchstart', touchStart);
    escenario.addEventListener('touchend', touchEnd);
    escenario.addEventListener('touchmove', touchMove);
    escenario.addEventListener('mousedown', touchStart);
    escenario.addEventListener('mouseup', touchEnd);
    escenario.addEventListener('mouseleave', () => { if(isDragging) touchEnd() });
    escenario.addEventListener('mousemove', touchMove);

    botonesFiltro.forEach(btn => {
        btn.addEventListener('click', (e) => {
            botonesFiltro.forEach(b => b.classList.remove('activo'));
            e.target.classList.add('activo');
            setupCarousel(e.target.getAttribute('data-filter'));
        });
    });

    window.addEventListener('resize', () => {
        if (!track.classList.contains('modo-grid')) actualizarDimensiones();
    });

    setupCarousel('todos');
    // ==========================================
    // 6. SIDEBAR NAVIGATION (SCROLL SPY & BARRA)
    // ==========================================
    const sidebarProgress = document.querySelector('.sidebar-progress');
    const navDots = document.querySelectorAll('.nav-dot');
    const secciones = document.querySelectorAll('section'); // Asegúrate de que tus secciones tienen id="inicio", "sobre-mi", etc.

    window.addEventListener('scroll', () => {
        // A) BARRA DE PROGRESO (Llena del 0% al 100% de la altura de la sidebar)
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        let scrollPercent = (scrollTop / docHeight) * 100;
        
        if (sidebarProgress) {
            sidebarProgress.style.height = `${scrollPercent}%`;
        }

        // B) ACTIVAR PUNTOS (SCROLL SPY)
        let currentSectionId = '';

        secciones.forEach(seccion => {
            const sectionTop = seccion.offsetTop;
            const sectionHeight = seccion.clientHeight;
            // Si el scroll ha pasado un tercio de la sección, la consideramos activa
            if (scrollTop >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = seccion.getAttribute('id');
            }
        });

        navDots.forEach(dot => {
            dot.classList.remove('active');
            // Comparamos el href del punto (#inicio) con el id actual (inicio)
            if (dot.getAttribute('href').includes(currentSectionId)) {
                dot.classList.add('active');
            }
        });
    });
});

function mostrarMiembro(idMiembro, elementoTab) {
    const contenidos = document.getElementsByClassName("info-content");
    for (let i = 0; i < contenidos.length; i++) contenidos[i].classList.remove("activo");
    const tabs = document.getElementsByClassName("miembro-tab");
    for (let i = 0; i < tabs.length; i++) tabs[i].classList.remove("activo");
    document.getElementById(idMiembro).classList.add("activo");
    elementoTab.classList.add("activo");
}