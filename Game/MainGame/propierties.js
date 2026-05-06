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
    "Dialogo_4": {
    "titulo": "Sabotaje",
    "fondo": "../images/Acto_1/Dialogo_4/1.jpeg",
    "posicionTexto": "pos-centro",
    "personajes": [],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "{PLAYER} decide sabotear la energía." 
        },
        { 
            "quien": "Kael", 
            // Cambio de fondo a 2.jpeg y entrada de Kael a la izquierda (con espejo automático)
            "texto": "|FONDO:../images/Acto_1/Dialogo_4/2.jpeg| |Kael:../images/Perfil_Personajes/Kael_Hablando.png:left: 1%| Me da cosa lo precavido que sois, aquí falta acción." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Hablando.png:right: 1%| Habrá cuando lleguemos hasta donde los robots." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Kael:REMOVE| |Mira:../images/Perfil_Personajes/Mira_Pensando.png:left: 1%| ¿Quién va delante?" 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| |Mira:REMOVE| Todos quedan en silencio esperando una respuesta, ante esto {PLAYER} decide decidirlo él mismo." 
        }
    ],
    "opciones": [
        {
            "texto": "1º Orden",
            "imagen": "../images/Acto_1/Dialogo_4/Eleccion_Orden 1.png",
            "siguiente": "Dialogo_5",
            "etiqueta": "Mira delante...",
            "titulo": "Orden de marcha",
            "descripcion": "Mira va delante, {PLAYER} irás en el medio, y Kael irá detrás tuya.",
            "log": "Elegiste el primer orden de formación."
        },
        {
            "texto": "2º Orden",
            "imagen": "../images/Acto_1/Dialogo_4/Eleccion_Orden 2.png",
            "siguiente": "Dialogo_6",
            "etiqueta": "Kael delante...",
            "titulo": "Orden de marcha",
            "descripcion": "Kael va delante, Mira irá en el medio, y {PLAYER} irá detrás.",
            "log": "Elegiste el segundo orden de formación."
        },
        {
            "texto": "3º Orden",
            "imagen": "../images/Acto_1/Dialogo_4/Eleccion_Orden 3.png",
            "siguiente": "Dialogo_7",
            "etiqueta": "{PLAYER} delante...",
            "titulo": "Orden de marcha",
            "descripcion": "{PLAYER} va delante, Mira irá en el medio, y Kael irá detrás.",
            "log": "Elegiste el tercer orden de formación."
        }
    ]
    },
    "Dialogo_5": {
    "titulo": "Infiltración: Orden de Mira",
    "fondo": "../images/Acto_1/Dialogo_5/1.jpeg",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Zack", 
            "src": "../images/Perfil_Personajes/Zack_Confundido.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "{PLAYER} decide que Mira vaya delante." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Asustado.png:right: 1%| Me da miedo..." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "Pero eres la que tiene más sigilo, si dejo a este delante seguro que la caga." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Zack:REMOVE| |Kael:../images/Perfil_Personajes/Kael_Confundido.png:left: 1%| ¿Quién es este?" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Kael:REMOVE| |Zack:../images/Perfil_Personajes/Zack_Confundido.png:left: 1%| …" 
        },
        { 
            "quien": "Mira", 
            "expresion": "Mira:../images/Perfil_Personajes/Mira_Confundido.png",
            "texto": "…" 
        },
        { 
            "quien": "Mira", 
            "expresion": "Mira:../images/Perfil_Personajes/Mira_Hablando.png",
            "texto": "Vale entonces voy yo, seguidme." 
        },
        { 
            "quien": "Narrador", 
            // Cambio de fondo a 2.jpeg mientras avanzan
            "texto": "|Zack:REMOVE| |Mira:REMOVE| |FONDO:../images/Acto_1/Dialogo_5/2.jpeg| Continúan con sigilo y se encuentran a un grupo de robots." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Hablando.png:right: 1%| …seguidme…" 
        },
        { 
            "quien": "Narrador", 
            // Cambio de fondo final a 3.jpeg al llegar al Doctor Vane
            "texto": "|Mira:REMOVE| |FONDO:../images/Acto_1/Dialogo_5/3.jpeg| El grupo consigue llegar donde el doctor Vane sin ser visto por ningún robot." 
        }
    ],
    "opciones": [
        {
            "texto": "▶",
            "tipo": "flecha",
            "siguiente": "Dialogo_11",
            "etiqueta": "El encuentro...",
            "titulo": "Doctor Vane",
            "descripcion": "Has llegado al corazón de las instalaciones.",
            "log": "Llegaste ante el Doctor Vane mediante sigilo."
        }
    ]
    },
    "Dialogo_6": {
    "titulo": "Infiltración: Orden de Kael",
    "fondo": "../images/Acto_1/Dialogo_6/1.jpeg",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Kael", 
            "src": "../images/Perfil_Personajes/Kael_Hablando.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "{PLAYER} decide que Kael vaya delante." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Gritando.png:left: 1%| ¡PERFECTO!" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Asustado.png:right: 1%| No, pero contrólate. Intenta que no te vean por Dios, no podemos fallar justo ahora." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Hablando.png:left: 1%| Haré lo que pueda ;)" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Pensando.png:right: 5%| ¿Por qué me da que algo va a salir mal?" 
        },
        { 
            "quien": "Kael", 
            "texto": "No seas gafe, venga seguidme." 
        },
        { 
            "quien": "Narrador", 
            // Cambio de fondo y limpieza de pantalla para la transición
            "texto": "|Zack:REMOVE| |Mira:REMOVE| |Kael:REMOVE| |FONDO:../images/Acto_1/Dialogo_6/2.jpeg| Siguen de camino hasta el laboratorio pero…" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Asustado.png:right: 1%| Chicos, chicos... hay robots viniendo desde atrás." 
        },
        { 
            "quien": "Kael y {PLAYER}", 
            // Aparecen ambos asustados en sus posiciones
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Asustado.png:left: 1%| |Kael:../images/Perfil_Personajes/Kael_Asustado.png:right: 1%| No jodas..." 
        },
        { 
            "quien": "Narrador", 
            "texto": "Kael habla mientras estaba caminando y se choca con un carrito, haciendo muchísimo ruido." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Asustado.png:left: 1%| Me cago en…" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Kael:REMOVE| |Mira:../images/Perfil_Personajes/Mira_Enfadado.png:right: 1%| Torpe de mier-" 
        },
        { 
            "quien": "Mira", 
            "expresion": "Mira:../images/Perfil_Personajes/Mira_Asustado.png",
            "texto": "¡Ostia, que vienen más rápido los de atrás!" 
        },
        { 
            "quien": "{PLAYER}", 
            "expresion": "Zack:../images/Perfil_Personajes/Zack_Asustado.png",
            "texto": "Y se acercan por los lados..." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Mira:REMOVE| |Kael:../images/Perfil_Personajes/Kael_Gritando.png:right: 1%| ¡CORRAN PERRAS, CORRAN!" 
        },
        { 
            "quien": "Narrador", 
            // Transición a la carrera frenética
            "texto": "|Zack:REMOVE| |Kael:REMOVE| |FONDO:../images/Acto_1/Dialogo_6/3.jpeg| Corren esquivando los disparos de los robots y eso hace que toda la central esté en alerta..." 
        },
        { 
            "quien": "Narrador", 
            // Llegada al doctor
            "texto": "|FONDO:../images/Acto_1/Dialogo_6/4.jpeg| ...pero finalmente llegan hasta donde el doctor." 
        }
    ],
    "opciones": [
        {
            "texto": "▶",
            "tipo": "flecha",
            "siguiente": "Dialogo_10",
            "etiqueta": "El doctor Vane...",
            "titulo": "Encuentro",
            "descripcion": "Lograste llegar, aunque haciendo un escándalo.",
            "log": "Llegaste ante el Doctor Vane huyendo de las patrullas."
        }
    ]
    },
    "Dialogo_7": {
    "titulo": "Infiltración: Orden de {PLAYER}",
    "fondo": "../images/Acto_1/Dialogo_7/1.jpeg",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Zack", 
            "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "{PLAYER} decide ir delante." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "Entonces iré yo delante, ya que nadie se ofrece." 
        },
        { 
            "quien": "Kael", 
            // Aparecen ambos: Zack a la izquierda y Kael a la derecha
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Hablando.png:right: 1%| ¡BIEN!" 
        },
        { 
            "quien": "Narrador", 
            // Cambio de fondo al pasillo/cruce
            "texto": "|Zack:REMOVE| |Kael:REMOVE| |FONDO:../images/Acto_1/Dialogo_7/2.jpeg| Van con sigilo hasta un cruce donde, por la voz baja de Mira, ocurre lo siguiente..." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Confundido.png:left: 1%| ¿Qué?" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Hablando.png:right: 1%| feusdfndskfjvsa..." 
        },
        { 
            "quien": "{PLAYER}", 
            "expresion": "Zack:../images/Perfil_Personajes/Zack_Confundido.png",
            "texto": "Dilo más alto, que no oigo." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Gritando.png:right: 1%| ¡FDdfhdjfjdsHDFSjf!" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Gritando.png:left: 1%| ¡QUE NO…!" 
        },
        { 
            "quien": "Narrador", 
            // Cambio de fondo al momento del choque (oscuridad)
            "texto": "|Zack:REMOVE| |Mira:REMOVE| |FONDO:../images/Acto_1/Dialogo_7/3.png| El muy torpe se choca haciendo demasiado ruido. Un robot se queda analizando el sonido en la oscuridad..." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Asustado.png:right: 1%| Mierda, que vienen... ¡Vámonos corriendo!" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Gritando.png:left: 1%| Eso será más difícil. ¡Hay que pelear!" 
        },
        { 
            "quien": "{PLAYER}", 
            // Posicionamiento centrado para la duda final antes de elegir
            "texto": "|Mira:REMOVE| |Kael:REMOVE| |Zack:../images/Perfil_Personajes/Zack_Confundido.png:left: 50%; transform: translateX(-50%)| ¡AY AY AY…! A ver, dejadme pensar." 
        }
    ],
    "opciones": [
        {
            "texto": "Huir",
            "imagen": "../images/Acto_1/Dialogo_2/Mira.jpeg",
            "siguiente": "Dialogo_8",
            "etiqueta": "Escapar...",
            "titulo": "Huida",
            "descripcion": "Decides evitar el enfrentamiento directo.",
            "log": "Elegiste huir de los robots."
        },
        {
            "texto": "Contraatacar",
            "imagen": "../images/Acto_1/Dialogo_2/Kael.jpeg",
            "siguiente": "Dialogo_9",
            "etiqueta": "Luchar...",
            "titulo": "Combate",
            "descripcion": "Decides pelear contra los robots.",
            "log": "Elegiste contraatacar a los robots."
        }
    ]
    },
    "Dialogo_8": {
    "titulo": "Huida hacia el Laboratorio",
    "fondo": "../images/Acto_1/Dialogo_8/1.jpeg",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Zack", 
            "src": "../images/Perfil_Personajes/Zack_Gritando.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "Decides hacer caso a Mira e huir."
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "No peleéis, ¡correr y punto!"
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Confundido.png:right: 1%| Joe."
        },
        { 
            "quien": "Narrador", 
            // Cambio de fondo dinámico al entrar en carrera al laboratorio
            "texto": "|Zack:REMOVE| |Kael:REMOVE| |FONDO:../images/Acto_1/Dialogo_8/2.jpeg| Van los tres corriendo hasta el laboratorio y entran a duras penas, alertando a los robots en el proceso."
        }
    ],
    "opciones": [
        {
            "texto": "▶",
            "tipo": "flecha",
            "siguiente": "Dialogo_10",
            "etiqueta": "El laboratorio...",
            "titulo": "Llegada",
            "descripcion": "Lograste entrar al laboratorio, pero la seguridad está en camino.",
            "log": "Elegiste huir en lugar de enfrentarte a las patrullas."
        }
    ]
    },
    "Dialogo_9": {
    "titulo": "Combate en las Instalaciones",
    "fondo": "../images/Acto_1/Dialogo_9/1.jpeg",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Zack", 
            "src": "../images/Perfil_Personajes/Zack_Confundido.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "Decides hacer caso a Kael y pelear." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "Qué remedio..." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Gritando.png:left: 1%| ¡KAEL… USA DESTROZA MANDÍBULAS!" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Gritando.png:right: 1%| No me hables como si fuera un pokemon, desgraciado." 
        },
        { 
            "quien": "Narrador", 
            "texto": "Lo destruye de un golpe, pero la conmoción llama la atención de los robots cercanos." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Zack:REMOVE| |Mira:../images/Perfil_Personajes/Mira_Gritando.png:left: 1%| ¡Qué idiotas sois! Vamos, seguidme, el laboratorio está por aquí." 
        },
        { 
            "quien": "Narrador", 
            // Cambio de fondo dinámico al entrar al laboratorio
            "texto": "|Mira:REMOVE| |Kael:REMOVE| |FONDO:../images/Acto_1/Dialogo_9/2.png| Siguen a Mira hasta el laboratorio. Consiguen entrar, pero los robots ya están en estado de alerta." 
        }
    ],
    "opciones": [
        {
            "texto": "▶",
            "tipo": "flecha",
            "siguiente": "Dialogo_10",
            "etiqueta": "El laboratorio...",
            "titulo": "Zona de Alerta",
            "descripcion": "Estás dentro, pero no estás solo.",
            "log": "Elegiste el enfrentamiento directo antes de entrar al laboratorio."
        }
    ]
    },
    "Dialogo_10": {
    "titulo": "El Encuentro en el Laboratorio",
    "fondo": "../images/Acto_1/Dialogo_10/1.jpeg",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Mira", 
            "src": "../images/Perfil_Personajes/Mira_Gritando.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "Logran entrar al laboratorio a duras penas." 
        },
        { 
            "quien": "Mira", 
            "texto": "Sabía que la iba a cagar alguno de vosotros dos, ¡por Dios!" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Confundido.png:right: 1%| Ufff... al menos estamos vivos." 
        },
        { 
            "quien": "Mira", 
            "expresion": "Mira:../images/Perfil_Personajes/Mira_Pensando.png",
            "texto": "Y ahora... ¿Qué buscamos?" 
        },
        { 
            "quien": "Kael", 
            "texto": "Supongo que-" 
        },
        { 
            "quien": "???", 
            "texto": "|Dr.Vane:../images/Perfil_Personajes/Dr.Vane_Pilar_Camuflado.png:right: 50%; transform: translateX(-50%)| ¿Y vosotros quiénes sois?" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Asustado.png:left: 1%| |Dr.Vane:REMOVE| |Kael:REMOVE| ¡¿QUEEEE?!" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Asustado.png:right: 1%| ¡AAAHHH!" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Confundido.png:left: 10%| |Zack:REMOVE| ¿QUÉ COÑO? ¿HAY ALGUIEN MÁS AQUÍ?" 
        },
        { 
            "quien": "Voz misteriosa", 
            "texto": "|Dr.Vane:../images/Perfil_Personajes/Dr.Vane_Pilar_Camuflado.png:right: 1%| Sois vosotros los que habéis entrado, yo ya estaba aquí. Venid, anda..." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Mira:REMOVE| |Kael:REMOVE| |Dr.Vane:REMOVE| Caminan un poco y, detrás de un mueble, encuentran a..." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Asustado.png:left: 1%| Ostia..." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Asustado.png:right: 1%| ¡AAAHHH!" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Confundido.png:left: 10%| |Zack:REMOVE| Ehhh... ¿tú eres?..." 
        },
        { 
            "quien": "Dr. Vane", 
            "texto": "|Dr.Vane:../images/Perfil_Personajes/Dr.Vane_Pilar_Hablando.png:right: 1%| Soy Vane, un gusto conoceros." 
        }
    ],
    "opciones": [
        {
            "texto": "▶",
            "tipo": "flecha",
            "siguiente": "Fin_Acto_1",
            "etiqueta": "Hablar con Vane...",
            "titulo": "El Doctor",
            "descripcion": "Has encontrado al objetivo principal.",
            "log": "Entraste al laboratorio y encontraste al Dr. Vane escondido."
        }
    ]
    },
    "Dialogo_11": {
    "titulo": "Infiltración Exitosa",
    "fondo": "../images/Acto_1/Dialogo_11/1.jpeg",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Mira", 
            "src": "../images/Perfil_Personajes/Mira_Hablando.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Mira", 
            "texto": "Cuando lo hacemos todos bien sí que logramos lo que sea, ¿eh?" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Hablando.png:right: 1%| Qué cursi suena eso, cállate anda." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Enfadado.png:left: 1%| ¡Encima! Para una cosa buena que os digo..." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Confundido.png:right: 1%| Joder, sois como la noche y el día…" 
        },
        { 
            "quien": "Mira", 
            "expresion": "Mira:../images/Perfil_Personajes/Mira_Pensando.png",
            "texto": "Y ahora... ¿Qué buscamos?" 
        },
        { 
            "quien": "Kael", 
            "texto": "Supongo que-" 
        },
        { 
            "quien": "???", 
            // El Dr. Vane aparece camuflado en el centro para dar el susto inicial
            "texto": "|Dr.Vane:../images/Perfil_Personajes/Dr.Vane_Pilar_Camuflado.png:left: 50%; transform: translateX(-50%)| ¿Y vosotros quiénes sois?" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Asustado.png:left: 1%| |Dr.Vane:REMOVE| |Kael:REMOVE| ¡¿QUEEEE?!" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Asustado.png:right: 1%| ¡AAAHHH!" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Confundido.png:left: 10%| |Zack:REMOVE| ¿QUÉ COÑO? ¿HAY ALGUIEN MÁS AQUÍ?" 
        },
        { 
            "quien": "Voz misteriosa", 
            "texto": "|Dr.Vane:../images/Perfil_Personajes/Dr.Vane_Pilar_Camuflado.png:right: 1%| Sois vosotros los que habéis entrado, yo ya estaba aquí. Venid, anda..." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Mira:REMOVE| |Kael:REMOVE| |Dr.Vane:REMOVE| Caminan un poco y, detrás de un mueble, encuentran a una persona oculta." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Asustado.png:left: 1%| Ostia..." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Asustado.png:right: 1%| ¡AAAHHH!" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Confundido.png:left: 10%| |Zack:REMOVE| Ehhh... ¿tú eres?..." 
        },
        { 
            "quien": "Dr. Vane", 
            "texto": "|Dr.Vane:../images/Perfil_Personajes/Dr.Vane_Pilar_Hablando.png:right: 1%| Soy Vane, un gusto conoceros." 
        }
    ],
    "opciones": [
        {
            "texto": "▶",
            "tipo": "flecha",
            "siguiente": "Fin_Acto_1",
            "etiqueta": "Conversar...",
            "titulo": "El Doctor Vane",
            "descripcion": "Has localizado al objetivo principal.",
            "log": "{PLAYER} y el equipo han encontrado al Dr. Vane tras infiltrarse con éxito."
        }
    ]
    },
    "Dialogo_12": {
    "titulo": "Escaneo de Rutas",
    "fondo": "../images/Acto_1/Dialogo_12/1.jpeg",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Zack", 
            "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "{PLAYER} decide escanear la zona." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "Será mejor que escanees la zona, así podremos evitar que nos vean los robots." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Pensando.png:right: 1%| Supongo que… así podré romper robots sin que me vean más." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Zack:REMOVE| |Mira:../images/Perfil_Personajes/Mira_Hablando.png:left: 1%| ¡Eso! Busca el lado bueno a mis planes de una vez." 
        },
        { 
            "quien": "Kael", 
            "expresion": "Kael:../images/Perfil_Personajes/Kael_Enfadado.png",
            "texto": "Mmmm..." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Mira:REMOVE| |Zack:../images/Perfil_Personajes/Zack_Hablando.png:left: 1%| Pues venga, escanea y así podremos evitar a los robots." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Hablando.png:right: 1%| Voy." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| |Mira:REMOVE| |Kael:REMOVE| Mira usa la pantalla de su brazo para escanear el laboratorio. Tras unos segundos, ya conoce el camino más seguro." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Hablando.png:left: 1%| Ya sé dónde está el laboratorio. ¿Quién irá primero?" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Confundido.png:right: 1%| ¿No deberías ir tú primero? Ya que te sabes el camino..." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Pensando.png:left: 1%| A ver, sí, pero estaré ocupada con el mapa. A ver si me voy a chocar con algo, que esta Tablet es muy frágil." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Zack:REMOVE| |Kael:../images/Perfil_Personajes/Kael_Hablando.png:right: 1%| ¿Entonces iría yo, no?" 
        },
        { 
            "quien": "Mira", 
            "texto": "Algo me dice que no... ¿Y si va {PLAYER}?" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Kael:REMOVE| |Zack:../images/Perfil_Personajes/Zack_Pensando.png:left: 50%; transform: translateX(-50%)| Puesssss, dejad que lo piense." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| |Mira:REMOVE| {PLAYER} debe decidir quién tomará la vanguardia." 
        }
    ],
    "opciones": [
        {
            "texto": "1º Orden",
            "imagen": "../images/Acto_1/Dialogo_12/Eleccion_Orden 1.png",
            "siguiente": "Dialogo_13",
            "etiqueta": "Mira delante...",
            "titulo": "Formación",
            "descripcion": "Mira va delante, {PLAYER} irás en el medio, y Kael irá detrás tuya.",
            "log": "Elegiste que Mira guíe al grupo."
        },
        {
            "texto": "2º Orden",
            "imagen": "../images/Acto_1/Dialogo_2/Eleccion_Orden 2.png",
            "siguiente": "Dialogo_14",
            "etiqueta": "Kael delante...",
            "titulo": "Formación",
            "descripcion": "Kael va delante, Mira irá en el medio, y {PLAYER} irá detrás.",
            "log": "Elegiste que Kael abra el camino."
        },
        {
            "texto": "3º Orden",
            "imagen": "../images/Acto_1/Dialogo_2/Eleccion_Orden 3.png",
            "siguiente": "Dialogo_15",
            "etiqueta": "{PLAYER} delante...",
            "titulo": "Formación",
            "descripcion": "{PLAYER} va delante, Mira irá en el medio, y Kael irá detrás.",
            "log": "Elegiste liderar la formación tú mismo."
        }
    ]
    },
    "Dialogo_13": {
    "titulo": "Infiltración: Guía de Mira",
    "fondo": "../images/Acto_1/Dialogo_13/1.jpeg",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Mira", 
            "src": "../images/Perfil_Personajes/Mira_Asustado.png", 
            "pos": "right: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "{PLAYER} elige que irá delante Mira." 
        },
        { 
            "quien": "Mira", 
            "texto": "¿Qué? ¿Yo por qué?" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Hablando.png:left: 1%| Porque sabes ir con sigilo, es perfecto para evitar peleas innecesarias. Si dejo ir a este delante, no podrá aguantarse de romper alguno." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Zack:REMOVE| |Kael:../images/Perfil_Personajes/Kael_Hablando.png:left: 1%| Odio decir que tienes razón, pero…" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Confundido.png:right: 1%| Pues nada… poneos detrás. Si yo hago algo, lo hacéis vosotros también; hacedme total caso, ¿vale?" 
        },
        { 
            "quien": "Kael y {PLAYER}", 
            // Aparecen Kael a la derecha y Zack a la izquierda para el grito al unísono
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Confundido.png:right: 1%| |Zack:../images/Perfil_Personajes/Zack_Sorprendido.png:left: 1%| ¡VAAAALEEEE!" 
        },
        { 
            "quien": "Narrador", 
            // Cambio de fondo dinámico al pasillo final
            "texto": "|Zack:REMOVE| |Kael:REMOVE| |Mira:REMOVE| |FONDO:../images/Acto_1/Dialogo_13/2.jpeg| Mira conoce el camino y actúa con extremo sigilo. Esto hace que el grupo llegue al final sin haber tenido que eliminar a ningún robot." 
        }
    ],
    "opciones": [
        {
            "texto": "▶",
            "tipo": "flecha",
            "siguiente": "Dialogo_11",
            "etiqueta": "Final del pasillo...",
            "titulo": "Objetivo a la vista",
            "descripcion": "Habéis llegado al laboratorio sin ser detectados.",
            "log": "Elegiste que Mira liderara el grupo con sigilo."
        }
    ]
    },
    "Dialogo_14": {
    "titulo": "Infiltración: La Vanguardia de Kael",
    "fondo": "../images/Acto_1/Dialogo_14/1.jpeg",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Kael", 
            "src": "../images/Perfil_Personajes/Kael_Enfadado.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "{PLAYER} elige que Kael irá delante." 
        },
        { 
            "quien": "Kael", 
            "texto": "Vale, os prometo que haré lo que pueda para no matar a robots." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Hablando.png:right: 1%| Hombre, tampoco así. Los indispensables, pero no por capricho." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Hablando.png:left: 1%| |Kael:REMOVE| Exacto." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Gritando.png:right: 1%| |Mira:REMOVE| ¡PUES VENGA, SEGUIDME LOS DOS DETRÁS DE MIS MUSCULOSOS GLÚTEOS!" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Enfadado.png:left: 1%| Ve tú detrás de él, que a este paso lo empujo a un robot." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| |Kael:REMOVE| |Mira:REMOVE| |FONDO:../images/Acto_1/Dialogo_14/2.jpeg| Kael va delante y no puede reprimir sus ganas de romper robots. Elimina a todos los que ve por el camino, dejando el ejército de robots a la mitad." 
        }
    ],
    "opciones": [
        {
            "texto": "▶",
            "tipo": "flecha",
            "siguiente": "Dialogo_11",
            "etiqueta": "Camino despejado...",
            "titulo": "Rastro de Chatarra",
            "descripcion": "El camino al laboratorio está lleno de piezas de robot.",
            "log": "Elegiste que Kael liderara la marcha, resultando en un combate constante."
        }
    ]
    },
    "Dialogo_15": {
    "titulo": "Liderazgo de {PLAYER}",
    "fondo": "../images/Acto_1/Dialogo_15/1.jpeg",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Zack", 
            "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "{PLAYER} elige que él irá delante." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Gritando.png:right: 1%| ¿Qué dices? ¿Reventamos unos cuantos robots los dos?" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Asustado.png:left: 1%| |Zack:REMOVE| No, no... es mejor que vayamos en completo sigilo, que si no ya sabemos qué pasará." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Hablando.png:right: 1%| Qué coñazo eres." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Confundido.png:left: 50%; transform: translateX(-50%)| |Mira:REMOVE| Puesssss…" 
        }
    ],
    "opciones": [
        {
            "texto": "Sigilo",
            "imagen": "../images/Acto_1/Dialogo_15/Mira.jpeg",
            "siguiente": "Dialogo_16",
            "etiqueta": "Plan de Mira...",
            "titulo": "Infiltración Silenciosa",
            "descripcion": "Iréis en sigilo para no alertar a ningún robot.",
            "log": "Elegiste seguir el plan de sigilo de Mira."
        },
        {
            "texto": "A saco",
            "imagen": "../images/Acto_1/Dialogo_15/Kael.jpeg",
            "siguiente": "Dialogo_17",
            "etiqueta": "Plan de Kael...",
            "titulo": "Limpieza de Patrullas",
            "descripcion": "Iréis en sigilo pero rompiendo robots despistados por el camino.",
            "log": "Elegiste el enfoque agresivo propuesto por Kael."
        }
    ]
    },
    "Dialogo_16": {
    "titulo": "Sigilo Absoluto",
    "fondo": "../images/Acto_1/Dialogo_16/1.jpeg",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Zack", 
            "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "{PLAYER} elige seguir el plan de Mira." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "Por hoy te haré caso, que no quiero correr riesgos." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Gritando.png:right: 1%| ¿Porque es mujer verdad?" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Gritando.png:left: 10%;| |Zack:REMOVE| Porque no tengo tendencias suicidas." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Hablando.png:left: 1%| |Mira:REMOVE| Exacto. En otra ocasión lo haremos a tu estilo, ¿okay?" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Pensando.png:right: 1%| Pfff, qué remedio." 
        },
        { 
            "quien": "Narrador", 
            // Cambio de fondo dinámico a 2.jpeg mientras avanzan con sigilo
            "texto": "|Zack:REMOVE| |Kael:REMOVE| |FONDO:../images/Acto_1/Dialogo_16/2.jpeg| Avanzan poco a poco y, con la ayuda de Mira, evitan cualquier encontronazo con los robots." 
        }
    ],
    "opciones": [
        {
            "texto": "▶",
            "tipo": "flecha",
            "siguiente": "Dialogo_11",
            "etiqueta": "Hacia el laboratorio...",
            "titulo": "Infiltración",
            "descripcion": "El grupo avanza sin ser detectado.",
            "log": "Elegiste priorizar el sigilo de Mira sobre la fuerza bruta de Kael."
        }
    ]
    },
    "Dialogo_17": {
    "titulo": "Acometida con Kael",
    "fondo": "../images/Acto_1/Dialogo_17/1.jpeg",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Zack", 
            "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "{PLAYER} elige seguir el plan de Kael." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "Por hoy te haré caso, me vendría bien ayuda aquí delante." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Hablando.png:right: 1%| Con gusto." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Zack:REMOVE| |Mira:../images/Perfil_Personajes/Mira_Pensando.png:left: 1%| Pido detrás por si la cagáis, para que pueda huir." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Gritando.png:right: 1%| ¡No nos gafes por Dios!" 
        },
        { 
            "quien": "Narrador", 
            // Cambio a fondo 2.jpeg: El avance y el error de comunicación
            "texto": "|Zack:REMOVE| |Mira:REMOVE| |Kael:REMOVE| |FONDO:../images/Acto_1/Dialogo_17/2.jpeg| Avanzan y rompen algunos robots, pero una mala comunicación entre ellos hace que no puedan eliminar a uno antes de que dé el aviso." 
        },
        { 
            "quien": "Narrador", 
            // Cambio a fondo 3.png: La huida frenética
            "texto": "|FONDO:../images/Acto_1/Dialogo_17/3.png| Con la alarma resonando, les toca correr y huir hacia el laboratorio a toda prisa." 
        }
    ],
    "opciones": [
        {
            "texto": "▶",
            "tipo": "flecha",
            "siguiente": "Dialogo_10",
            "etiqueta": "Al laboratorio...",
            "titulo": "Fuga",
            "descripcion": "La discreción ha terminado. Solo queda correr.",
            "log": "Elegiste avanzar agresivamente con Kael, lo que resultó en una persecución."
        }
    ]
    },
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
                "siguiente": "Dialogo_18_05",
            }
        ]
    },

     "Dialogo_18_05": {
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
            "siguiente": "Dialogo_22",
            "etiqueta": "Colarse en Sigilo...",
            "titulo": "Sigilo",
            "descripcion": "Decides avanzar con cautela.",
            "log": "Elegiste el camino del Sigilo"
        },
        {
            "texto": "Elección de {PLAYER} -> Granada",
            "imagen": "../images/Acto_1/Dialogo_18/Zack.png",
            "siguiente": "Dialogo_19",
            "etiqueta": "Ir de frente...",
            "titulo": "Asalto",
            "descripcion": "Decides entrar con todo",
            "log": "Elegiste el camino del Asalto"
        }
        ]
    },

    "Dialogo_19": {
    "titulo": "Pulso Electromagnético",
    "fondo": "../images/Acto_1/Dialogo_19/1.png",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Zack", 
            "src": "../images/Perfil_Personajes/Zack_Gritando.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "{PLAYER} decide usar su Granada EMP." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "¡DEJADMELO A MÍ! ¡TOMAD, ROBOTS DEL DIABLO!" 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| Les lanza la granada y deja noqueados a todos los robots de la zona instantáneamente." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Asustado.png:right: 1%| |FONDO:../images/Acto_1/Dialogo_19/2.jpeg| Uff, menos mal... Qué mal se me da improvisar." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Pensando.png:left: 1%| Pues yo me estaba divirtiendo." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Mira:REMOVE||Zack:../images/Perfil_Personajes/Zack_Hablando.png:right: 1%| Venga, id corriendo hacia… ¡Mierda!." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Confundido.png:left: 1%| ¿Qué pasa?" 
        },
        { 
            "quien": "Mira", 
            "expresion": "Mira:../images/Perfil_Personajes/Mira_Asustado.png",
            "texto": "Mierda, la puerta... Has roto los cables con el pulso mientras la puerta estaba cerrada, ¡cacho tonto!" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Mira:Remove||Zack:../images/Perfil_Personajes/Zack_Confundido.png:right: 1%| Joder... ¿y ahora qué hacemos?" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Pensando.png:left: 1%| |Kael:REMOVE| Por lo que veo, creo que podemos ir por los conductos de ahí arriba." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Zack:REMOVE||Kael:../images/Perfil_Personajes/Kael_Hablando.png:right: 1%| Pero tienes el hacking, puedes abrir la puerta, aunque sea esta." 
        },
        { 
            "quien": "Mira", 
            "expresion": "Mira:../images/Perfil_Personajes/Mira_Pensando.png",
            "texto": "Pues sí, pero igual alertamos a los robots. No sé si la puerta hará ruido al abrirse." 
        },
        { 
            "quien": "Kael", 
            "texto": "Yo diría que abramos la puerta." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Hablando.png:left: 1%| El conducto para mí es la mejor opción." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Gritando.png:right: 1%| ¡Que nooooo! Es mejor ir de frente. Ya que hemos empezado así, terminemos así también." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Hablando.png:left: 1%| ¿Tú qué dices, {PLAYER}?" 
        }
    ],
    "opciones": [
        {
            "texto": "Por la ventilación",
            "imagen": "../images/Acto_1/Dialogo_19/Mira.png",
            "siguiente": "Dialogo_21",
            "etiqueta": "Plan de Mira...",
            "titulo": "Infiltración Aérea",
            "descripcion": "Colarse por el conducto de ventilación para ir en sigilo saltando a los robots.",
            "log": "Elegiste el conducto de ventilación tras el fallo de la puerta."
        },
        {
            "texto": "Romper la puerta",
            "imagen": "../images/Acto_1/Dialogo_19/Kael.png",
            "siguiente": "Dialogo_20",
            "etiqueta": "Plan de Kael...",
            "titulo": "Fuerza Bruta",
            "descripcion": "Usar el hacking para abrir la última puerta e ir de frente.",
            "log": "Elegiste forzar la puerta dañada para avanzar directamente."
        }
    ]
    },
    "Dialogo_20": {
    "titulo": "El Último Regalo de un Loco",
    "fondo": "../images/Acto_1/Dialogo_20/1.jpeg",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Zack", 
            "src": "../images/Perfil_Personajes/Zack_Gritando.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "{PLAYER} elige hacerlo por el método de Kael." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "¡Venga, a por todas! Pon esa bomba en la puerta." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Hablando.png:right: 1%| Me vas cayendo cada vez mejor, ¿eh?" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Enfadado.png:left: 10%| |Zack:REMOVE| A mí todo lo contrario, no me hacéis ni caso." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Hablando.png:left: 1%| |Mira:REMOVE| No es nada personal, es Kael que me contagia su locura." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Pensando.png:right: 1%| Entre locos os entendéis, supongo. Ojalá haber venido con alguien más listo." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| |Kael:REMOVE| |Mira:REMOVE| |FONDO:../images/Acto_1/Dialogo_20/2.jpeg| Hackean la puerta y, como sospechaba Mira, el ruido no es nada sutil. Deben pelear y correr todo lo que puedan para esquivar a los robots restantes." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|FONDO:../images/Acto_1/Dialogo_20/3.jpeg| En el contraataque, Kael resulta gravemente herido. {PLAYER} y Mira lo arrastran a una cobertura segura mientras los disparos no cesan." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Asustado.png:left: 1%| No me jodas, Kael... no, no..." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Asustado.png:right: 1%| Mierda, esto no pinta nada bien. Si no nos movemos, se acercarán aún más." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Llorando.png:left: 10%| |Zack:REMOVE| Ahhh... chicos, lo siento. Mi locura ha jodido el plan, lo siento muchísimo." 
        },
        { 
            "quien": "Mira", 
            "texto": "No, no digas eso. Habrá una forma de conseguirlo." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Asustado.png:left: 1%| ¡Eh, mirad! Ahí está el laboratorio, falta muy poco para la puerta." 
        },
        { 
            "quien": "Mira", 
            "texto": "Es imposible. Me tomaría un tiempo abrirla y ya no tenemos el apoyo de Kael. Vayámonos, no quiero que nadie muera por..." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Gritando y Llorando.png:right: 1%| ¡Y… UNA… MIERDAAAA!" 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| |Mira:REMOVE| |FONDO:../images/Acto_1/Dialogo_20/4.jpeg| Kael se levanta y se prepara para su último movimiento." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Enfadado.png:left: 50%; transform: translateX(-50%)| {PLAYER}, cuida de Mira con la locura que te he contagiado. ¡NO LLORÉIS POR MÍ! Por fin podré ver a mi hijo otra vez. Gracias…" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Gritando y Llorando.png:right: 1%| ¡NOOOO, KAEL!" 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Kael:REMOVE| |FONDO:../images/Acto_1/Dialogo_20/5.jpeg| Kael se sacrifica para darles el tiempo necesario, embistiendo a los robots." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|FONDO:../images/Acto_1/Dialogo_20/6.jpeg| Mira intenta ir hacia él, pero {PLAYER} la sujeta y la apoya contra la puerta." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Gritando.png:left: 1%| ¡Mira, hazlo! Abre la puerta ahora." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Llorando.png:right: 1%| Pero Kael…" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Gritando y Llorando.png:left: 1%| ¡NO HAGAS QUE SU MUERTE SEA EN VANO! Él se sacrificó para que vivamos nosotros dos. ¡No pienso morir ahora que sigo vivo gracias a él!" 
        },
        { 
            "quien": "Narrador", 
            "texto": "|FONDO:../images/Acto_1/Dialogo_20/7.png| Mira abre la puerta mientras {PLAYER} observa impotente el destino de Kael." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|FONDO:../images/Acto_1/Dialogo_20/8.png| Logran cruzar el umbral justo antes de que lleguen los robots." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|FONDO:../images/Acto_1/Dialogo_20/9.png| A lo lejos... Kael muere." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|FONDO:../images/Acto_1/Dialogo_20/10.png| Mira intenta ayudar, pero {PLAYER} la retiene. Se han salvado, pero a un coste devastador." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Llorando.png:right: 1%| |FONDO:../images/Acto_1/Dialogo_20/11.png| No puede ser…" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Llorando.png:left: 1%| Lo ha hecho por nosotros... ha dado su vida por nosotros." 
        },
        { 
            "quien": "Mira", 
            "texto": "No sabía lo de su hijo… ¡No nos dijo nada!" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "Al final nos lo dio todo: su apoyo, su confianza, sus secretos… su vida." 
        },
        { 
            "quien": "Mira", 
            "texto": "No era tan malo... solo quería volver a ver a su hijo." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "… Vamos. Acabemos su última voluntad y venguémosle a él y a su hijo." 
        },
        { 
            "quien": "Mira", 
            "texto": "Vale…" 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| |Mira:REMOVE| Se limpian las lágrimas y siguen por el laboratorio hasta que distinguen a alguien escondido." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Asustado.png:left: 1%| Hay alguien ahí... ¿Quién eres?" 
        },
        { 
            "quien": "???", 
            "texto": "|Dr.Vane:../images/Perfil_Personajes/Dr.Vane_Pilar_Camuflado.png:right: 1%| Perdón... es que os vi llorando y no quería meterme donde no me llamaban. Estoy aquí detrás, asomaros." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Mira:REMOVE| |Dr.Vane:REMOVE| Se acercan hacia el origen de la voz." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Asustado.png:right: 1%| ¡AAAAHHHH!" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Asustado.png:left: 1%| ¡OSTIA! Pero..." 
        },
        { 
            "quien": "Dr. Vane", 
            "texto": "|Dr.Vane:../images/Perfil_Personajes/Dr.Vane_Pilar_Hablando.png:right: 1%| Mi más sentido pésame por vuestra pérdida... Soy Vane." 
        }
    ],
    "opciones": [
        {
            "texto": "Finalizar Acto",
            "tipo": "flecha",
            "siguiente": "Fin_Acto_1",
            "etiqueta": "El Laboratorio...",
            "titulo": "Encuentro",
            "descripcion": "Habéis encontrado al Doctor Vane tras un duro sacrificio.",
            "log": "Kael se sacrificó para que {PLAYER} y Mira pudieran entrar al laboratorio central."
        }
    ]
    },
    "Dialogo_21": {
    "titulo": "Infiltración por Ventilación",
    "fondo": "../images/Acto_1/Dialogo_21/1.png",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Zack", 
            "src": "../images/Perfil_Personajes/Zack_Hablando.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "{PLAYER} elige hacerlo por el método de Mira." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "Pues adelante. Ayudadme a subir y yo mismo quito los tornillos." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Hablando.png:right: 1%| ¿Qué animada está, no?" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Pensando.png:left: 1%| Supongo que está feliz de que su plan se haya impuesto al tuyo." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| |Kael:REMOVE| Kael ayuda a Mira a quitar los tornillos y entran en los conductos. Sin embargo, debido a un fallo en el sistema, el aire de la ventilación está intoxicado." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Hablando.png:right: 1%| |FONDO:../images/Acto_1/Dialogo_21/2.png| Me encuentro raro... ¿no hay algo extraño en este aire?" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Pensando.png:left: 1%| Espera que lo revise..." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Kael:REMOVE||Zack:../images/Perfil_Personajes/Zack_Pensando.png:right: 1%| Tiene razón, este aire se siente pesado." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Asustado.png:left: 1%| No me jodas... este aire no es del todo aire." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Asustado.png:right: 5%| ¿Está intoxicado?" 
        },
        { 
            "quien": "Mira", 
            "texto": "En pocas palabras, sí. ¡TENEMOS QUE DARNOS PRISA!" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Zack:REMOVE||Kael:../images/Perfil_Personajes/Kael_Asustado.png:right: 1%| ¡Ay, ay! Necesito aire... ¡CORRED, JODER!" 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| |Mira:REMOVE| |Kael:REMOVE| |FONDO:../images/Acto_1/Dialogo_21/1.png| Avanzan a toda velocidad y logran salir de los conductos, entrando en el laboratorio pero extremadamente debilitados." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Llorando.png:left: 1%| Ay por Dios... no puedo ni moverme." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Confundido.png:right: 1%| Yo no tengo fuerzas para nada. Si nos atacan, me entrego." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Mira:Remove||Kael:../images/Perfil_Personajes/Kael_Gritando.png:left: 1%| ¡NO DIGÁIS ESO! TENÉIS QUE…" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Confundido.png:left: 1%| Ni de coña... no tengo fuerzas. Me dejo matar." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Zack:REMOVE||Mira:../images/Perfil_Personajes/Mira_Asustado.png:right: 1%| Lo mejor será que descansemos un rato antes de seguir. Relajaos, parece que no vienen robots. Recuperemos las fuerzas." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Kael:REMOVE| |Mira:REMOVE| |Zack:REMOVE| El equipo descansa en las sombras del laboratorio hasta que recuperan el aliento." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Hablando.png:left: 1%| Suficiente descanso. Abramos esto ya." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Pensando.png:right: 1%| Puffff... venga, va." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| |Mira:REMOVE| Abren la última puerta y se adentran en el corazón del complejo." 
        }
    ],
    "opciones": [
        {
            "texto": "▶",
            "tipo": "flecha",
            "siguiente": "Dialogo_11",
            "etiqueta": "Avanzar...",
            "titulo": "Zona Segura",
            "descripcion": "Tras recuperaros, estáis listos para continuar.",
            "log": "Elegiste la ruta de ventilación, lo que os dejó debilitados por el gas."
        }
    ]
    },
    "Dialogo_22": {
    "titulo": "El Trágico Destino de Mira",
    "fondo": "../images/Acto_1/Dialogo_22/1.png",
    "posicionTexto": "pos-centro",
    "personajes": [
        { 
            "id": "Zack", 
            "src": "../images/Perfil_Personajes/Zack_Gritando.png", 
            "pos": "left: 1%;" 
        }
    ],
    "secuenciaDialogo": [
        { 
            "quien": "Narrador", 
            "texto": "{PLAYER} decide confiar en Mira." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "¡MIRA HAZLO, CONFIAMOS EN TI!" 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Gritando.png:right: 1%| ¡VOY VOY VOY!" 
        },
        { 
            "quien": "Narrador", 
            "texto": "|FONDO:../images/Acto_1/Dialogo_22/2.png| Mira consigue hackear las máquinas, pero la operación revela su posición actual a la IA del complejo." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| |Mira:REMOVE| |FONDO:../images/Acto_1/Dialogo_22/3.png| Los robots la localizan de inmediato. Antes de poder ponerse a salvo, Mira cae herida por el fuego enemigo." 
        },
        { 
            "quien": "Mira", 
            "texto": "|Mira:../images/Perfil_Personajes/Mira_Llorando.png:right: 1%| ¡AY AY AY!" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Asustado.png:left: 1%| Me cago en todo, la han dado de lleno... ¡Tenemos que irnos!" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Asustado.png:left: 1%; transform: translateX(20%)| ¡Mierda, corre! ¡Corre y buscamos la forma de curarla!" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Enfadado.png:left: 1%| La cargo yo. ¡Cubre delante!" 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| |Kael:REMOVE| |Mira:REMOVE| |FONDO:../images/Acto_1/Dialogo_22/4.png| Kael corre con Mira herida a su espalda mientras {PLAYER} los cubre. Logran poner distancia con los robots y llegan a la puerta." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Gritando.png:left: 1%| |FONDO:../images/Acto_1/Dialogo_22/5.png| Listo... Mira, por favor, ayúdanos a entrar. Seguro que dentro hay algo." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "…" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Confundido.png:left: 1%| ¿Mira…?" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Llorando.png:right: 1%| ...Z-Zack..." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Zack:REMOVE| |Kael:REMOVE| |FONDO:../images/Acto_1/Dialogo_22/6.png| … Mira ha muerto por las heridas …" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Llorando.png:left: 1%| ¿Mi… Mi… Mira?" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Llorando.png:right: 1%| No… no puede ser… No está muerta, está… Mira, despierta, no es gracioso. Por favor, despierta..." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "Kael… no va a…" 
        },
        { 
            "quien": "Kael", 
            "texto": "¡NO NO NOOO! Está bien, ya despertará. Ayúdame a abrir la puerta, ¡necesita algo urgente!" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "No… no puedo hacer nada… los robots vienen…" 
        },
        { 
            "quien": "Kael", 
            "texto": "No…" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Gritando y Llorando.png:right: 1%| |FONDO:../images/Acto_1/Dialogo_22/7.png| ¡NOOOOO! ¡MALDITOS DESGRACIADOS! ¡TODO POR CULPA DE ESTE PUTO LABORATORIO! ¡JODEEERRR AAAAAAAAHHHH!" 
        },
        { 
            "quien": "Narrador", 
            "texto": "Mientras grita, Kael golpea la puerta hasta que le sangran las manos. De repente..." 
        },
        { 
            "quien": "Narrador", 
            "texto": "|Kael:REMOVE| |FONDO:../images/Acto_1/Dialogo_22/8.png| La puerta se abre. En shock, entran con el cuerpo de Mira justo antes de que las patrullas los alcancen." 
        },
        { 
            "quien": "Kael", 
            "texto": "|Kael:../images/Perfil_Personajes/Kael_Llorando.png:right: 1%| |FONDO:../images/Acto_1/Dialogo_22/9.png| …" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Llorando.png:left: 1%| Kael… no quería que nada de esto…" 
        },
        { 
            "quien": "Kael", 
            "texto": "Iba a pasar. O era ella, o yo, o tú. Sabía que algo así pasaría pero…" 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "|Zack:../images/Perfil_Personajes/Zack_Gritando y Llorando.png:left: 1%| Lo siento, Mira. Siento haberte arrastrado a esto… perdóname, por favor." 
        },
        { 
            "quien": "Kael", 
            "texto": "Hay que seguir. No podemos parar justo ahora. Acabemos esto y démosle un entierro digno." 
        },
        { 
            "quien": "{PLAYER}", 
            "texto": "… Vale …" 
        },
        { 
            "quien": "Dr. Vane", 
            "texto": "|Dr.Vane:../images/Perfil_Personajes/Dr.Vane_Pilar_Camuflado.png:right: 1%| Mi más sentido pésame por vuestra amiga. Nadie merece un final así…" 
        },
        { 
            "quien": "Kael", 
            "texto": "|Zack:Remove||Kael:../images/Perfil_Personajes/Kael_Gritando y Llorando.png:left: 1%| ¿Quién coño ha dicho eso?" 
        },
        { 
            "quien": "Dr. Vane", 
            "texto": "|Dr.Vane:../images/Perfil_Personajes/Dr.Vane_Pilar_Hablando.png:right: 1%| Yo… Me llamo Vane..." 
        }
    ],
    "opciones": [
        {
            "texto": "Finalizar Acto",
            "tipo": "flecha",
            "siguiente": "Fin_Acto_1",
            "etiqueta": "El Laboratorio...",
            "titulo": "Encuentro",
            "descripcion": "Os encontráis con el Doctor Vane tras la pérdida de Mira.",
            "log": "Mira murió tras el hackeo, dejando a {PLAYER} y Kael ante el Doctor Vane."
        }
    ]
    },

    
    "Fin_Acto_1": {
        "titulo": "SISTEMA COMPROMETIDO",
        "fondo": "../images/Acto_1/Final/Background_System.png",
        "posicionTexto": "pos-centro",
        "personajes": [], 
        "descripcion": "Fin del primer acto.",
        "opciones": [
            {
                "texto": "Desconexión del sistema",
                "tipo": "boton-desconexion",
                "siguiente": "RESET",
                "titulo": "TERMINAL",
                "log": "Acto 1 finalizado correctamente."
            }
        ]
    }

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