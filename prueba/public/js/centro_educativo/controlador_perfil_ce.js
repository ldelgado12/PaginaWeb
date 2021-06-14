'use strict';

let userPerfilCentro = localStorage.getItem('usuario_en_sesion');
let usario_loggeado = [];

let mostrar_datos = (pUsuarioLoggeado) => {

    document.getElementById('imagen_perfil').src = usario_loggeado.foto;
    document.getElementById('txt_nombre_centro').value = usario_loggeado.nombre;
    document.getElementById('txt_alias').value = usario_loggeado.alias;
    document.getElementById('txt_cedjuridica').value = usario_loggeado.cedula_juridica;
    document.getElementById('txt_tipo_centro').value = usario_loggeado.tipo_centro;
    document.getElementById('txt_nivel').value = usario_loggeado.nivel_centro;
    document.getElementById('txt_nombrecomercial').value = usario_loggeado.nombre_comercial;
    document.getElementById('txt_provincia').value = usario_loggeado.provincia;
    document.getElementById('txt_canton').value = usario_loggeado.canton;
    document.getElementById('txt_distrito').value = usario_loggeado.distrito;
    document.getElementById('txt_direccion').value = usario_loggeado.direccion;
    document.getElementById('txt_fechafund').value = usario_loggeado.fecha_fundacion;
    document.getElementById('txt_refhistorica').value = usario_loggeado.referencia_historia;
    document.getElementById('txt_telefono').value = usario_loggeado.telefono;
    document.getElementById('txt_fax').value = usario_loggeado.fax;
    document.getElementById('txt_sitioweb').value = usario_loggeado.sitio_web;
    document.getElementById('txt_correo').value = usario_loggeado.correo_electronico;
    document.getElementById('txt_nombrecontacto').value = usario_loggeado.contacto_nombre;
    document.getElementById('txt_papellido').value = usario_loggeado.papellido;
    document.getElementById('txt_sapellido').value = usario_loggeado.sapellido;
    document.getElementById('txt_identificacion').value = usario_loggeado.identificacion;
    document.getElementById('txt_departamento').value = usario_loggeado.departamento;
    document.getElementById('txt_contacto').value = usario_loggeado.telefono_contacto;
    document.getElementById('txt_extcontacto').value = usario_loggeado.extension_contacto;
    document.getElementById('txt_correocontacto').value = usario_loggeado.correo_electronico_contacto;

};

if (userPerfilCentro != null) {
    usario_loggeado = obtener_usuario_por_id_centro(userPerfilCentro);
    mostrar_datos(usario_loggeado);
}else{
    swal({
        type: 'error',
        title: 'Error',
        text: 'El usuario no ha iniciado sesion'
    });
    window.location.href='index.html';
}





