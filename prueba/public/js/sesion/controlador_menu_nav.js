'use strict';

const usuario_en_sesion = obtener_usuario_por_id(localStorage.usuario_en_sesion);
let menu_usuario = [];

if (usuario_en_sesion == null || usuario_en_sesion === ''){
    window.location.href = 'iniciar_sesion.html';
}else{
    switch (usuario_en_sesion['tipo_usuario']) {
        case 'AD':
            menu_usuario = admin;
            break;
        case 'PD':
            menu_usuario = padre_familia;
            break;
        case 'CE':
            menu_usuario = centro_educativo;
            break;
    }
};

let cargar_nav_con_menu = () =>{
    let header = document.querySelector('#header_dinamico');

    let nav_menu = document.createElement('nav');
    let icono_menu = document.createElement('i');
    let text_menu = document.createElement('i');
    let lista_menu = document.createElement('ul');

    icono_menu.classList.add('fas');
    icono_menu.classList.add('fa-bars');
    text_menu.setAttribute('href', '#');

    for (let i =0; i< menu_usuario.length; i++){

    }



};
