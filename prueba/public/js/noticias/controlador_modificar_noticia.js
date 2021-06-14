'use strict';

const btn_actualizar = document.querySelector('#btn_registrar');
const input_titulo = document.querySelector('#txt_titulo');
const input_descripcion = document.querySelector('#txt_descripcion');
const input_fecha = document.querySelector('#txt_fecha');

let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); // Toma el parametro id del URL
    return id;
}

let noticia_id = get_param("id");

let noticia = buscarnoticia_noticiaid(noticia_id);

let mostar_datos_noticia = () => {

    input_titulo.value = noticia[0]['titulo'];

    let newdate = new Date(noticia[0]['fecha']);
    newdate.setHours(newdate.getHours() + 6);
    let datedatabase = newdate.getFullYear() + '-'
    + ('0' + (newdate.getMonth() + 1)).slice(-2) + '-'
    + ('0' + newdate.getDate()).slice(-2);

    input_fecha.value = datedatabase;
    input_descripcion.value = noticia[0]['descripcion'];
}

if (noticia) {
    mostar_datos_noticia();
}

let obtener_datos_update = () => {
    let titulo = input_titulo.value;
    let descripcion = input_descripcion.value;
    let fecha = input_fecha.value;

    actualizar_noticia(noticia_id, titulo,descripcion, fecha);
}


btn_actualizar.addEventListener('click', obtener_datos_update);



