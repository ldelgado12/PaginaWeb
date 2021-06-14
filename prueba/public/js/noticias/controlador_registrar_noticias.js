'use strict';

const userid = localStorage.getItem('usuario_en_sesion');
const input_titulo = document.querySelector('#txt_titulo');
const input_descripcion = document.querySelector('#txt_descripcion');
const input_fecha = document.querySelector('#txt_fecha');
const boton_registrar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;

    if (input_titulo.value == '') {
        error = true;
        input_titulo.classList.add('error_input');
    } else {
        input_titulo.classList.remove('error_input');
    }

    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }

    if (input_fecha.value == '') {
        error = true;
        input_fecha.classList.add('error_input');
    } else {
        input_fecha.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let userloggeado = userid;
        let titulo = input_titulo.value;
        let descripcion = input_descripcion.value;
        let fecha = input_fecha.value;

        registrar_noticias(userloggeado, titulo, descripcion, fecha);
        

    } else {
        swal.fire({
            type: 'warning',
            title: 'La noticia no pudo ser registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

boton_registrar.addEventListener('click', obtener_datos);

