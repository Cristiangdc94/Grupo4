const historia = {
    "inicio": {
        "titulo": "El Despertar",
        "descripcion": "El silencio es absoluto. |images/zack_serio.png| ¿Alguien me escucha?",
        "posicion": "pos-centro",
        "fondo": "../images/bunker.png",
        "personaje": "images/zack_base.png",
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
    "sala_control": {
        "titulo": "XTER",
        "descripcion": "La IA ha despertado. |images/xter_feliz.png| Bienvenid@, Francisco.",
        "posicion": "pos-top",
        "fondo": "images/fondo_sala.jpg",
        "personaje": "images/zack_base.png",
        "opciones": [
            {
                "texto": "Hablar",
                "siguiente": "inicio",
                "etiqueta": "DIÁLOGO",
                "titulo": "Comunicación",
                "descripcion": "XTER responde con una voz metálica.",
                "log": "Iniciaste diálogo."
            }
        ]
    }
};