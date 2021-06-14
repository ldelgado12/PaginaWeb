'use strict';

let input_correo = document.querySelector('#txt_correo');
let input_nombre = document.querySelector('#txt_nombre');
let input_snombre = document.querySelector('#txt_snombre');
let input_papellido = document.querySelector('#txt_papellido');
let input_sapellido = document.querySelector('#txt_sapellido');
let input_tipo_id = document.querySelector('#slt_tipo_id');
let input_id = document.querySelector('#txt_id');
let input_telefono= document.querySelector('#txt_telefono');
let input_provincias= document.querySelector('#slt_provincias');
let input_cantones= document.querySelector('#slt_cantones');
let input_distritos= document.querySelector('#slt_distritos');
let input_direccion= document.querySelector('#txt_direccion');
let input_cant_hijos= document.querySelector('#num_cant_hijos');
let input_foto= document.querySelector('#image_preview')

const boton_registrar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;
    if (input_correo.value === ''){
        error = true;
        input_correo.style.border='1px solid red';
    }else{
        input_correo.style.border = '1px solid black';
    }
    if (input_nombre.value === ''){
        error = true;
        input_nombre.style.border='1px solid red';
    }else{
        input_nombre.style.border = '1px solid black';
    }
    if (input_papellido.value === ''){
        error = true;
        input_papellido.style.border='1px solid red';
    }else{
        input_papellido.style.border = '1px solid black';
    }
    if (input_sapellido.value === ''){
        error = true;
        input_sapellido.style.border='1px solid red';
    }else{
        input_sapellido.style.border = '1px solid black';
    }
    if (input_tipo_id.value === ''){
        error = true;
        input_tipo_id.style.border='1px solid red';
    }else{
        input_tipo_id.style.border = '1px solid black';
    }
    if (input_id.value === ''){
        error = true;
        input_id.style.border='1px solid red';
    }else{
        input_id.style.border = '1px solid black';
    }
    if (input_telefono.value === ''){
        error = true;
        input_telefono.style.border='1px solid red';
    }else{
        input_telefono.style.border = '1px solid black';
    }
    if (input_provincias.value === ''){
        error = true;
        input_provincias.style.border='1px solid red';
    }else{
        input_provincias.style.border = '1px solid black';
    }
    if (input_cantones.value === ''){
        error = true;
        input_cantones.style.border='1px solid red';
    }else{
        input_cantones.style.border = '1px solid black';
    }
    if (input_distritos.value === ''){
        error = true;
        input_distritos.style.border='1px solid red';
    }else{
        input_distritos.style.border = '1px solid black';
    }
    if (input_direccion.value === ''){
        error = true;
        input_direccion.style.border='1px solid red';
    }else{
        input_direccion.style.border = '1px solid black';
    }
    if (input_cant_hijos.value === ''){
        error = true;
        input_cant_hijos.style.border='1px solid red';
    }else{
        input_cant_hijos.style.border = '1px solid black';
    }
    return error;
};
let obtener_datos = () => {


    if (validar() == false){
        let correo = input_correo.value;
        let nombre = input_nombre.value;
        let snombre = input_snombre.value;
        let papellido = input_papellido.value;
        let sapellido = input_sapellido.value;
        let tipo_id = input_tipo_id.options[slt_tipo_id.selectedIndex].value;
        let id = input_id.value;
        let telefono = input_telefono.value;
        let provincias = input_provincias.options[slt_provincias.selectedIndex].textContent;
        let cantones = input_cantones.options[slt_cantones.selectedIndex].textContent;
        let distritos = input_distritos.options[slt_distritos.selectedIndex].textContent;
        let direccion= input_direccion.value;
        let foto = input_foto.src;
        let cant_hijos= input_cant_hijos.value;

        registrar_pf(correo, nombre,snombre, papellido, sapellido, id, telefono, provincias, cantones, distritos, direccion, cant_hijos, foto, tipo_id);

    }else{
        swal.fire({
            type: 'warning',
            title: 'El padre de familia no fue registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }
};

boton_registrar.addEventListener('click', obtener_datos);
