'use strict';

let pregunta = listar_pregunta();
const tabla = document.querySelector('#tbl_pregunta tbody');

let mostrar_preguntas = () => {
    let pregunta = listar_pregunta();

    for(let i = 0; i < pregunta.length; i++){

        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = pregunta[i] ['pregunta'];
        fila.insertCell().innerHTML = pregunta[i] ['respuesta'];

        let celda_configuracion = fila.insertCell();

        // Creación del botón de editar
        let boton_editar = document.createElement('a');
        boton_editar.textContent = 'Editar';
        boton_editar.classList.add('eliminar');
        boton_editar.href = `actualizar_pregunta.html?id_pregunta=${pregunta[i]['_id']}`;


        //Creación del botón de eliminar
        let boton_eliminar = document.createElement('a');
        boton_eliminar.textContent = 'Eliminar';
        boton_eliminar.classList.add('eliminar');
        boton_eliminar.dataset.id_pregunta = pregunta[i]['_id'];
        boton_eliminar.href = '#';
        
        boton_eliminar.addEventListener('click', function(){
            
            eliminar(this.dataset.id_pregunta);
            pregunta = listar_pregunta();
            mostrar_preguntas();

        });

        celda_configuracion.appendChild(boton_editar);

        celda_configuracion.appendChild(boton_eliminar);

    };

};

mostrar_preguntas();