'use strict';

let userid = localStorage.getItem('centro_id');
console.log(userid);

let usario_loggeado = [];

let mostrar_datos = (pUsuarioLoggeado) => {

    document.getElementById('imagen_perfil').src = usario_loggeado.foto;    
    document.querySelector('#txt_nombre_centro').innerHTML = usario_loggeado.nombre;
    document.querySelector('#txt_correo').innerHTML = usario_loggeado.correo_electronico;
    document.querySelector('#txt_telefono').innerHTML = usario_loggeado.telefono;
    document.querySelector('#txt_sitioweb').innerHTML = usario_loggeado.sitio_web;
    document.querySelector('#txt_provincia').innerHTML = usario_loggeado.provincia;
    document.querySelector('#txt_canton').innerHTML = usario_loggeado.canton;
    document.querySelector('#txt_distrito').innerHTML = usario_loggeado.distrito;
    document.querySelector('#txt_direccion').innerHTML = usario_loggeado.direccion;
    document.querySelector('#txt_tipo_centro').innerHTML = usario_loggeado.tipo_centro;
    document.querySelector('#txt_nivel').innerHTML = usario_loggeado.nivel_centro;
    document.querySelector('#txt_refhistorica').innerHTML = usario_loggeado.referencia_historia;
    document.querySelector('#txt_fax').innerHTML = usario_loggeado.fax;

};

if (userid != null) {
    usario_loggeado = obtener_usuario_por_id_centro(userid);
    mostrar_datos(usario_loggeado);
}else{
    swal({
        type: 'error',
        title: 'Error',
        text: 'El usuario no ha iniciado sesion'
    });
    
}





