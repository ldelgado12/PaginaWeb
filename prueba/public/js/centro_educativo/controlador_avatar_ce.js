'use strict';

let userCentroEducativo = localStorage.getItem('usuario_en_sesion');
let usuario_loggeado_avatar = [];
let opt_cambiar_clave = document.querySelector('#cambiar_clave');

//Funcion para colocar la imagen de avatar en el div con el id de avatar_img
let mostrar_avatar = (pUsuarioLoggeado) =>{
    $("#avatar_img").attr("src",usuario_loggeado_avatar.foto);
};

if (userCentroEducativo != null) {
    usuario_loggeado_avatar = obtener_usuario_por_id_centro(userCentroEducativo);
    mostrar_avatar(usuario_loggeado_avatar);
}else{
    swal({
        type: 'error',
        title: 'Error',
        text: 'El usuario no ha iniciado sesion'
    });
    window.location.href='index.html';
}

opt_cambiar_clave.addEventListener('click', function () {
    window.location.href=`cambiar_clave.html?id=${userAdminLoggeado}`;
});




