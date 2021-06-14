'use strict';

const input_pregunta = document.querySelector('#txt_pregunta');
const input_respuesta = document.querySelector('#txt_respuesta');
const boton_registrar = document.querySelector('#btn_registrar');

let pregunta = '';

let validar = () => {
    let error = false;

    if(input_pregunta.value == ''){
        input_pregunta.classList.add('error_input')
        error = true;
    }else{
        input_pregunta.classList.remove('error_input')
    };

    if(input_respuesta.value == ''){
        input_respuesta.classList.add('error_input')
        error = true;
    }else{
        input_respuesta.classList.remove('error_input')
    };

    return error;

};

let mostrarDatos = () => {

    if (validar() == false) {
        let pregunta = input_pregunta.value;
        let respuesta = input_respuesta.value;
        registrar_pregunta(pregunta, respuesta);


    }else{
        
        Swal.fire({
            type: 'warning',
            title: 'La pregunta No enviada con éxito',
            text: `Revise los Campos`    
        })
    }

    

}

boton_registrar.addEventListener('click', mostrarDatos);