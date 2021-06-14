'use strict';

let userid = localStorage.getItem('usuario_en_sesion');
console.log(userid);
let usario_loggeado = [];

usario_loggeado = obtener_usuario_por_id_centro(userid);



//Funcion para colocar la imagen de avatar en el div con el id de avatar_img
let mostrar_avatar = (pUsuarioLoggeado) =>{
    $("#avatar_img").attr("src",usario_loggeado.foto);
}

let mostrar_datos = (pUsuarioLoggeado) => {

    document.getElementById('image_preview').src = usario_loggeado.foto;
    document.getElementById('txt_nombre_centro').value = usario_loggeado.nombre;
    document.getElementById('txt_alias').value = usario_loggeado.alias;
    document.getElementById('txt_cedjuridica').value = usario_loggeado.cedula_juridica;
    document.getElementById('txt_tipo_centro').value = usario_loggeado.tipo_centro;
    document.getElementById('txt_nivel').value = usario_loggeado.nivel_centro;
    document.getElementById('txt_nombrecomercial').value = usario_loggeado.nombre_comercial;


    let opciones_provincia = document.querySelectorAll('#slt_provincias option')
    for(let i =0; i< opciones_provincia.length; i++){
        if(opciones_provincia[i].textContent== usario_loggeado.provincia){
            opciones_provincia[i].selected = true;
            llenar_cantones();
        }
    }

    let opciones_canton = document.querySelectorAll('#slt_cantones option')

    for(let i =0; i< opciones_canton.length; i++){
        if(opciones_canton[i].textContent== usario_loggeado.canton){
            opciones_canton[i].selected = true;
            llenar_distritos();
        }
    }


   // document.getElementById('slt_provincias').textContent = usario_loggeado.provincia;
    //document.getElementById('slt_canton').textContent = usario_loggeado.canton;
    //document.getElementById('slt_distrito').textContent = usario_loggeado.distrito;
    document.getElementById('txt_direccion').value = usario_loggeado.direccion;

    if (usario_loggeado.instagram ==null) {
    document.getElementById('instagram').value = "";
        
    } else {
    document.getElementById('instagram').value = usario_loggeado.instagram;
        
    }

    if (usario_loggeado.twitter ==null) {
    document.getElementById('twitter').value = "";
        
    } else {
    document.getElementById('twitter').value = usario_loggeado.twitter;
        
    }

    if (usario_loggeado.youtube ==null) {
    document.getElementById('youtube').value = "";
        
    } else {
    document.getElementById('youtube').value = usario_loggeado.youtube;
        
    }

    if (usario_loggeado.facebook ==null) {
    document.getElementById('facebook').value = "";
        
    } else {
    document.getElementById('facebook').value = usario_loggeado.facebook;
        
    }



    document.getElementById('txt_fechafund').value = usario_loggeado.fecha_fundacion;
    document.getElementById('txt_refhistorica').value = usario_loggeado.referencia_historia;
    document.getElementById('txt_telefono').value = usario_loggeado.telefono;
    document.getElementById('txt_fax').value = usario_loggeado.fax;

    if (usario_loggeado.sitio_web == null) {
    document.getElementById('txt_sitioweb').value = "";
        
    } else {
    document.getElementById('txt_sitioweb').value = usario_loggeado.sitio_web;
        
    }
    
    
    
    
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

if (userid != null) {
    mostrar_avatar(usario_loggeado);
    mostrar_datos(usario_loggeado);
}else{
    window.location.href='index.html';
}





