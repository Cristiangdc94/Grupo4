const historia = {
    "inicio": {
        "titulo": "El Despertar",
        "posicion": "pos-centro",
        "fondo": "../images/bunker.png",
        "personajes": [
            
        ],
        "secuenciaDialogo" : [
        {
            "quien": "Zack",
            "expresion": "zack:../images/zack_preocupado.png", 
            "texto": "Hola {PLAYER}, ¿cómo has llegado hasta aquí?"
        }
        ],
        "opciones": [
            {
                "texto": "▶",
                "tipo": "flecha",
                "siguiente": "zona_paso",
                "etiqueta": "PROTOCOLO",
                "titulo": "Saliendo del Búnker",
                "descripcion": "Logras forzar la puerta... |images/zack_sorprendido.png| ¡Espera, alguien está ahí!",
                "log": "Entrada forzada."
            }
        ]
    },
    "zona_paso": {
        "titulo": "Zona de Paso",
        "descripcion": "Observas los pasillos, el aire es denso.",
        "posicion": "pos-top",
        "fondo": "../images/bunker.png",
        "personaje": "images/zack_base.png",
        "opciones": [
            {
                "texto": "Derecha",
                "siguiente": "sala_control",
                "etiqueta": "DECISIÓN",
                "titulo": "Pasillo Derecho",
                "descripcion": "Decides ir por el ala este. |images/zack_serio.png| Tengo un mal presentimiento.",
                "log": "Elegiste el ala este."
            },
            {
                "texto": "Izquierda",
                "siguiente": "sala_control",
                "etiqueta": "DECISIÓN",
                "titulo": "Pasillo Izquierdo",
                "descripcion": "Decides ir por el ala oeste.",
                "log": "Elegiste el ala oeste."
            }
        ]
    },
    "nodo_ejemplo": {
    "titulo": "Sala de Control",
    "fondo": "../images/fondo_sala.png",
    "personajes": [
        { "id": "zack", "src": "../images/zack_base.png", "pos": "left: 10%;" },
        { "id": "xter", "src": "../images/xter_serio.png", "pos": "left: 60%;" }
    ],
    "descripcion": "El silencio es absoluto. |zack:../images/zack_preocupado.png| Necesito salir de aquí. |xter:../images/xter_feliz.png| Vaya...",
    "opciones": []
},
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
};