'use strict';

const input_utiles = document.querySelector('#txt_util');
const boton_registrar = document.querySelector('#btn_registrar_util');
const boton_lista = document.querySelector('#btn_registrar_lista');
const input_cantidad = document.querySelector('#slt_cantidad');
const input_ano = document.querySelector('#text_ano');
const input_nivel = document.querySelector('#slt_nivel');
const input_ciclo = document.querySelector('#slt_ciclo');
const input_nombre = document.querySelector('#txt_nombre');
const input_tipo = document.querySelector('#slt_tipo');


let utiles = '';

let validar = () => {
    let error = false;

    if(input_utiles.value == ''){
        input_utiles.classList.add('error_input')
        error = true;
    }else{
        input_utiles.classList.remove('error_input')
    }

    if(input_cantidad.value == ''){
        input_cantidad.classList.add('error_input')
        error = true;
    }else{
        input_cantidad.classList.remove('error_input')
    }
    /*
    if(input_ano.value == ''){
        input_ano.classList.add('error_input')
        error = true;
    }else{
        input_ano.classList.remove('error_input')
    }

    if(input_nivel.value == ''){
        input_nivel.classList.add('error_input')
        error = true;
    }else{
        input_nivel.classList.remove('error_input')
    }
    if(input_ciclo.value == ''){
        input_ciclo.classList.add('error_input')
        error = true;
    }else{
        input_ciclo.classList.remove('error_input')
    }

    if(input_nombre.value == ''){
        input_nombre.classList.add('error_input')
        error = true;
    }else{
        input_nombre.classList.remove('error_input')
    }
    
    if(input_tipo.value == ''){
        input_tipo.classList.add('error_input')
        error = true;
    }else{
        input_tipo.classList.remove('error_input')
    }
*/
    return error;

};

let mostrarDatos = () => {

    if (validar() == false) {
        
        let cantidad = input_cantidad.value;
        
        let utiles = input_utiles.value;
        /*let ano = input_ano.value;
        let ciclo = input_ciclo.value;
        let nombre = input_nombre.value;
        let tipo = input_tipo.value;*/
        registrar_utiles(utiles, /*nombre, ciclo, tipo, ano*/ cantidad);


    }else{
        
        swal.fire({
            type: 'warning',
            title: 'Los utiles no pudieron ser agregados',
            text: `Revise los Campos`    
        })
    }




};

boton_registrar.addEventListener('click', mostrarDatos);