'use strict';

let userPadreFamilia = localStorage.getItem('usuario_en_sesion');
//console.log(userPadreFamilia);

let usuario_padrefamilia = [];

//Funcion para colocar la imagen de avatar en el div con el id de avatar_img
let mostrar_avatar = (pUsuarioLoggeado) => {

    if (pUsuarioLoggeado != null) {
        usuario_padrefamilia = obtener_usuario_por_id_avatar(pUsuarioLoggeado);
        $("#avatar_img").attr("src", usuario_padrefamilia.foto);
    } else {
        swal({
            type: 'error',
            title: 'Error',
            text: 'El usuario no ha iniciado sesion'
        });
        window.location.href = 'index.html';
    }
};


mostrar_avatar(userPadreFamilia);


