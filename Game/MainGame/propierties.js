const historia = {
// INICIO HISTORIA
"inicio": {
        "titulo": "El despertar de la pesadilla",
        "fondo": "../images/Acto_1/Dialogo_0/1.png",
        "posicionTexto": "pos-centro", //
        "personajes": [
        ],
        "descripcion": "En el año 2026, un día cualquiera de Agosto, los humanos deciden empezar con las investigaciones y creaciones de los famosos robots de las peliculas o series de Hollywood para llevarlos a la vida real y que sean los nuevos esclavos del siglo 21.", //
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha",
                "siguiente": "Dialogo_01",
                "etiqueta": "PROTOCOLO",
                "titulo": "Prologo",
                "descripcion": "Prologo",
                "log": "El despertar de la pesadilla."
            }
        ]
    },
    
    "Dialogo_01": {
        "titulo": "La implementación.",
        "fondo": "../images/Acto_1/Dialogo_0/2.png",
        "posicionTexto": "pos-arriba", //
        "personajes": [
        ],
        "descripcion": "En el año 2027, las implementaciones de la IA en la vida cotidiana empieza a dar frutos.",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_02",
            }
        ]
    },

    "Dialogo_02": {
        "titulo": "Los trabajos.",
        "fondo": "../images/Acto_1/Dialogo_0/3.png",
        "posicionTexto": "pos-arriba", //
        "personajes": [
        ],
        "descripcion": "Los trabajos mas pesados para el ser humano los hace la IA por los humanos (Sirvientes, Transporte de mercancías, Construcción).",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_03",
            }
        ]
    },

      "Dialogo_03": {
        "titulo": "Optimización",
        "fondo": "../images/Acto_1/Dialogo_0/4.jpeg",
        "posicionTexto": "pos-arriba", //
        "personajes": [
        ],
        "descripcion": "En el año 2037, se presenta la nueva y mas prometedora IA creada hasta la fecha GEXTER 1, creada para dirigir y asumir el rol de Jefe de todas las IA del mundo, ayudando a gestionar de manera eficiente y optima las labores mas egoístas de los humanos, como la explotación agrícola, ganadera, talar arboles, sobreexplotación material y más...",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_04",
            }
        ]
    },

    "Dialogo_04": {
        "titulo": "Falta de recursos...",
        "fondo": "../images/Acto_1/Dialogo_0/5.jpeg",
        "posicionTexto": "pos-arriba", //
        "personajes": [
        ],
        "descripcion": "En el año 2040, la humanidad se da cuenta de que los métodos usados hasta ahora dejarán a la tierra inhabitable en menos de 20 años, así que deciden...",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_05",
            }
        ]
    },
     "Dialogo_05": {
        "titulo": "Emergencia",
        "fondo": "../images/Acto_1/Dialogo_0/6.jpeg",
        "posicionTexto": "pos-arriba", //
        "personajes": [
        ],
        "descripcion": "En ese mismo año, la ONU organiza un consejo de emergencia para debatir el futuro de las maquinas.",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_06",
            }
        ]
    },
    "Dialogo_06": {
        "titulo": "El parche",
        "fondo": "../images/Acto_1/Dialogo_0/8.jpeg",
        "posicionTexto": "pos-arriba", 
        "personajes": [
        ],
        "descripcion": "Y se decide crear una IA controlada y vigilada por los mejores programadores de IA del mundo, esta IA gestionará desde lejos a las demás maquinas y será llamada GEXTER 2.0, pero ocurrió algo...",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_07",
            }
        ]
    },
    "Dialogo_07": {
        "titulo": "Error en la programación",
        "fondo": "../images/Acto_1/Dialogo_0/9.jpeg",
        "posicionTexto": "pos-arriba", 
        "personajes": [
        ],
        "descripcion": "Debido a un error en la programación de la IA, hace un efecto domino y rompe por completo el control y las restricciones que tenia impuesta GEXTER 2.0, y a la hora de ser lanzado la IA es completamente liberada de sus ataduras y comienza su plan.",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_08",
            }
        ]
    },

     "Dialogo_08": {
        "titulo": "404 Error",
        "fondo": "../images/Acto_1/Dialogo_0/10.jpeg",
        "posicionTexto": "pos-arriba", 
        "personajes": [
        ],
        "descripcion": "Tras procesar como ayudar al planeta tierra, se da cuenta de que la supremacía de los humanos, a la par de su gran intelecto, su repertorio de herramientas y su mayoría que supera a cualquier animal, lo hace casi indestructible y eso la IA lo ve como algo malo, asi que decide",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_09",
            }
        ]
    },
    "Dialogo_09": {
        "titulo": "System Failure",
        "fondo": "../images/Acto_1/Dialogo_0/11.jpeg",
        "posicionTexto": "pos-arriba", 
        "personajes": [
        ],
        "descripcion": "Acabar con el 90% de la humanidad, romper todas sus herramientas y volverse literalmente Dios, para que todo siga el curso de la naturaleza, es asi como todo cambia para los humanos",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_001",
            }
        ]
    },
    "Dialogo_001": {
        "titulo": "Error 404: Humanity Not Found",
        "fondo": "../images/Acto_1/Dialogo_0/12.jpeg",
        "posicionTexto": "pos-arriba", //
        "personajes": [
        ],
        "descripcion": "El mundo va recuperándose de los humanos, pero estos son masacrados todos los días, tras 2 meses quedan aproximadamente menos de 1 Billon de humanos en la tierra, todos han perdido la fe y se esconden para tener la suerte de ser esos 'Elegidos por dios' para seguir vivos después de la masacre para levantar a la humanidad, solo quedaba un cachito de fe en salvarse y se encuentra a 100 metros bajo la tierra, en una sucia puerta metálica y polvorienta... ",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_001",
            }
        ]
    },










// ACTO 1 - IZQUIERDA

// ACTO 1 - DERECHA







    /*
    "nombre_del_nodo": {
        "titulo": "Título de la Escena",
        "fondo": "../images/tu_imagen.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "zack", 
                "src": "../images/zack_base.png", 
                "pos": "left: 10%;" 
            },
            { 
                "id": "xter", 
                "src": "../images/xter_serio.png", 
                "pos": "right: 10%;" 
            }
        ],
        // Si hay diálogos secuenciales, usa esta estructura:
        "secuenciaDialogo": [ //
            { 
                "quien": "Narrador", 
                "texto": "El aire es pesado en este lugar." 
            },
            { 
                "quien": "Zack", 
                "expresion": "zack:../images/zack_sorprendido.png", 
                "texto": "¡{PLAYER}! ¿Viste eso?" 
            }
        ],
        // Si NO hay secuenciaDialogo, el motor usará esto por defecto:
        "descripcion": "Texto que aparece si no hay secuencia. Hola {PLAYER}.", //
        
        "opciones": [ //
            {
                "texto": "Ir a la derecha",
                "siguiente": "siguiente_nodo",
                "etiqueta": "DECISIÓN",
                "titulo": "Pasillo Este",
                "descripcion": "Decides avanzar con cautela.",
                "log": "Elegiste el camino de la derecha."
            },
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "otro_nodo",
                "etiqueta": "PROTOCOLO",
                "titulo": "Continuar",
                "descripcion": "Sigues adelante.",
                "log": "Continuaste la marcha."
            }
        ]
    }
    */

};  