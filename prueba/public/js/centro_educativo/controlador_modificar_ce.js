'use strict';

const input_nombre = document.querySelector('#txt_nombre_centro');
const input_alias = document.querySelector('#txt_alias');
const input_cedulaj = document.querySelector('#txt_cedjuridica');
const slt_tipo_centro = document.querySelector('#txt_tipo_centro');
const slt_nivel_centro = document.querySelector('#txt_nivel');
const input_nombre_comercial = document.querySelector('#txt_nombrecomercial');
const slt_provincias = document.querySelector('#slt_provincias');
const slt_cantones = document.querySelector('#slt_cantones');
const slt_distritos = document.querySelector('#slt_distritos');
const input_direccion = document.querySelector('#txt_direccion');
const input_fecha = document.querySelector('#txt_fechafund');
const input_referencia = document.querySelector('#txt_refhistorica');
const input_telefono = document.querySelector('#txt_telefono');
const input_fax = document.querySelector('#txt_fax');
const input_web = document.querySelector('#txt_sitioweb');
const input_face = document.querySelector('#facebook');
const input_youtube = document.querySelector('#youtube');
const input_insta = document.querySelector('#instagram');
const input_twitter = document.querySelector('#twitter');

const input_correo = document.querySelector('#txt_correo');
const input_contacto_nombre = document.querySelector('#txt_nombrecontacto');
const input_contacto_papellido = document.querySelector('#txt_papellido');
const input_contacto_sapellido = document.querySelector('#txt_sapellido');
const input_contacto_id = document.querySelector('#txt_identificacion');
const input_contacto_departamento = document.querySelector('#txt_departamento');
const input_contacto_telefono = document.querySelector('#txt_contacto');
const input_contacto_extension = document.querySelector('#txt_extcontacto');
const input_contacto_correo = document.querySelector('#txt_correocontacto');
const boton_modificar = document.querySelector('#btn_modificar');
const input_imagen = document.querySelector('#image_preview');




let validar = () => {

    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }

    if (input_alias.value == '') {
        error = true;
        input_alias.classList.add('error_input');
    } else {
        input_alias.classList.remove('error_input');
    }

    if (input_cedulaj.value == '') {
        error = true;
        input_cedulaj.classList.add('error_input');
    } else {
        input_cedulaj.classList.remove('error_input');
    }

    if (slt_tipo_centro.value == '') {
        error = true;
        slt_tipo_centro.classList.add('error_input');
    } else {
        slt_tipo_centro.classList.remove('error_input');
    }

    if (slt_nivel_centro.value == '') {
        error = true;
        slt_nivel_centro.classList.add('error_input');
    } else {
        slt_nivel_centro.classList.remove('error_input');
    }

    if (input_nombre_comercial.value == '') {
        error = true;
        input_nombre_comercial.classList.add('error_input');
    } else {
        input_nombre_comercial.classList.remove('error_input');
    }

    if (slt_provincias.value == '') {
        error = true;
        slt_provincias.classList.add('error_input');
    } else {
        slt_provincias.classList.remove('error_input');
    }
    
    if (slt_cantones.value == '') {
        error = true;
        slt_cantones.classList.add('error_input');
    } else {
        slt_cantones.classList.remove('error_input');
    }

    if (slt_distritos.value == '') {
        error = true;
        slt_distritos.classList.add('error_input');
    } else {
        slt_distritos.classList.remove('error_input');
    }

    
    if (input_direccion.value == '') {
        error = true;
        input_direccion.classList.add('error_input');
    } else {
        input_direccion.classList.remove('error_input');
    }

    if (input_fecha.value == '') {
        error = true;
        input_fecha.classList.add('error_input');
    } else {
        input_fecha.classList.remove('error_input');
    }

    if (input_referencia.value == '') {
        error = true;
        input_referencia.classList.add('error_input');
    } else {
        input_referencia.classList.remove('error_input');
    }


    if (input_telefono.value == '') {
        error = true;
        input_telefono.classList.add('error_input');
    } else {
        input_telefono.classList.remove('error_input');
    }

    if (input_fax.value == '') {
        error = true;
        input_fax.classList.add('error_input');
    } else {
        input_fax.classList.remove('error_input');
    }

    if (input_correo.value == '') {
        error = true;
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.remove('error_input');
    }

    if (input_contacto_nombre.value == '') {
        error = true;
        input_contacto_nombre.classList.add('error_input');
    } else {
        input_contacto_nombre.classList.remove('error_input');
    }

    if (input_contacto_papellido.value == '') {
        error = true;
        input_contacto_papellido.classList.add('error_input');
    } else {
        input_contacto_papellido.classList.remove('error_input');
    }

    if (input_contacto_sapellido.value == '') {
        error = true;
        input_contacto_sapellido.classList.add('error_input');
    } else {
        input_contacto_sapellido.classList.remove('error_input');
    }

    if (input_contacto_id.value == '') {
        error = true;
        input_contacto_id.classList.add('error_input');
    } else {
        input_contacto_id.classList.remove('error_input');
    }

    if (input_contacto_departamento.value == '') {
        error = true;
        input_contacto_departamento.classList.add('error_input');
    } else {
        input_contacto_departamento.classList.remove('error_input');
    }

    if (input_contacto_telefono.value == '') {
        error = true;
        input_contacto_telefono.classList.add('error_input');
    } else {
        input_contacto_telefono.classList.remove('error_input');
    }

    if (input_contacto_correo.value == '') {
        error = true;
        input_contacto_correo.classList.add('error_input');
    } else {
        input_contacto_correo.classList.remove('error_input');
    }


    return error;
};

let obtener_datos = () => {

    if (validar() == false) {

        let nombre = input_nombre.value;
        let alias = input_alias.value;
        let cedula_juridica = input_cedulaj.value;
        let tipo_centro = slt_tipo_centro.value;
        let nivel_centro = slt_nivel_centro.value;
        let foto = input_imagen.src;
        let nombre_comercial = input_nombre_comercial.value;
        let provincia = slt_provincias.options[slt_provincias.selectedIndex].textContent;
        let canton = slt_cantones.options[slt_cantones.selectedIndex].textContent;
        let distrito = slt_distritos.options[slt_distritos.selectedIndex].textContent;
        let direccion = input_direccion.value;
        let fecha_fundacion = input_fecha.value;
        let referencia_historia = input_referencia.value;
        let telefono = input_telefono.value;
        let fax = input_fax.value;
        let sitio_web = input_web.value;
        let facebook = input_face.value;
        let youtube = input_youtube.value;
        let twitter = input_twitter.value;
        let instagram = input_insta.value;
        let correo_electronico = input_correo.value;
        let contacto_nombre = input_contacto_nombre.value;
        let papellido = input_contacto_papellido.value;
        let sapellido = input_contacto_sapellido.value;
        let identificacion = input_contacto_id.value;
        let departamento = input_contacto_departamento.value;
        let telefono_contacto = input_contacto_telefono.value;
        let extension_contacto = input_contacto_extension.value;
        let correo_electronico_contacto  = input_contacto_correo.value;
        let userid = localStorage.getItem('usuario_en_sesion');


        modificar_centroe(nombre, alias, cedula_juridica, tipo_centro, nivel_centro, foto, nombre_comercial, provincia, canton, distrito, direccion, fecha_fundacion, referencia_historia, telefono, fax, sitio_web, facebook, instagram, youtube, twitter, correo_electronico, contacto_nombre, papellido, sapellido, identificacion, departamento, telefono_contacto, extension_contacto, correo_electronico_contacto, userid);

    } else {
        swal.fire({
            type: 'warning',
            title: 'El centro educativo no fue modificado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

boton_modificar.addEventListener('click', obtener_datos);
