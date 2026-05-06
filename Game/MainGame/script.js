// --- ESTADO DE AUDIO Y SISTEMA ---
let masterVol = 0.25, musicVol = 0.25; 
let masterMuted = false, musicMuted = false;
let prevMasterVol = 0.25, prevMusicVol = 0.25;
let isTyping = false;
let playerName = "Invitado";
let typewriterTimeout; // Variable para controlar el flujo del texto y evitar errores de encoding/visualización

const typeSound = new Audio('../Sound/undertale-text.mp3');
const bgMusic = document.getElementById('bg-music');
const hoverSound = document.getElementById('hover-sound');

// --- SELECTORES ---
const masterSlider = document.getElementById('input-master');
const musicSlider = document.getElementById('input-music');
const masterIcon = document.getElementById('volume-icon');
const musicIcon = document.getElementById('music-icon');
const menuControl = document.getElementById('menu-control');
const menuOverlay = document.getElementById('menu-overlay');

// --- MOTOR DE HISTORIA ---
let nodoActual = "inicio";
let indiceDialogoActual = 0;

// --- NUEVA LÓGICA DE NOMBRE ---
function saveUserName() {
    const input = document.getElementById('user-name-input');
    if (input.value.trim() !== "") {
        playerName = input.value.trim();
        document.getElementById('display-player-name').innerText = playerName;
        document.getElementById('name-modal').style.display = "none";
        guardarProgreso();
        actualizarInterfaz(); 
    } else {
        input.style.borderColor = "red";
    }
}

function exitToMenu() {
    window.location.href = "../../index.html";
}

// --- LÓGICA DE GUARDADO ---
function guardarProgreso() {
    const dataSave = {
        nodo: nodoActual,
        log: document.getElementById('decision-log').innerHTML,
        volMaster: masterVol,
        volMusic: musicVol,
        nombre: playerName
    };
    localStorage.setItem('chaos_red_save', JSON.stringify(dataSave));
}

function cargarProgreso() {
    const save = localStorage.getItem('chaos_red_save');
    if (save) {
        const data = JSON.parse(save);
        nodoActual = data.nodo;
        document.getElementById('decision-log').innerHTML = data.log;
        masterVol = data.volMaster;
        musicVol = data.volMusic;
        playerName = data.nombre || "Invitado";
        masterSlider.value = masterVol;
        musicSlider.value = musicVol;
        document.getElementById('display-player-name').innerText = playerName;
        document.getElementById('name-modal').style.display = "none";
    } else {
        document.getElementById('name-modal').style.display = "flex";
    }
}

function borrarPartida() {
    if(confirm("¿Eliminar todos los datos de sincronización?")) {
        localStorage.removeItem('chaos_red_save');
        location.reload();
    }
}

function limpiarComandos(texto) {
    // Esta expresión regular busca cualquier cosa entre barras y la elimina
    return texto.replace(/\|.*?\|/g, '');
}

function handleChoice(nodoSiguiente, etiqueta, titulo, textoDesc, logDesc) {
    isTyping = false; 
    const log = document.getElementById('decision-log');
    if (log && logDesc) {
        const empty = log.querySelector('.empty-msg');
        if (empty) empty.remove();
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        let formattedLog = logDesc.replace(/{PLAYER}/g, playerName);
        entry.innerHTML = `<strong>${titulo}</strong><p>${formattedLog}</p>`;
        log.prepend(entry);
    }

    nodoActual = nodoSiguiente;
    guardarProgreso(); 
    actualizarInterfaz();
}

function actualizarInterfaz() {
    isTyping = false;
    const datos = historia[nodoActual];
    if (!datos) return;

    const infoBox = document.querySelector('.info-box');
    if (infoBox) {
        infoBox.classList.remove('pos-centro', 'pos-top', 'pos-bottom'); 
        if (datos.posicionTexto) {
            infoBox.classList.add(datos.posicionTexto);
        }
    }

    const bg = document.querySelector('.background-image');
    if (bg && datos.fondo) bg.style.backgroundImage = `url('${datos.fondo}')`;

    const charContainer = document.getElementById('character-container');
    charContainer.innerHTML = ''; 

    // --- DENTRO DE actualizarInterfaz ---
if (datos.personajes) {
    datos.personajes.forEach(p => {
        const img = document.createElement('img');
        img.src = p.src;
        img.setAttribute('data-id', p.id);

        // Lógica de espejo automática para carga inicial
        let esIzquierda = p.pos && p.pos.toLowerCase().includes('left');
        let flip = esIzquierda ? 'scaleX(-1)' : 'scaleX(1)';
        
        // Combinar con centrado si es necesario
        let transformFinal = flip;
        if (p.pos && p.pos.includes('left: 50%')) {
            transformFinal = `translateX(-50%) ${flip}`;
        }

        img.style.cssText = `
            position: absolute; 
            bottom: 0; 
            ${p.pos}; 
            height: 85%; 
            width: auto;
            object-fit: contain;
            transform: ${transformFinal};
            transition: left 0.5s ease, opacity 0.5s ease;
        `;
        charContainer.appendChild(img);
    });
}

    let tituloProcesado = datos.titulo.replace(/{PLAYER}/g, playerName);
    document.getElementById('choice-title').innerText = tituloProcesado;
    
    indiceDialogoActual = 0;
    
    if (datos.secuenciaDialogo) {
        document.getElementById('bottom-buttons').style.display = 'none';
        mostrarSiguienteDialogo();
    } else {
        document.getElementById('bottom-buttons').style.display = 'grid';
        let textoProcesado = datos.descripcion.replace(/{PLAYER}/g, playerName);
        typeWriter('choice-desc', textoProcesado, 20);
        generarBotones(datos.opciones);
    }

    initHoverSounds();
}

function generarBotones(opciones) {
    const contenedorBotones = document.getElementById('bottom-buttons');
    contenedorBotones.innerHTML = '';
    
    // Creamos el contenedor central para las opciones estándar
    const centro = document.createElement('div');
    centro.className = 'bottom-buttons-center';
    contenedorBotones.appendChild(centro);

    opciones.forEach((opcion) => {
        const btn = document.createElement('a');
        btn.href = "#";
        btn.className = (opcion.tipo === 'flecha') ? 'flecha-contexto chaos-hover' : 'game-option chaos-hover';
        
        // --- LÓGICA DE IMAGEN ---
        // Si la opción tiene una imagen definida en el JSON, creamos la etiqueta img
        const htmlImagen = opcion.imagen ? `<img src="${opcion.imagen}" alt="${opcion.titulo || 'opcion'}" class="option-image">` : '';
        
        // Inyectamos la imagen y el texto dentro del botón
        // --- CAMBIO AQUÍ: Procesar el nombre en el texto de las opciones ---
        let textoBotonProcesado = opcion.texto.replace(/{PLAYER}/g, playerName);

        // Usamos un span para el texto para poder controlarlo mejor con CSS si fuera necesario
        btn.innerHTML = `
            ${htmlImagen}
            <span>${textoBotonProcesado}</span>
        `;
        // ------------------------

        btn.onclick = (e) => {
            e.preventDefault();
            handleChoice(opcion.siguiente, opcion.etiqueta, opcion.titulo, opcion.descripcion, opcion.log);
        };

        // Si es tipo flecha va al contenedor principal, si no, al contenedor central
        if (opcion.tipo === 'flecha') {
            contenedorBotones.appendChild(btn);
        } else {
            centro.appendChild(btn);
        }
    });

    // Re-inicializamos los sonidos de hover para los nuevos botones
    initHoverSounds();
}

function mostrarSiguienteDialogo() {
    const datos = historia[nodoActual];
    if (!datos.secuenciaDialogo) return;

    const secuencia = datos.secuenciaDialogo;
    const speakerEl = document.getElementById('speaker-name');
    const contenedorBotones = document.getElementById('bottom-buttons');
    
    if (indiceDialogoActual >= secuencia.length) {
        generarBotones(datos.opciones); 
        contenedorBotones.style.display = 'grid';
        return; 
    }

    const d = secuencia[indiceDialogoActual];
    contenedorBotones.style.display = 'none';

    if (speakerEl) {
        // --- CAMBIO AQUÍ: Procesamos también el nombre del hablante ---
        let nombreProcesado = (d.quien || "").replace(/{PLAYER}/g, playerName);
        speakerEl.innerText = nombreProcesado;
        speakerEl.style.display = d.quien ? 'inline-block' : 'none';
        // -------------------------------------------------------------
    }

    let textoProcesado = d.texto.replace(/{PLAYER}/g, playerName);
    
    // ... resto de tu código (expresiones, typeWriter, etc.)
    if (d.expresion) {
        let [id, ruta] = d.expresion.split(':');
        const charImg = document.querySelector(`[data-id="${id}"]`);
        if (charImg) charImg.src = ruta;
    }

    typeWriter('choice-desc', textoProcesado, 20);
    indiceDialogoActual++; 
}

function initHoverSounds() {
    const targets = document.querySelectorAll('.chaos-hover');
    targets.forEach(target => {
        target.onmouseenter = () => {
            if (!masterMuted && masterVol > 0 && hoverSound) {
                const hSound = hoverSound.cloneNode();
                hSound.volume = masterVol * 0.15; 
                hSound.play().catch(() => {});
            }
        };
    });
}

function typeWriter(elementId, text, speed, callback = null) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    clearTimeout(typewriterTimeout);
    element.innerHTML = "";
    let i = 0;
    isTyping = true;

    function typing() {
        if (!isTyping) return;

        if (i < text.length) {
            let char = text.charAt(i);
            
            if (char === '|') {
                let end = text.indexOf('|', i + 1);
                if (end !== -1) {
                    let comandoCompleto = text.substring(i + 1, end);
                    
                    // Separamos el comando. Usamos LIMIT 3 para que no rompa rutas con ":" si las hubiera
                    let partes = comandoCompleto.split(':');
                    let id = partes[0] ? partes[0].trim() : null;
                    let ruta = partes[1] ? partes[1].trim() : null;
                    // El resto (posicion) puede contener ":" (ej: right: 5%), así que lo reconstruimos
                    let pos = partes.slice(2).join(':').trim(); 

                    let charImg = document.querySelector(`[data-id="${id}"]`);
                    
                    if (ruta === 'REMOVE') {
                        if (charImg) {
                            charImg.style.opacity = "0";
                            setTimeout(() => { if (charImg.parentNode) charImg.remove(); }, 500);
                        }
                    } 
                    // >>> AÑADE ESTE BLOQUE AQUÍ <<<
                    else if (id === 'FONDO') {
                        const bg = document.querySelector('.background-image');
                        if (bg) {
                        // Aplicamos una pequeña transición para que no sea un golpe seco
                        bg.style.transition = "background-image 0.5s ease-in-out";
                        bg.style.backgroundImage = `url('${ruta}')`;
                        }
                    }
                    else {
                        // Lógica automática de espejo basada en la posición
                        let esIzquierda = pos && pos.toLowerCase().includes('left');
                        let flip = esIzquierda ? 'scaleX(-1)' : 'scaleX(1)';

                        if (charImg) {
                            // --- ACTUALIZACIÓN DE PERSONAJE EXISTENTE ---
                            charImg.src = ruta;
                            charImg.style.opacity = "1";
                            
                            // Limpieza crítica para evitar sobreposición
                            charImg.style.left = "auto";
                            charImg.style.right = "auto";
                            
                            if (pos) {
                                // Si el pos es "right: 5%", aplicamos directamente al estilo
                                let [prop, valor] = pos.split(':');
                                if (prop && valor) charImg.style[prop.trim()] = valor.trim();
                            }
                            
                            charImg.style.transform = flip; 
                        } else {
                            // --- CREACIÓN DE PERSONAJE NUEVO ---
                            const charContainer = document.getElementById('character-container');
                            const newImg = document.createElement('img');
                            newImg.src = ruta;
                            newImg.setAttribute('data-id', id);
                            
                            // Si no hay pos, centramos por defecto
                            let posicionEstilo = pos || "left: 50%; transform: translateX(-50%)";
                            
                            let transformFinal = flip;
                            if (posicionEstilo.includes('translateX')) {
                                transformFinal = `translateX(-50%) ${flip}`;
                            }

                            newImg.style.cssText = `
                                position: absolute; 
                                bottom: 0; 
                                ${posicionEstilo}; 
                                height: 85%; 
                                width: auto; 
                                object-fit: contain; 
                                transition: opacity 0.5s ease; 
                                opacity: 0;
                                transform: ${transformFinal};
                            `;
                            
                            charContainer.appendChild(newImg);
                            setTimeout(() => { newImg.style.opacity = "1"; }, 50);
                        }
                    }
                    
                    // Saltamos el comando y continuamos SIN esperar el speed del typewriter
                    i = end + 1;
                    typing(); 
                    return; 
                }
            } else {
                // Escritura normal
                element.innerHTML += char;
                if (char !== " " && !masterMuted && masterVol > 0) {
                    const soundClone = typeSound.cloneNode();
                    soundClone.volume = masterVol;
                    soundClone.play().catch(() => {});
                }
                i++;
                typewriterTimeout = setTimeout(typing, speed);
            }
        } else {
            isTyping = false;
            if (callback) callback();
        }
    }
    typing();
}

masterSlider.addEventListener('input', (e) => updateMasterUI(e.target.value));
musicSlider.addEventListener('input', (e) => updateMusicUI(e.target.value));

function updateMasterUI(val) {
    masterVol = parseFloat(val);
    masterMuted = masterVol === 0;
    masterIcon.className = masterMuted ? "fa-solid fa-volume-xmark" : (masterVol < 0.5 ? "fa-solid fa-volume-low" : "fa-solid fa-volume-high");
    guardarProgreso();
}

function updateMusicUI(val) {
    musicVol = parseFloat(val);
    musicMuted = musicVol === 0;
    if (bgMusic) bgMusic.volume = musicVol;
    musicIcon.style.color = musicMuted ? "#555" : "#FF0000";
    guardarProgreso();
}

document.getElementById('btn-mute-master').addEventListener('click', () => {
    if (!masterMuted) { prevMasterVol = masterVol; updateMasterUI(0); masterSlider.value = 0; }
    else { let r = prevMasterVol > 0 ? prevMasterVol : 0.25; updateMasterUI(r); masterSlider.value = r; }
});

document.getElementById('btn-mute-music').addEventListener('click', () => {
    if (!musicMuted) { prevMusicVol = musicVol; updateMusicUI(0); musicSlider.value = 0; }
    else { let r = prevMusicVol > 0 ? prevMusicVol : 0.25; updateMusicUI(r); musicSlider.value = r; }
});

function iniciarAudio() {
    if (bgMusic) {
        bgMusic.volume = musicVol;
        bgMusic.play().catch(() => {});
        document.removeEventListener('click', iniciarAudio);
    }
}
document.addEventListener('click', iniciarAudio);

window.onload = () => {
    cargarProgreso();
    actualizarInterfaz();

    const intentarAvanzar = () => {
        const datos = historia[nodoActual];
        if (!datos) return;
        const descEl = document.getElementById('choice-desc');

        // 1. SI ESTÁ ESCRIBIENDO: Completar el texto limpio y DETENERSE
        if (isTyping) {
            isTyping = false;
            clearTimeout(typewriterTimeout);
            
            let textoCrudo = "";
            if (datos.secuenciaDialogo && indiceDialogoActual > 0) {
                textoCrudo = datos.secuenciaDialogo[indiceDialogoActual - 1].texto;
            } else {
                textoCrudo = datos.descripcion || "";
            }
            
            // --- AQUÍ ESTÁ EL CAMBIO CRÍTICO ---
            // Limpiamos los comandos y reemplazamos el nombre del jugador
            let textoLimpio = limpiarComandos(textoCrudo);
            descEl.innerText = textoLimpio.replace(/{PLAYER}/g, playerName);
            // ----------------------------------
            
            return; 
        }

        // 2. SI NO ESTÁ ESCRIBIENDO: Avanzar frase o mostrar botones
        if (datos.secuenciaDialogo) {
            mostrarSiguienteDialogo();
        }
    };

    // Click Global
    document.addEventListener('mousedown', (e) => {
        // Ignorar si el menú está abierto o es un botón
        if (e.target.closest('.game-option, .flecha-contexto, .chaos-hover, #menu-overlay, #menu-control')) {
            return; 
        }
        intentarAvanzar();
    });

    // Espacio
    document.addEventListener('keydown', (e) => {
        if (e.code === "Space") {
            e.preventDefault();
            intentarAvanzar();
        }
    });

    // Menú
    if (menuOverlay) {
        menuOverlay.addEventListener('click', (e) => {
            if (e.target === menuOverlay) menuControl.checked = false;
        });
    }
};