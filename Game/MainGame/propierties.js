const historia = {
    "inicio": {
        "titulo": "El Despertar",
        "descripcion": "El silencio es absoluto. Hola {PLAYER} |images/zack_serio.png| ¿Alguien me escucha?",
        "posicion": "pos-centro",
        "fondo": "../images/bunker.png",
        "personajes": [
            
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
}
};