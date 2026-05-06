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
    "posicionTexto": "pos-centro",
    "personajes": [
        // Usamos "Zack" como ID técnico para el motor de juego
        { 
            "id": "Zack", 
            "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
            "pos": "right: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "{PLAYER}", 
            "texto": "Preparaos que dentro de nada saldremos.." 
        },
        { 
            "quien": "Mira", 
            // Mira entra a la izquierda (el script le hará espejo automáticamente)
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Pensando.png:left: 1%| ¿Me imagino que a por comida no?" 
        },
        { 
            "quien": "Kael", 
            // Eliminamos a Zack con su ID técnico y entra Kael a la derecha
            "texto": "|Zack:REMOVE| |Kael:../images/Perfil_Personajes/Kael_Hablando.png:right: 1%| Si, porque ya no tenemos de nada" 
        },
        { 
            "quien": "Mira", 
            "expresion": "Mira:../images/Perfil_Personajes/Mira_Confundido.png",
            "texto": "Tu no le has estado escuchando a {PLAYER} no?" 
        },
        { 
            "quien": "Kael", 
            "texto": "¿Por? ¿que quiere hacer?" 
        },
        { 
            "quien": "{PLAYER}", 
            // Zack vuelve a entrar por la izquierda para confrontar
            "texto": "|Mira:REMOVE| |Zack:../images/Perfil_Personajes/Zack_Hablando.png:left: 1%| Quiero acabar con esto ya… Los robots no van a parar hasta exterminarnos." 
        },
        { 
            "quien": "Kael", 
            "expresion": "Kael:../images/Perfil_Personajes/Kael_Pensando.png",
            "texto": "¿Y porque iban a encontrarnos? si estamos como a 100 metros bajo tierra" 
        },
        { 
            "quien": "{PLAYER}", 
            "expresion": "Zack:../images/Perfil_Personajes/Zack_Pensando.png",
            "texto": "Pues no se, si viese una puerta metalica en medio de un desierto yo lo abriria, y ellos tambien lo harán" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Kael:REMOVE| |Mira:../images/Perfil_Personajes/Mira_Confundido.png:right: 1%| Pues que quieres que te diga, prefiero que la muerte venga a mi que yo ir a por el, es más cansado" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Zack:REMOVE| |Kael:../images/Perfil_Personajes/Kael_Confundido.png:left: 1%| Si tanto quieres ir a por robots, ¿al menos sabes como destruirlos?" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Mira:REMOVE| |Zack:../images/Perfil_Personajes/Zack_Hablando.png:right: 1%| Más o menos, vi un papel de una de las centrales..." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Kael:REMOVE| |Mira:../images/Perfil_Personajes/Mira_Hablando.png:left: 1%| Si con suerte quedamos nosotros, seria mucha potra que quedara alguien más tan cerca" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Zack:REMOVE| |Kael:../images/Perfil_Personajes/Kael_Hablando.png:right: 1%| O igual encontramos comida." 
        },
        { 
            "quien": "Mira", 
            "expresion": "Mira:../images/Perfil_Personajes/Mira_Gritando.png",
            "texto": "Si te gusta comerte un ordenador en lugar de una jugosa lata de frijoles… adelante ir…" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Kael:REMOVE| |Zack:../images/Perfil_Personajes/Zack_Hablando.png:right: 1%| Venga chicos… ¿que os pasa?... ¿no queréis que esto acabe de una vez?" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Mira:REMOVE| |Kael:../images/Perfil_Personajes/Kael_Confundido.png:left: 1%| ... ?" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Zack:REMOVE| |Mira:../images/Perfil_Personajes/Mira_Confundido.png:right: 1%| ... ?" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Kael:REMOVE| |Zack:../images/Perfil_Personajes/Zack_Gritando.png:left: 1%| ¡SI VOY A MORIR, MORIRE CUANDO YO QUIERA E INTENTANDO SALVAR EL MUNDO!" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Mira:REMOVE| |Kael:../images/Perfil_Personajes/Kael_Gritando.png:right: 1%| Venga vale, ¡SI POR INTENTARLO!" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Zack:REMOVE| |Mira:../images/Perfil_Personajes/Mira_Hablando.png:right: 1%| … Si no hay nada que nos sirva contra los robots, nos volvemos, ¿okey?" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Kael:REMOVE| |Zack:../images/Perfil_Personajes/Zack_Hablando.png:left: 1%| Vale, trato. Salgamos de aquí y vayamos directos a la Central." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Mira:REMOVE| |Kael:../images/Perfil_Personajes/Kael_Gritando.png:right: 1%| ¡VENGA VAMOS!" 
        },
        {
            "quien": "Narrador",
            "texto": "|Zack:REMOVE| |Kael:REMOVE| Así deciden salir de camino a la central."
        }
    ],
    "opciones": [
        {
            "texto": "▶",
            "tipo": "flecha",
            "siguiente": "Dialogo_2"
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
    "posicionTexto": "pos-arriba",
    "descripcion": "Después de 5 Horas de viaje sin ninguna complicación con los pocos robots que había por el camino, encuentran la Central en el desierto.",
    "secuenciaDialogo": [
        { 
            "quien": "Mira", 
            // Cambiamos al fondo de la Central y aparece Mira
            "texto": "|Zack:REMOVE| |Kael:REMOVE| |Mira:../images/Perfil_Personajes/Mira_Hablando.png:right: 1%| Ya hemos llegado por fin" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Hablando.png:left: 1%| Por fin, menos mal no hemos muerto por el camino" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Mira:REMOVE| |Zack:../images/Perfil_Personajes/Zack_Enfadado.png:right: 1%| Casi… no morimos por el camino, eres tan brusco con los robots que hasta nos terminas haciendo daño" 
        },
        { 
            "quien": "Kael", 
            "expresion": "Kael:../images/Perfil_Personajes/Kael_Pensando.png",
            "texto": "Sisi, lo que tu digas, ahora centrémonos en como encontrar ese sitio" 
        },
        { 
            "quien": "{PLAYER}", 
            "expresion": "Zack:../images/Perfil_Personajes/Zack_Sorprendido.png",
            "texto": "Usando a Mira, lo bueno de tener a la típica Hacker del grupo... ¿Puedes hackearlo no?" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Zack:REMOVE| |Mira:../images/Perfil_Personajes/Mira_Pensando.png:right: 1%| Técnicamente no, solo puedo recabar información" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Pensando.png:left: 1%| ¿Qué tipo de información?" 
        },
        { 
            "quien": "Mira", 
            "expresion": "Mira:../images/Perfil_Personajes/Mira_Asustado.png",
            "texto": "Por ejemplo, ahora ya se donde esta el Doctor Vane, está en la sala central y se qué camino tomar para llegar hasta él." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Kael:REMOVE| |Zack:../images/Perfil_Personajes/Zack_Hablando.png:left: 1%| ¿Cuántos robots hay dentro?" 
        },
        { 
            "quien": "Mira", 
            "expresion": "Mira:../images/Perfil_Personajes/Mira_Sorprendido.png",
            "texto": "Demasiados como para contarlos con todas nuestras manos." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Zack:REMOVE| |Kael:../images/Perfil_Personajes/Kael_Asustado.png:left: 1%| Más de 30, eso sí que será un problema" 
        },
        { 
            "quien": "Mira", 
            "expresion": "Mira:../images/Perfil_Personajes/Mira_Confundido.png",
            "texto": "Y bien, ¿cómo lo hacemos? Yo propongo colarnos por el conducto de ventilación en sigilo hasta…" 
        },
        { 
            "quien": "Kael", 
            "expresion": "Kael:../images/Perfil_Personajes/Kael_Gritando.png",
            "texto": "¡¡DEMASIADO LENTO!! Es mejor entrar con todo, el efecto sorpresa nos ayudará" 
        },
        { 
            "quien": "Mira", 
            "expresion": "Mira:../images/Perfil_Personajes/Mira_Gritando.png",
            "texto": "¿He mencionado que hay más robots que neuronas en tu cabeza de tonto? No podemos con 30 siendo solo 3" 
        },
        { 
            "quien": "Kael", 
            "texto": "Tu lo has dicho, si hay 30 aunque vayamos por detrás nos verán" 
        },
        { 
            "quien": "Mira", 
            "texto": "Claro que no si lo hacemos bien, tu plan es directamente cagarla y depender de la suerte" 
        },
        { 
            "quien": "Kael", 
            "texto": "¿Y con ese método sigo vivo no?" 
        },
        { 
            "quien": "Mira", 
            "expresion": "Mira:../images/Perfil_Personajes/Mira_Confundido.png",
            "texto": "Bueno... Casi." 
        },
        { 
            "quien": "Kael", 
            "expresion": "Kael:../images/Perfil_Personajes/Kael_Enfadado.png",
            "texto": "¡¿A QUE TE REFIERES CON CASI?!" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Mira:REMOVE| |Kael:REMOVE| |Zack:../images/Perfil_Personajes/Zack_Gritando.png:left: 1%| Vale callaos, está claro que hay 2 planes, Sigilo de Mira y Asalto de Kael, dejadme elegir a mi." 
        }
    ],
    "opciones": [
        {
            "texto": "Elección Mira -> Sigilo",
            "imagen": "../images/Acto_1/Dialogo_2/Eleccion_Mira-removebg-preview.png", 
            "siguiente": "Dialogo_3",
            "etiqueta": "Colarse en Sigilo...",
            "titulo": "Sigilo",
            "descripcion": "Decides avanzar con cautela.",
            "log": "Elegiste el camino del Sigilo"
        },
        {
            "texto": "Elección Kael -> Asalto",
            "imagen": "../images/Acto_1/Dialogo_2/Eleccion_Kael-removebg-preview.png",
            "siguiente": "Dialogo_18",
            "etiqueta": "Ir de frente...",
            "titulo": "Asalto",
            "descripcion": "Decides entrar con todo",
            "log": "Elegiste el camino del Asalto"
        }
    ]
},


// ACTO 1 - IZQUIERDA
    
    "Dialogo_3": {
        "titulo": "",
        "fondo": "../images/Acto_1/Dialogo_3/1.jpeg",
        "posicionTexto": "pos-arriba",
        "personajes": [
        ],
        "descripcion": "{PLAYER} elige hacerlo por el método de Mira",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_31",
            }
        ]
    },
    "Dialogo_31": {
    "titulo": "Infiltración en Sigilo",
    "fondo": "../images/Acto_1/Dialogo_3/1.jpeg", // Fondo inicial
    "posicionTexto": "pos-centro",
    "personajes": [
        // Empieza Mira que fue la que propuso el plan
        { 
            "id": "Mira", 
            "src": "../images/Perfil_Personajes/Mira_Hablando.png", 
            "pos": "right: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Mira", 
            "texto": "Al menos tengo a otro listo conmigo." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Zack:REMOVE| |Kael:../images/Perfil_Personajes/Kael_Enfadado.png:left: 1%| Sois unos cagaos… LOS 2." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Mira:REMOVE| |Zack:../images/Perfil_Personajes/Zack_Hablando.png:right: 1%| De nada servirá esto si morimos antes de tiempo, así que a callar y vamos por detrás." 
        },
        { 
            "quien": "Kael", 
            "expresion": "Kael:../images/Perfil_Personajes/Kael_Enfadado.png",
            "texto": "Maldita democracia, ¿no está claro por qué no funciona?" 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| |Kael:REMOVE| Van por detrás del laboratorio." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Hablando.png:left: 1%| Venga Mira, hazlo." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Hablando.png:right: 1%| Vale." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| |Mira:REMOVE| Saca el ordenador y se abre la escotilla. Entran a las instalaciones en total sigilo, pero las luces son tan claras que podrían ser vistos." 
        },
        { 
            "quien": "Kael", 
            // Cambio de fondo a la escena interior (2.jpeg)
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Asustado.png:left: 1%| |FONDO:../images/Acto_1/Dialogo_3/2.jpeg| No me jodas, aquí hay demasiada luz, nos podrían ver hasta por las sombras." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Sorprendido.png:right: 1%| Mierda, no pensaba que fuese a tener luz en todas las instalaciones. Si no hay nadie, ¿para qué tanta luz?" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Kael:REMOVE| |Zack:../images/Perfil_Personajes/Zack_Pensando.png:left: 1%| Caprichos de la IA supongo. Tenemos que hacer algo, no podemos simplemente ir." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Mira:REMOVE| |Kael:../images/Perfil_Personajes/Kael_Gritando.png:right: 1%| ¡Y ENTONCES DE QUÉ HA SERVIDO COLARSE EN SIGILO SI NOS VAN A VER!" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Zack:REMOVE| |Mira:../images/Perfil_Personajes/Mira_Asustado.png:left: 1%| Calmaos… mi Flipper nos puede ayudar. Puedo sabotear la energía o escanear la zona para obtener las rutas de patrullaje." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Kael:REMOVE| |Zack:../images/Perfil_Personajes/Zack_Pensando.png:right: 1%;)| mmmm…" 
        }
    ],
    "opciones": [
        {
            "texto": "Sabotear la Energía",
            "imagen": "../images/Acto_1/Dialogo_3/Eleccion_Sabotear la Energía.png",
            "siguiente": "Dialogo_4",
            "etiqueta": "Cortar la luz...",
            "titulo": "Apagón",
            "descripcion": "Apagas la luz para que no te vean los robots y puedas llegar a tu destino.",
            "log": "Decidiste sabotear la energía del complejo."
        },
        {
            "texto": "Escanear la zona",
            "imagen": "../images/Acto_1/Dialogo_3/Eleccion_Escanear la zona.png",
            "siguiente": "Dialogo_12",
            "etiqueta": "Rastrear patrullas...",
            "titulo": "Escaneo",
            "descripcion": "Mira obtiene las rutas y pueden avanzar evitando a los robots.",
            "log": "Decidiste escanear las rutas de patrullaje."
        }
    ]
    },
    "Dialogo_4":{},

// ACTO 1 - DERECHA

"Dialogo_18": {
        "titulo": "La DECISIÓN.",
        "fondo": "../images/Acto_1/Dialogo_18/1.jpeg",
        "posicionTexto": "pos-arriba", //
        "personajes": [
        ],
        "descripcion": "{PLAYER} elige hacerlo por el método de Kael",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_18_01",
            }
        ]
    },

    "Dialogo_18_01": {
        "titulo": "",
        "fondo": "../images/Acto_1/Dialogo_18/1.jpeg",
        "posicionTexto": "pos-arriba",  
        "personajes": [
            { 
                "id": "Zack", 
                "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
                "pos": "right: 1%;" 
            }
        ],
        "secuenciaDialogo": [
            { 
                "quien": "{PLAYER}", 
                "texto": "Vamos a por todas, no se esperaran un ataque sorpresa" 
            },
            {
            "quien": "Kael",
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Gritando.png:left: 1%| ESA EEESSSS LA ACTITUD, VAMOS A POR ELLOS"
            },
            {
            "quien": "Mira",
            "texto": "|Zack:REMOVE| |Mira:../images/Perfil_Personajes/Mira_Confundido.png:right: 1%| Ay dios, para que abre venido con estos 2 locos"
            },
            {
            "quien": "Kael",
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Pensando.png:left: 1%| Venga a ver, ¿como lo hacemos?"
            },
            {
            "quien": "Mira",
            "texto": " |Mira:../images/Perfil_Personajes/Mira_Gritando.png:right: 1%| Ay ya que, de perdidos al rio..."
            },
            {
            "quien": "Mira",
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Gritando.png:right: 1%| Con las bombas podemos romper las puertas y si tenemos suerte nos cargamos a algunos solo con la caída de la puerta"
            },
            {
            "quien": "Kael",
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Hablando.png:left: 1%| Buena idea, si metemos una de humo podríamos aparte pasar desapercibidos por si acaso"
            },
            {
            "quien": "Mira",
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Hablando.png:right: 1%| Pues venga, {PLAYER} ayúdame a poner esto aqui"
            },
        ],
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_18_02",
            }
        ]
    },
    "Dialogo_18_02": {
        "titulo": "La DECISIÓN.",
        "fondo": "../images/Acto_1/Dialogo_18/2.png",
        "posicionTexto": "pos-arriba", //
        "personajes": [
        ],
        "descripcion": "{PLAYER} y Mira ponen las bombas en la puerta, mientras Kael se prepara para la accion",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_18_03",
            }
        ]
    },

    "Dialogo_18_03": {
        "titulo": "",
        "fondo": "../images/Acto_1/Dialogo_18/2.png",
        "posicionTexto": "pos-arriba",  
        "personajes": [
            { 
                "id": "Zack", 
                "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
                "pos": "right: 1%;" 
            }
        ],
        "secuenciaDialogo": [
            { 
                "quien": "{PLAYER}", 
                "texto": "Bien bien, pues ya lo tenemos, vamos a por todas entonces" 
            },
            {
            "quien": "Mira",
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Confundido.png:left: 1%| Espera, ¿no deberíamos pensarlo mejor?"
            },
            {
            "quien": "Kael",
            "texto": "|Zack:REMOVE||Kael:../images/Perfil_Personajes/Kael_Hablando.png:right: 1%| Mejor no planeemos que sino si falla algo no sabemos que hacer, mejor improvisamos desde el principio y lo que salga"
            },
            {
            "quien": "Mira",
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Confundido.png:left: 1%| ¿{PLAYER}?..."
            },
            {
            "quien": "{PLAYER}",
            "texto": "|Kael:REMOVE||Zack:../images/Perfil_Personajes/Zack_Hablando.png:right: 1%| Llegados a este punto me da igual morir la verdad"
            },
            {
            "quien": "Mira",
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Pensando.png:left: 1%| pues hoy en vez de morir 1 millon de personas moriran 1 millon y 2"
            },
            {
            "quien": "Kael",
            "texto": "|Zack:REMOVE||Kael:../images/Perfil_Personajes/Kael_Hablando.png:right: 1%| ¿No serian 3?"
            },
            {
            "quien": "Mira",
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Hablando.png:left: 1%| No porque yo estoy segura que sobreviviré..."
            },
            {
            "quien": "{PLAYER}",
            "texto": "|Kael:REMOVE||Zack:../images/Perfil_Personajes/Kael_Hablando.png:right: 1%| Ja, que optimista, pues adelante..."
            },
            {
            "quien": "{PLAYER}",
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Gritando.png:right: 1%| A POR TODAS!!"
            },
            {
            "quien": "Kael",
            "texto": "|Zack:REMOVE||Kael:../images/Perfil_Personajes/Kael_Gritando.png:right: 1%| . . . ¡¡SI!!"
            },
            {
            "quien": "Mira",
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Gritando.png:left: 1%| SIIIIIIIIIIUUU!!"
            },
        ],
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_18_04",
            }
        ]
    },

    "Dialogo_18_04": {
        "titulo": "La DECISIÓN.",
        "fondo": "../images/Acto_1/Dialogo_18/3.png",
        "posicionTexto": "pos-arriba", //
        "personajes": [
        ],
        "descripcion": "{PLAYER} y sus compañeros lanzan 1 granada para romper la puerta y al caer tiran una de humo para distraer mientras piensan su siguiente movimiento...",
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha", 
                "siguiente": "Dialogo_18_03",
            }
        ]
    },

     "Dialogo_18_03": {
        "titulo": "",
        "fondo": "../images/Acto_1/Dialogo_18/3.png",
        "posicionTexto": "pos-arriba",  
        "personajes": [
            { 
                "id": "Kael", 
                "src": "../images/Perfil_Personajes/Kael_Asustado.png", 
                "pos": "right: 1%;" 
            }
        ],
        "secuenciaDialogo": [
            { 
                "quien": "Kael", 
                "texto": "¿QUE HACEMOS AHORA?" 
            },
            { 
                "quien": "{PLAYER}", 
                "texto": "|Zack:../images/Perfil_Personajes/Zack_Gritando.png:left: 1%| ¿QUE TENEMOS?" 
            },
            { 
                "quien": "Kael", 
                "texto": "|Kael:../images/Perfil_Personajes/Kael_Asustado.png:right: 1%| ¡SOLO MIS PUÑOS!" 
            },
            { 
                "quien": "Mira", 
                "texto": "|Zack:REMOVE||Mira:../images/Perfil_Personajes/Mira_Gritando.png:left: 1%| MI LAPTOP PUEDE PIRATEAR LAS TORRETAS DE AHI, PERO TENEIS QUE DEFENDERME HASTA CONSEGUIRLO" 
            },
            { 
                "quien": "{PLAYER}", 
                "texto": "|Kael:REMOVE||Zack:../images/Perfil_Personajes/Zack_Gritando.png:right: 1%| MIRAD, EN EL SUELO HAY UNA GRANADA EMP, CON ESTO LOS ROBOTS SE ROMPERÁN PERO NO SE SI ROMPERAN ALGO MÁS A SU PASO" 
            },
            { 
                "quien": "Kael", 
                "texto": "|Mira:REMOVE||Kael:../images/Perfil_Personajes/Kael_Asustado.png:left: 1%| ¡¿Y QUE HACEMOS?!" 
            },
        ],
        "opciones": [
            {
            "texto": "Elección Mira -> Hackeo",
            "imagen": "../images/Acto_1/Dialogo_18/Mira.png", 
            "siguiente": "Dialogo_18_03",
            "etiqueta": "Colarse en Sigilo...",
            "titulo": "Sigilo",
            "descripcion": "Decides avanzar con cautela.",
            "log": "Elegiste el camino del Sigilo"
        },
        {
            "texto": "Elección del {PLAYER} -> Granada",
            "imagen": "../images/Acto_1/Dialogo_18/Zack.png",
            "siguiente": "Dialogo_18_03",
            "etiqueta": "Ir de frente...",
            "titulo": "Asalto",
            "descripcion": "Decides entrar con todo",
            "log": "Elegiste el camino del Asalto"
        }
        ]
    },




    /*
    "nombre_del_nodo": {
        "titulo": "Título de la Escena",
        "fondo": "../images/tu_imagen.png",
        "posicionTexto": "pos-centro", //
        "personajes": [ //
            { 
                "id": "{PLAYER}", 
                "src": "../images/Zack_base.png", 
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
                "quien": "{PLAYER}", 
                "expresion": "{PLAYER}:../images/Zack_sorprendido.png", 
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