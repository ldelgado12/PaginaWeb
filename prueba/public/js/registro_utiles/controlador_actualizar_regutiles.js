'use strict';

const userid = localStorage.getItem('usuario_en_sesion');
const input_nombre = document.querySelector('#txt_nombre');
const input_tipo = document.querySelector('#slt_tipo');
const input_ciclo = document.querySelector('#slt_ciclo');
const input_nivel = document.querySelector('#slt_nivel');
const input_anho = document.querySelector('#text_anho');
const input_nombre_util = document.querySelector('#slt_util_nombre');
const input_cantidad = document.querySelector('#slt_cantidad');
const btn_actualizar = document.querySelector('#btn_actualizar');


let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); 
    return id;
}

let _id = get_param('id_util');

let util = buscar_util(_id);

let mostrar_datos = () =>{
    input_nombre.value = util[0]['nombre'];
    input_anho.value = util[0]['anho'];

    let opciones_tipo = document.querySelectorAll('#slt_tipo option');
    let opciones_ciclo = document.querySelectorAll('#slt_ciclo option');
    let opciones_nivel = document.querySelectorAll('#slt_nivel option');
    let opciones_anho = document.querySelectorAll('#slt_anho option');
    let opciones_util_nombre = document.querySelectorAll('#slt_util_nombre option');
    let opciones_cantidad = document.querySelectorAll('#slt_cantidad option');

    //const btn_actualizar = document.querySelector('#btn_actualizar');
    
    for(let i = 0; i < opciones_tipo.length; i++){
        if(opciones_tipo[i].textContent == util[0]['tipo']){
            opciones_tipo[i].selected = true;
        }
    }

    for(let i = 0; i < opciones_ciclo.length; i++){
        if(opciones_ciclo[i].textContent == util[0]['ciclo']){
            opciones_ciclo[i].selected = true;
        }
    }

    for(let i = 0; i < opciones_nivel.length; i++){
        if(opciones_nivel[i].textContent == util[0]['nivel']){
            opciones_nivel[i].selected = true;
        }
    }

    for(let i = 0; i < opciones_anho.length; i++){
        if(opciones_anho[i].textContent == util[0]['anho']){
            opciones_anho[i].selected = true;
        }
    }

    for(let i = 0; i < opciones_util_nombre.length; i++){
        if(opciones_util_nombre[i].textContent == util[0]['util_nombre']){
            opciones_util_nombre[i].selected = true;
        }
    }

    for(let i = 0; i < opciones_cantidad.length; i++){
        if(opciones_cantidad[i].textContent == util[0]['cantidad']){
            opciones_cantidad[i].selected = true;
        }
    }

};

if(util){
   mostrar_datos();

}

let obtener_datos = () =>{


    let nombre = input_nombre.value;
    let anho = input_anho.value;
    let cantidad = slt_cantidad.selectedOptions[0].textContent;
    let ciclo = slt_ciclo.selectedOptions[0].textContent;
    let nivel = slt_nivel.selectedOptions[0].textContent;
    let nombre_util = slt_util_nombre.selectedOptions[0].textContent;
    let tipo = slt_tipo.selectedOptions[0].textContent;
    

    actualizar_util(userid, nombre,tipo,ciclo,nivel,anho, nombre_util, cantidad, _id);

     
};

btn_actualizar.addEventListener('click', obtener_datos);