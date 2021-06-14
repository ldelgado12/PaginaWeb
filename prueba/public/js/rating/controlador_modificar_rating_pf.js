'use strict';

const btn_actualizar = document.querySelector('#btn_registrar');
const input_texto = document.querySelector('#rating_text_area');
const input_rating = document.querySelector('ul#stars li');

let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); // Toma el parametro id del URL
    return id;
}

let rating_id = get_param("id");

let ratings = buscarrating_ratingid(rating_id);

let mostrar_datos_actividad = () => {

    input_texto.value = ratings[0]['comentario'];
    let rating_bd = ratings[0]['rating'];

    let star1 = document.querySelector('li[id="1"]');
    let star2 = document.querySelector('li[id="2"]');
    let star3 = document.querySelector('li[id="3"]');
    let star4 = document.querySelector('li[id="4"]');
    let star5 = document.querySelector('li[id="5"]');

    console.log(rating_bd);

    for(let i = 0; i <= rating_bd; i++){

        if(i == star1.getAttribute('id')){
            console.log(i);
            star1.setAttribute('class','star selected');
        }
        if(i == star2.getAttribute('id')){
            console.log(i);
            star2.setAttribute('class','star selected');
        }
        if(i == star3.getAttribute('id')){
            console.log(i);
            star3.setAttribute('class','star selected');
        }
        if(i == star4.getAttribute('id')){
            console.log(i);
            star4.setAttribute('class','star selected');
        }
        if(i == star5.getAttribute('id')){
            console.log(i);
            star5.setAttribute('class','star selected');
        }

    }

}

if (ratings) {
    mostrar_datos_actividad();
}

let obtener_datos_update = () => {
    let texto = input_texto.value;
    let rating = parseInt($('#stars li.selected').last().data('value'), 10);

    actualizar_evaluacion(rating_id, texto, rating);
}


btn_actualizar.addEventListener('click', obtener_datos_update);



