'use strict';

const btn_actualizar = document.querySelector('#btn_registrar');
const input_titulo = document.querySelector('#txt_titulo_actividad');
const input_descripcion = document.querySelector('#txt_actividad');
const input_foto = document.querySelector('#image_preview');

let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); // Toma el parametro id del URL
    return id;
}

let actividad_id = get_param("id");

let actividad = buscaractividad_actividadid(actividad_id);

let mostrar_datos_actividad = () => {

    input_titulo.value = actividad[0]['titulo'];
    input_descripcion.value = actividad[0]['actividad'];
    input_foto.setAttribute('src', actividad[0]['foto']);
}

if (actividad) {
    mostrar_datos_actividad();
}

let obtener_datos_update = () => {
    let titulo = input_titulo.value;
    let descripcion = input_descripcion.value;
    let foto = input_foto.src;

    actualizar_actividad(actividad_id, titulo, descripcion, foto);
}


btn_actualizar.addEventListener('click', obtener_datos_update);



