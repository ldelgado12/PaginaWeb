'use strict';

const star1 = document.querySelector('#star1');
const star2 = document.querySelector('#star2');
const star3 = document.querySelector('#star3');
const star4 = document.querySelector('#star4');
const star5 = document.querySelector('#star5');

let validar = () => {
    let error = false;
    let eval = document.querySelector('#eval input[type=radio]:checked');
   

    if (star1.value == '') {
        error = true;
        star1.classList.add('error_input');
    } else {
        star1.classList.remove('error_input');
    }


    if (star2.value == '') {
        error = true;
        star2.classList.add('error_input');
    } else {
        star2.classList.remove('error_input');
    }

    if (star3.value == '') {
        error = true;
        star3.classList.add('error_input');
    } else {
        star3.classList.remove('error_input');
    }

    
    if (star4.value == '') {
        error = true;
        star4.classList.add('error_input');
    } else {
        star4.classList.remove('error_input');
    }

    if (star5.value == '') {
        error = true;
        star5.classList.add('error_input');
    } else {
        star5.classList.remove('error_input');
    }

    if (eval == null) {
        error = true;
        eval.classList.add('error_input');
    } else {
        eval.classList.remove('error_input');
    }


    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let star1 = input_star1.value;
        let star2 = input_star2.value;
        let star3 = input_star3.value;
        let star4 = input_star4.value;
        let star5 = input_star5.value;



        registrar_comentario(star1, star2, star3, star4, star5);
       
        

    } else {
        swal.fire({
            type: 'warning',
            title: 'La evaluacion no a sido registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};




boton_enviar.addEventListener('click', obtener_datos);