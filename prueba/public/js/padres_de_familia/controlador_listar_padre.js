'use strict';

let userid = localStorage.getItem('usuario_en_sesion');
console.log(userid);

let usario_loggeado = [];

let mostrar_datos = (pUsuarioLoggeado) => {

    document.getElementById('prueba').src = usario_loggeado.foto;
    document.querySelector('#nombre').innerHTML = usario_loggeado.nombre;
   // document.getElementById('txt_segundo_nombre').value = usario_loggeado.segundo_nombre;
    document.querySelector('#apellido').innerHTML = usario_loggeado.papellido;
    document.querySelector('#distrito').innerHTML = usario_loggeado.distrito + ',';
    document.querySelector('#canton').innerHTML = usario_loggeado.canton+ ',';
    document.querySelector('#provincia').innerHTML = usario_loggeado.provincia;
    document.querySelector('#correo').innerHTML = usario_loggeado.correo_electronico;
    document.querySelector('#id').innerHTML = usario_loggeado.identificacion;
    document.querySelector('#phone').innerHTML = usario_loggeado.telefono;
    document.querySelector('#hijos').innerHTML = usario_loggeado.cantidad_hijos;





  /*  document.getElementById('txt_segundo_apellido').value = usario_loggeado.sapellido;
    document.getElementById('txt_cedula').value = usario_loggeado.identificacion;
    document.getElementById('txt_correo').value = usario_loggeado.correo_electronico;
    document.getElementById('txt_provincia').value = usario_loggeado.provincia;
    document.getElementById('txt_canton').value = usario_loggeado.canton;
    document.getElementById('txt_distrito').value = usario_loggeado.distrito;
    document.getElementById('txt_direccion').value = usario_loggeado.direccion;*/
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





