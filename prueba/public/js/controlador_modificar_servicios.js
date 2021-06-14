'use strict';


const input_titulo = document.querySelector('#txt_titulo_actividad');
const input_descripcion = document.querySelector('#txt_actividad');

const boton_enviar = document.querySelector('#btn_registrar');
let userlocal = localStorage.getItem('usuario_en_sesion');



let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); // Toma el parametro id del URL
    console.log(id);
    return id;
}

let servicio_id = get_param("id");

let servicio = buscar_servicio(servicio_id);

let mostar_datos_servicio = () => {

    input_titulo.value = servicio.titulo;
    input_descripcion.value = servicio.descripcion;

}

if (servicio) {
    mostar_datos_servicio();
}



if(userlocal==null){
    window.location.href='index.html';
}

let validar = () => {
    let error = false;

    if (input_titulo.value == '') {
        error = true;
        input_titulo.classList.add('error_input');
    } else {
        input_titulo.classList.remove('error_input');
    }

    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }

    return error;
}

let obtener_datos = () => {

    if (validar() == false) {
    let titulo = input_titulo.value;
    let descripcion = input_descripcion.value;
    
    actualizar_servicio(servicio_id,titulo,descripcion );

} else {
    swal.fire({
        type: 'warning',
        title: 'El servicio no fue registrado',
        text: 'Por favor revise los campos resaltados'
    });
}

};

boton_enviar.addEventListener('click', obtener_datos);
