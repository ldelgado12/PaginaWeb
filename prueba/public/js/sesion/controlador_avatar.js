'use strict';

let idUsuario = localStorage.getItem('usuario_en_sesion');
//console.log(userPadreFamilia);

let usuarioAv = [];

//Funcion para colocar la imagen de avatar en el div con el id de avatar_img
let mostrar_avatar = (pUsuarioLoggeado) => {

    if (pUsuarioLoggeado != null) {
        usuarioAv= obtener_usuario_por_id(pUsuarioLoggeado);

        obtener_usuario_por_id

        $("#avatar_img").attr("src", usuarioAv.foto);
    } else {
        swal({
            type: 'error',
            title: 'Error',
            text: 'El usuario no ha iniciado sesion'
        });
        window.location.href = 'index.html';
    }
};


mostrar_avatar(idUsuario);


