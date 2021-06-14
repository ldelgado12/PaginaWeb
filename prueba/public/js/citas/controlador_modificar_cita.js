'use strict';

//const input_razon = document.querySelector('#razon_cita');
//const input_fecha = document.querySelector('#datepicker-13');
const btn_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); // Toma el parametro id del URL
    return id;
}

let cita_id = get_param("id");

let cita = buscarcita_citaid(cita_id);

let mostrar_datos_cita = () => {

    input_razon.value = cita[0]['razon'];

    let newdate = new Date(cita[0]['fecha']);
    let datedatabase = ('0' + (newdate.getMonth() + 1)).slice(-2) + '-'
        + ('0' + newdate.getDate()).slice(-2) + '-'
        + newdate.getFullYear();

    input_fecha.value = datedatabase;
    input_hora.value = cita[0]['hora'];

    localStorage.setItem('usuario_en_sesion', cita[0]['userid']);
    localStorage.setItem('centro_id', cita[0]['centroid']);
}

if (cita) {
    mostrar_datos_cita();
}

let obtener_datos_update = () =>{
    let userId = localStorage.getItem('usuario_en_sesion');
    let centro_id = localStorage.getItem('centro_id');
    let razon = input_razon.value;
    let fecha = input_fecha.value;
    let hora = input_hora.value;

    actualizar_cita(cita_id,userId,centro_id,razon,fecha,hora);
}


btn_actualizar.addEventListener('click',obtener_datos_update);



