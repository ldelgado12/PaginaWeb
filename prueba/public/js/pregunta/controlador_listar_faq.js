'use strict';

let pregunta = listar_pregunta();
const tabla = document.querySelector('#tbl_pregunta tbody');

let mostrar_preguntas = () => {
    let pregunta = listar_pregunta();

    for(let i = 0; i < pregunta.length; i++){

        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = pregunta[i] ['pregunta'];
        fila.insertCell().innerHTML = pregunta[i] ['respuesta'];

    };

};

mostrar_preguntas();