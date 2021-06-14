'use strict';

let userid = localStorage.getItem('usuario_en_sesion');
console.log(userid);

let usario_loggeado = [];

let mostrar_datos = (pUsuarioLoggeado) => {
    document.getElementById('avatar_img').src = usario_loggeado.foto;
    document.getElementById('prueba').src = usario_loggeado.foto;
    document.querySelector('#nombre').innerHTML = usario_loggeado.nombre;
    document.querySelector('#apellido').innerHTML = usario_loggeado.papellido;
    document.querySelector('#id').innerHTML = usario_loggeado.identificacion;
    document.querySelector('#correo').innerHTML = usario_loggeado.correo_electronico;

    document.querySelector('#distrito').innerHTML = usario_loggeado.distrito + ',';
    document.querySelector('#canton').innerHTML = usario_loggeado.canton+ ',';
    document.querySelector('#provincia').innerHTML = usario_loggeado.provincia;
    document.querySelector('#phone').innerHTML = usario_loggeado.telefono;


};


if (userid != null) {
    usario_loggeado = obtener_usuario_por_id(userid);
    mostrar_datos(usario_loggeado);
}else{
    swal({
        type: 'error',
        title: 'Error',
        text: 'El usuario no ha iniciado sesion'
    });
    window.location.href='index.html';
}





