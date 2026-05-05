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
                "siguiente": "Dialogo_1",
            }
        ]
    },
    "Dialogo_1": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "zack", 
                "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Zack", 
                "expresion": "../images/Perfil_Personajes/Zack_Hablando.png",
                "texto": "Preparaos que dentro de nada saldremos.." 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha",
                "siguiente": "Dialogo_1_01",
            }
        ]
    },

    "Dialogo_1_01": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Pensando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Pensando.png",
                "texto": "¿Me imagino que a por comida no?" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_1_02",
            }
        ]
    },

     "Dialogo_1_02": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Hablando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Hablando.png",
                "texto": "Si, porque ya no tenemos de nada" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_1_03",
            }
        ]
    },

    "Dialogo_1_03": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Confundido.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Confundido.png",
                "texto": "Tu no le has estado escuchando a Zack no?" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_1_04",
            }
        ]
    },

    "Dialogo_1_04": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Hablando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Hablando.png",
                "texto": "¿Por? ¿que quiere hacer?" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_1_05",
            }
        ]
    },

    "Dialogo_1_05": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Zack", 
                "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "{PLAYER}", 
                "expresion": "../images/Perfil_Personajes/Zack_Hablando.png",
                "texto": "Quiero acabar con esto ya… Los robots no van a parar hasta exterminarnos." 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_1_06",
                "etiqueta": "PROTOCOLO",
            }
        ]
    },

    "Dialogo_1_06": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Zack", 
                "src": "../images/Perfil_Personajes/Kael_Pensando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Zack", 
                "expresion": "../images/Perfil_Personajes/Kael_Pensando.png",
                "texto": "¿Y porque iban a encontrarnos? si estamos como a 100 metros bajo tierra" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_1_07",
            }
        ]
    },

    "Dialogo_1_07": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Zack", 
                "src": "../images/Perfil_Personajes/Zack_Pensando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Zack", 
                "expresion": "../images/Perfil_Personajes/Zack_Pensando.png",
                "texto": "Pues no se, si viese una puerta metalica en medio de un desierto yo lo abriria, y ellos tambien lo harán" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_1_08",
            }
        ]
    },

    "Dialogo_1_08": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Confundido.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Confundido.png",
                "texto": "Pues que quieres que te diga, prefiero que la muerte venga a mi que yo ir a por el, es más cansado" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_1_09",
            }
        ]
    },

    "Dialogo_1_09": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Confundido.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Confundido.png",
                "texto": "Si tanto quieres ir a por robots, ¿al menos sabes como destruirlos?" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_1_10",
            }
        ]
    },

    "Dialogo_1_10": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Zack", 
                "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Zack", 
                "expresion": "../images/Perfil_Personajes/Zack_Hablando.png",
                "texto": "Más o menos, vi un papel de una de las centrales donde se creo GEXTER que esta como a 5 Horas de aquí, si vamos igual encontramos algo, o si tenemos suerte a alguien que nos ayude o diga como hacerlo, igual queda alguien mas vivo allí" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_1_11",
            }
        ]
    },

    
    "Dialogo_1_11": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", 
        "personajes": [ 
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Hablando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Hablando.png",
                "texto": "Si con suerte quedamos nosotros, seria mucha potra que quedara alguien más tan cerca" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_1_12",
            }
        ]
    },

    "Dialogo_1_12": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Hablando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Hablando.png",
                "texto": "O igual encontramos comida." 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_1_13",
            }
        ]
    },

     "Dialogo_1_13": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Gritando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Gritando.png",
                "texto": "Si te gusta comerte un ordenador en lugar de una jugosa lata de frijoles… adelante ir… yo os esperare aquí" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_1_14",
            }
        ]
    },

    "Dialogo_1_14": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", 
        "personajes": [ 
            { 
                "id": "Zack", 
                "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Zack", 
                "expresion": "../images/Perfil_Personajes/Zack_Hablando.png",
                "texto": "Venga chicos… que os pasa?... no queréis que esto acabe de una vez, que podamos volver a subir a la superficie sin miedo, que podamos arreglar nuestras vidas, que en lugar de sobrevivir… podamos vivir?" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_1_15",
            }
        ]
    },

     "Dialogo_1_15": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", 
        "personajes": [ 
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Confundido.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Confundido.png",
                "texto": "... ?" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_1_16",
            }
        ]
    },

    "Dialogo_1_16": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", 
        "personajes": [ //
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Confundido.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Confundido.png",
                "texto": "... ?" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_1_17",
            }
        ]
    },

    "Dialogo_1_17": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Zack", 
                "src": "../images/Perfil_Personajes/Zack_Gritando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Zack", 
                "expresion": "../images/Perfil_Personajes/Zack_Gritando.png",
                "texto": "Yo quiero intentarlo, y si tengo que ir solo, pues moriré solo, no creo que seamos de esos que llaman los elegidos de dios para sobrevivir, así que SI VOY A MORIR, MORIRE CUANDO YO QUIERA E INTENTANDO SALVAR EL MUNDO" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_1_18",
            }
        ]
    },

    "Dialogo_1_18": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Pensando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Pensando.png",
                "texto": "..." 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_1_19",
            }
        ]
    },

      "Dialogo_1_19": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Gritando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Gritando.png",
                "texto": "Venga vale, SI POR INTENTARLO" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_1_20",
            }
        ]
    },

    "Dialogo_1_20": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Confundido.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Confundido.png",
                "texto": "..." 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", // Esto activa la clase .flecha-contexto
                "siguiente": "Dialogo_1_21",
            }
        ]
    },

     "Dialogo_1_21": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Zack", 
                "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Zack", 
                "expresion": "../images/Perfil_Personajes/Zack_Hablando.png",
                "texto": "Mira… Que dices, ¿vienes?" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_1_22",
            }
        ]
    },

    "Dialogo_1_22": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Hablando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Hablando.png",
                "texto": "… Si no hay nada que nos sirva contra los robots, nos volvemos, si arriesgo mi vida es porque hay una posibilidad, si no la hay no arriesgare mi vida okey?" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_1_23",
            }
        ]
    },


    "Dialogo_1_23": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Zack", 
                "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ //
            { 
                "quien": "Zack", 
                "expresion": "../images/Perfil_Personajes/Zack_Hablando.png",
                "texto": "Vale, trato, pues venga, salgamos de aqui con lo mejor y vayamos directos a la Central" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_1_24",
            }
        ]
    },

    "Dialogo_1_24": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Gritando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Gritando.png",
                "texto": "VENGA VAMOS" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_1_25",
            }
        ]
    },

    "Dialogo_1_25": {
        "titulo": "La hoguera",
        "fondo": "../images/Acto_1/Dialogo_1/Fondo.png",
        "posicionTexto": "pos-arriba", 
        "personajes": [
        ],
        "descripcion": "Asi deciden salir de camino a la central",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2",
            }
        ]
    },

     "Dialogo_2": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/De_camino.jpeg",
        "posicionTexto": "pos-arriba", 
        "personajes": [
        ],
        "descripcion": "Después de 5 Horas de viaje sin ninguna complicación con los pocos robots que había por el camino, encuentran la Central en el desierto.",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_01",
            }
        ]
    },

    "Dialogo_2_01": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Hablando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Hablando.png",
                "texto": "Ya hemos llegado por fin" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_02",
            }
        ]
    },

    "Dialogo_2_02": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Hablando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Hablando.png",
                "texto": "Por fin, menos mal no hemos muerto por el camino" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_03",
            }
        ]
    },

    "Dialogo_2_03": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Zack", 
                "src": "../images/Perfil_Personajes/Zack_Enfadado.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Zack", 
                "expresion": "../images/Perfil_Personajes/Zack_Enfadado.png",
                "texto": "Casi…no morimos por el camino, eres tan brusco con los robots que hasta nos terminas haciendo daño" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_04",
            }
        ]
    },

    "Dialogo_2_04": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Pensando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Pensando.png",
                "texto": "Sisi, lo que tu digas, ahora centrémonos en como encontrar a ese sitio" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_05",
            }
        ]
    },

     "Dialogo_2_05": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Zack", 
                "src": "../images/Perfil_Personajes/Zack_Sorprendido.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Zack", 
                "expresion": "../images/Perfil_Personajes/Zack_Sorprendido.png",
                "texto": "Usando a Mira, lo bueno de tener a la típica Hacker del grupo... ¿Puedes hackearlo no?" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_06",
            }
        ]
    },

     "Dialogo_2_06": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Pensando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Pensando.png",
                "texto": "técnicamente no, solo puedo recabar información" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_07",
            }
        ]
    },

      "Dialogo_2_07": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Pensando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Pensando.png",
                "texto": "¿Qué tipo de información?" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_08",
            }
        ]
    },
    
    
    "Dialogo_2_08": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Asustado.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Asustado.png",
                "texto": "Por ejemplo, ahora ya se donde esta el Doctor Vane, está en la sala central y se que camino tomar para llegar hasta el." 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_09",
            }
        ]
    },

    "Dialogo_2_09": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Zack", 
                "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Zack", 
                "expresion": "../images/Perfil_Personajes/Zack_Hablando.png",
                "texto": "¿Cuántos robots hay dentro?" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_10",
            }
        ]
    },

    "Dialogo_2_10": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Sorprendido.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Sorprendido.png",
                "texto": "Demasiados como para contarlos con todas nuestras manos." 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_11",
            }
        ]
    },


 "Dialogo_2_11": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Asustado.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Asustado.png",
                "texto": "Más de 30, eso sí que será un problema" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_12",
            }
        ]
    },

    "Dialogo_2_12": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Confundido.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Confundido.png",
                "texto": "Y bien, ¿cómo lo hacemos? Yo propongo colarnos por el conducto de ventilación en sigilo hasta…" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_13",
            }
        ]
    },

    "Dialogo_2_13": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Gritando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Gritando.png",
                "texto": "¡¡DEMASIADO LENTO!! Es mejor entrar con todo, el efecto sorpresa nos ayudará hasta que los robots reaccionen" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_14",
            }
        ]
    },

    "Dialogo_2_14": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Gritando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Gritando.png",
                "texto": "¿He mencionado que hay más robots que neuronas en tu cabeza de tonto? Son demasiados, no podemos con 30 siendo solo 3" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_15",
            }
        ]
    },

    "Dialogo_2_15": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Gritando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Gritando.png",
                "texto": "Tu lo has dicho, si hay 30 aunque vayamos por detrás nos verán" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_16",
            }
        ]
    },

    "Dialogo_2_16": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Gritando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Gritando.png",
                "texto": "Claro que no si lo hacemos bien, tu plan es directamente cagarla y depender de la suerte" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_17",
            }
        ]
    },

    "Dialogo_2_17": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Gritando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Gritando.png",
                "texto": "¿Y con ese método sigo vivo no?" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_18",
            }
        ]
    },

    "Dialogo_2_18": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Confundido.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Mira", 
                "expresion": "../images/Perfil_Personajes/Mira_Confundido.png",
                "texto": "Bueno... Casi." 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_19",
            }
        ]
    },

    "Dialogo_2_18": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Enfadado.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Kael", 
                "expresion": "../images/Perfil_Personajes/Kael_Enfadado.png",
                "texto": "¡¿A QUE TE REFIERES CON CASI?!" 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_19",
            }
        ]
    },

      "Dialogo_2_19": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "Zack", 
                "src": "../images/Perfil_Personajes/Zack_Gritando.png", 
                "pos": "right: 1%;" 
            },
        ],
        "secuenciaDialogo": [ 
            { 
                "quien": "Zack", 
                "expresion": "../images/Perfil_Personajes/Zack_Gritando.png ",
                "texto": "Vale callaos, está claro que hay 2 planes, Sigilo de Mira y Asalto de Kael, dejadme elegir a mi." 
            }
        ],
        
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_2_20",
            }
        ]
    },


    "Dialogo_2_20": {
        "titulo": "El camino",
        "fondo": "../images/Acto_1/Dialogo_2/Fondo.jpeg",
        "posicionTexto": "pos-centro",
        "descripcion": "¡Elige con cuidado {PLAYER}!.", //
        
        "opciones": [
    {
        "texto": "Elección Mira -> Sigilo",
        "imagen": "../images/Acto_1/Dialogo_2/Eleccion_Mira-removebg-preview.png", 
        "siguiente": "Dialogo_30",
        "etiqueta": "Colarse en Sigilo...",
        "titulo": "Sigilo",
        "descripcion": "Decides avanzar con cautela.",
        "log": "Elegiste el camino del Sigilo"
    },
    {
        "texto": "Elección Mira -> Asalto",
        "imagen": "../images/Acto_1/Dialogo_2/Eleccion_Kael-removebg-preview.png",
        "siguiente": "Dialogo_3",
        "etiqueta": "Ir de frente...",
        "titulo": "Asalto",
        "descripcion": "Decides entrar con todo",
        "log": "Elegiste el camino del Asalto"
    }
    ]
    },


// ACTO 1 - IZQUIERDA
    
    "Dialogo_30": {
        "titulo": "",
        "fondo": "../images/Acto_1/Dialogo_3/1.jpeg",
        "posicionTexto": "pos-arriba",
        "personajes": [
        ],
        "secuenciaDialogo": [
        ],
        "descripcion": "Zack elige hacerlo por el método de Mira",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_31",
            }
        ]
    },
    "Dialogo_31": {
        "titulo": "",
        "fondo": "../images/Acto_1/Dialogo_3/1.jpeg",
        "posicionTexto": "pos-arriba",
        "personajes": [
            { 
                "id": "Mira", 
                "src": "../images/Perfil_Personajes/Mira_Hablando.png", 
                "pos": "right: 1%;" 
            }
        ],
        "secuenciaDialogo": [
            { 
                "quien": "Mira", 
                "texto": "Al menos tengo a otro listo conmigo" 
            },
            {
            "quien": "Kael",
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Enfadado.png:right: 10%| Sois unos cagaos… LOS 2"
            },
        ],
        "descripcion": "Zack elige hacerlo por el método de Mira",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_001",
            }
        ]
    },

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