'use strict';

const input_nombre = document.querySelector('#txt_nombre');
const boton_enviar = document.querySelector('#btn_registrar');
let userlocal = localStorage.getItem('usuario_en_sesion');

if(userlocal==null){
    window.location.href='index.html';
}

let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }
    return error;
}

let obtener_datos = () => {

    if (validar() == false) {
    let nombre = input_nombre.value;
    
    registrar_etiqueta(userlocal,nombre);

} else {
    swal.fire({
        type: 'warning',
        title: 'La etiqueta no fue registrada',
        text: 'Por favor revise los campos resaltados'
    });
}

};

boton_enviar.addEventListener('click', obtener_datos);
