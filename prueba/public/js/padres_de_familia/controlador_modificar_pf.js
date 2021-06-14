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
let input_cant_hijos= document.querySelector('#cantidad_hijos');
let input_foto= document.querySelector('#image_preview');

const boton_registrar = document.querySelector('#btn_registrar');

let userid = localStorage.getItem('usuario_en_sesion');

let usario_loggeado = [];
usario_loggeado = obtener_usuario_por_id(userid);


console.log(usario_loggeado);

let mostrar_datos = (pUsario_loggeado) =>{

    document.getElementById('txt_correo').value = usario_loggeado.correo_electronico;
    document.getElementById('txt_nombre').value = usario_loggeado.nombre;
    if (usario_loggeado.snombre == null) {
    document.getElementById('txt_snombre').value = "";
        
    } else {
    document.getElementById('txt_snombre').value = usario_loggeado.snombre;
        
    }
    document.getElementById('txt_papellido').value = usario_loggeado.papellido;
    document.getElementById('txt_sapellido').value = usario_loggeado.sapellido;
    document.getElementById('txt_id').value = usario_loggeado.identificacion;
    document.getElementById('txt_telefono').value = usario_loggeado.telefono;
    document.getElementById('txt_direccion').value = usario_loggeado.direccion;
    document.getElementById('cantidad_hijos').value = usario_loggeado.cantidad_hijos;
    document.getElementById('image_preview').src = usario_loggeado.foto;


    let opciones_tipo_id = document.querySelectorAll('#slt_tipo_id option');

    for(let i = 0; i < opciones_tipo_id.length; i++){
        if(opciones_tipo_id[i].value === usario_loggeado.tipo_id){
            opciones_tipo_id[i].selected = true;
        }
    }




    let opciones_provincia = document.querySelectorAll('#slt_provincias option')
    for(let i =0; i< opciones_provincia.length; i++){
        if(opciones_provincia[i].textContent== usario_loggeado.provincia){
            opciones_provincia[i].selected = true;
            llenar_cantones();
        }
    }

    let opciones_canton = document.querySelectorAll('#slt_cantones option')

    for(let i =0; i< opciones_canton.length; i++){
        if(opciones_canton[i].textContent== usario_loggeado.canton){
            opciones_canton[i].selected = true;
            llenar_distritos();
        }
    }

};


let validar = () => {
    let error = false;
    if (input_correo.value == ''){
        error = true;
        input_correo.style.border='1px solid red';
    }else{
    }
    if (input_nombre.value == ''){
        error = true;
        input_nombre.style.border='1px solid red';
    }else{
    }
    if (input_papellido.value == ''){
        error = true;
        input_papellido.style.border='1px solid red';
    }else{
    }
    if (input_sapellido.value == ''){
        error = true;
        input_sapellido.style.border='1px solid red';
    }else{
    }
    if (input_tipo_id.value == ''){
        error = true;
        input_tipo_id.style.border='1px solid red';
    }else{
    }
    if (input_id.value == ''){
        error = true;
        input_id.style.border='1px solid red';
    }else{
    }
    if (input_telefono.value == ''){
        error = true;
        input_telefono.style.border='1px solid red';
    }else{
    }
    if (input_provincias.value == ''){
        error = true;
        input_provincias.style.border='1px solid red';
    }else{
    }
    if (input_cantones.value == ''){
        error = true;
        input_cantones.style.border='1px solid red';
    }else{
    }
    if (input_distritos.value == ''){
        error = true;
        input_distritos.style.border='1px solid red';
    }else{
    }
    if (input_direccion.value == ''){
        error = true;
        input_direccion.style.border='1px solid red';
    }else{
    }
    if (input_cant_hijos.value == ''){
        error = true;
        input_cant_hijos.style.border='1px solid red';
    }else{
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
        let identificacion = input_id.value;
        let telefono = input_telefono.value;
        let provincias = input_provincias.options[slt_provincias.selectedIndex].textContent;
        let cantones = input_cantones.options[slt_cantones.selectedIndex].textContent;
        let distritos = input_distritos.options[slt_distritos.selectedIndex].textContent;
        let direccion= input_direccion.value;
        let foto = input_foto.src;
        let cant_hijos= input_cant_hijos.value;


        modificar_pf(correo, nombre,snombre, papellido, sapellido, identificacion, telefono, provincias, cantones, distritos, direccion, cant_hijos, foto, tipo_id, userid);

    }else{
        swal.fire({
            type: 'warning',
            title: 'El padre de familia no fue registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }
};


mostrar_datos();
boton_registrar.addEventListener('click', obtener_datos);
