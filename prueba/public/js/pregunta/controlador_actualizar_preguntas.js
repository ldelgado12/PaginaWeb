'use strict';

const input_pregunta = document.querySelector('#txt_pregunta');
const input_respuesta = document.querySelector('#txt_respuesta');
const boton_actualizar = document.querySelector('#btn_actualizar');


let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);//Toma el parámetro id_inmueble del url y retorna el valor
    return id;
};


let _id = get_param('id_pregunta');

let pregunta = buscar_pregunta(_id); //se levantan los datos de ese inmueble bajo demanda usando su id

let mostrar_datos = () =>{
    input_pregunta.value = pregunta[0]['pregunta'];
    input_respuesta.value = pregunta[0]['respuesta'];

};

if(pregunta){
    mostrar_datos();
}

let obtener_datos = () =>{
    let pregunta = input_pregunta.value;
    let respuesta = input_respuesta.value;

    Swal.fire({
        title: 'Está seguro que desea actualizar la pregunta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
      }).then((result) => {
        if (result.value) {
            actualizar_pregunta(pregunta, respuesta, _id);
        }
      })
     
    
};

boton_actualizar.addEventListener('click', obtener_datos);