'use strict'

let user_admin = localStorage.getItem('usuario_en_sesion');

let listar_solicitudes = () => {
 
    let lista_solicitudes = [];
  
    let request = $.ajax({
  
      url: "http://localhost:4000/api/listar_ce_pendientes",
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async : false
    });
  
    request.done(function (res) {
      lista_solicitudes = res.centroe;
      
    });
  
    request.fail(function (jqXHR, textStatus) {
      
    });
    return lista_solicitudes;
   
  };

  let eliminar_solicitud = (pId) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/borrar_usuario",
        method: "POST",
        data: {
            _id: pId
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
  
    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'Solicitud eliminada',
            text: `La solicitud fue eliminada correctamente`
        }).then(function () {
            window.location = "/public/listar_solicitudes.html";
        });
    });
  
    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'La solicitud no fue eliminada',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    });
  
  };

  let habilitar = (pId, pCorreo, pClave) =>{

    let request = $.ajax({
        url: "http://localhost:4000/api/activar_ce",
        method: 'POST',
        async: false,
        data: {
            _id : pId,
            correo_electronico: pCorreo,
            clave : pClave
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });
    request.done(function (msg) {
      swal.fire({
          type: 'success',
          title: 'Solicitud aprobada',
          text: `La solicitud fue aprobada correctamente`
      }).then(function () {
          window.location = "/public/listar_solicitudes.html";
      });
  });

  request.fail(function (jqXHR, textStatus) {
      swal.fire({
          type: 'error',
          title: 'La solicitud no fue aprobada',
          text: 'Ocurrió un error inesperado, por favor intente de nuevo'
      });
  });

};
