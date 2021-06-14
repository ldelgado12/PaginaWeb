'use strict';

const userid = localStorage.getItem('usuario_en_sesion');
const input_nombre = document.querySelector('#txt_nombre');
const input_tipo = document.querySelector('#slt_tipo');
const input_ciclo = document.querySelector('#slt_ciclo');
const input_nivel = document.querySelector('#slt_nivel');
const input_anho = document.querySelector('#text_anho');
const input_nombre_util = document.querySelector('#slt_util_nombre');
const input_cantidad = document.querySelector('#slt_cantidad');
const boton_registrar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }

    if (input_tipo.value == '') {
        error = true;
        input_tipo.classList.add('error_input');
    } else {
        input_tipo.classList.remove('error_input');
    }

    if (input_ciclo.value == '') {
        error = true;
        input_ciclo.classList.add('error_input');
    } else {
        input_ciclo.classList.remove('error_input');
    }

    if (input_nivel.value == '') {
        error = true;
        input_nivel.classList.add('error_input');
    } else {
        input_nivel.classList.remove('error_input');
    }

    if (input_anho.value == '') {
        error = true;
        input_anho.classList.add('error_input');
    } else {
        input_anho.classList.remove('error_input');
    }

    if (input_nombre_util.value == '') {
        error = true;
        input_nombre_util.classList.add('error_input');
    } else {
        input_nombre_util.classList.remove('error_input');
    }

    if (input_cantidad.value == '') {
        error = true;
        input_cantidad.classList.add('error_input');
    } else {
        input_cantidad.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let userloggeado = userid;
        let nombre = input_nombre.value;
        let tipo = input_tipo.value;
        let ciclo = input_ciclo.value;
        let nivel = input_nivel.value;
        let anho = input_anho.value;
        let nombre_util = input_nombre_util.options[slt_util_nombre.selectedIndex].textContent;
        let cantidad = input_cantidad.value;

        registrar_utiles(userloggeado, nombre, tipo, ciclo, nivel, anho, nombre_util,cantidad);
        
    } else {
        swal.fire({
            type: 'warning',
            title: 'El útil no pudo ser registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

boton_registrar.addEventListener('click', obtener_datos);

