'use strict';


const input_fecha = document.querySelector('#fecha');
let userlocal = localStorage.getItem('usuario_en_sesion');
const input_rating = document.querySelector('#stars');
const boton_registrar = document.querySelector('#btn_registrar');



let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); // Toma el parametro id del URL
    console.log(id);
    return id;
}

let rating_id = get_param("id");

let rating = traer_rating(rating_id);
console.log(rating);

let mostar_datos_rating = () => {

 //   input_nombre.value = rating.nombre;
   // input_fecha.value = rating.fecha_registro;
    document.querySelector('#h1').innerHTML = rating.nombre;
    console.log(rating.foto);
    document.getElementById('imagen_perfil').src = rating.foto;
    //document.querySelector('#stars').value = rating.evaluacion_mep;


}

mostar_datos_rating();


let validar = () => {
    let error = false;

    let value_rating = parseInt($('#stars li.selected').last().data('value'), 10);

    if (isNaN(value_rating)) {
        input_rating.classList.add('error_input')
        error = true;
    } else {
        input_rating.classList.remove('error_input')
    };

    return error;

};



let mostrarDatos = () => {

    if (validar() == false) {
        let userid = rating_id;
        let rating = parseInt($('#stars li.selected').last().data('value'), 10);
        console.log(userid);
        console.log(rating);

        agregar_ranking(userid, rating);
    } else {
        Swal.fire({
            type: 'warning',
            title: 'La evaluación no pudo ser registrada',
            text: `Por favor revise los campos resaltados`
        })
    }



}

boton_registrar.addEventListener('click', mostrarDatos);


if(userlocal==null){
    window.location.href='index.html';
}

/*let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }
    return error;
}

let obtener_datos = () => {

    if (validar() == false) {
    let nombre = input_nombre.value;
    
    modificar_etiqueta(etiqueta_id,nombre);

} else {
    swal.fire({
        type: 'warning',
        title: 'La etiqueta no fue registrada',
        text: 'Por favor revise los campos resaltados'
    });
}

};

boton_enviar.addEventListener('click', obtener_datos);
*/