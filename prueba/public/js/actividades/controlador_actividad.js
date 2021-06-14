'use strict';

let input_titulo = document.querySelector('#txt_titulo_actividad')
let input_actividad = document.querySelector('#txt_actividad');
const input_imagen = document.querySelector('#image_preview');
let userlocal = localStorage.getItem('usuario_en_sesion');
let boton_registrar = document.querySelector('#btn_registrar');

if (userlocal == null) {

    window.location.href = 'index.html';

}

let validar = () => {
    let error = false;

    if (input_titulo.value == '') {
        input_titulo.classList.add('error_input')
        error = true;
    } else {
        input_titulo.classList.remove('error_input')
    };

    if (input_actividad.value == '') {
        input_actividad.classList.add('error_input')
        error = true;
    } else {
        input_actividad.classList.remove('error_input')
    };

    if (input_imagen.value == '') {
        input_imagen.classList.add('error_input')
        error = true;
    } else {
        input_imagen.classList.remove('error_input')
    };

    return error;

};

let mostrarDatos = () => {

    if (validar() == false) {
        let titulo = input_titulo.value;
        let actividad = input_actividad.value;
        let foto = input_imagen.src;
        registrar_actividad(userlocal, titulo, actividad, foto);
    } else {

        Swal.fire({
            type: 'warning',
            title: 'Actividad No enviada con éxito',
            text: `Revise los Campos`
        })
    }



}

boton_registrar.addEventListener('click', mostrarDatos);