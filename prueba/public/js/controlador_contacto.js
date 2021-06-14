
'use strict';  /* Indicarle al navegador que cuenta interprete Javascript, que exige lo mismo que otros lenguajes */

// let nombre = 'Francisco';  // la palabra let se utiliza para declarar variables
// dependiendo de su ambito pueden ser locales o globales al mismo archivo de js.

//const pi = Math.pi; // Cuando quiere declarar una constante, solamente para valores que no deben cambiar.

const input_nombre = document.querySelector('#txt_nombre');
const input_correo = document.querySelector('#txt_correo');
const fieldset_sexo = document.querySelector('#fieldset_sexo');
const input_comentario = document.querySelector('#txt_comentario');
const boton_enviar = document.querySelector('#btn_enviar');

let nombre = '';
let correo = '';
let sexo = '';
let comentario = '';

let validar = () => {

    const btn_sexo = document.querySelector('input[name=rbt_sexo]:checked');
    let error = false;
    
    if (input_nombre.value == '') {
        input_nombre.classList.add('error_input');
        error = true;
    } else {
        input_nombre.classList.remove('error_input');
    }

    if (input_correo.value == '') {
        input_correo.classList.add('error_input');
        error = true;
    } else {
        input_correo.classList.remove('error_input');
    }

    if (btn_sexo == null) {
        fieldset_sexo.classList.add('error_input');
        error = true;
    } else {
        fieldset_sexo.classList.remove('error_input');
    }

    if (input_comentario.value == '') {
        input_comentario.classList.add('error_input');
        error = true;
    } else {
        input_comentario.classList.remove('error_input');
    }
    return error;
};

// Se tiene que colocar las funciones utilizables en otras funciones arriba de la misma.

let mostrarDatos = () => {

    if (validar()) {
        Swal.fire({
            type: 'warning',
            title: 'Validacion incorrecta',
            text: 'Por favor revisar los campos en rojo'
        })
    } else {
        nombre = input_nombre.value;
        correo = input_correo.value;
        sexo = document.querySelector('input[name=rbt_sexo]:checked').value;
        comentario = input_comentario.value;

        Swal.fire({
            type: 'success',
            title: 'Mensaje enviado',
            text: `Saludos ${nombre}, usted es ${sexo} su comentario fue: "${comentario}" le estaremos respondiendo pronto al correo: ${correo}`
        })
    }

}; // funciones de flecha


boton_enviar.addEventListener('click', mostrarDatos);















