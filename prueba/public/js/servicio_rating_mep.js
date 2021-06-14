'use strict'

let user_admin = localStorage.getItem('usuario_en_sesion');

let listar_activos = () => {
 
    let listar_activos = [];
  
    let request = $.ajax({
  
      url: "http://localhost:4000/api/listar_activos",
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async : false
    });
  
    request.done(function (res) {
        listar_activos = res.centroe;
      
    });
  
    request.fail(function (jqXHR, textStatus) {
      
    });
    return listar_activos;
   
  };

  let traer_rating = (pId) => {

    let traer_rating = [];
  
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_usuario",
        method: 'POST',
        async: false,
        data: {
          _id: pId
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });
    request.done(function (response) {
  
      if (response.success) {
        traer_rating = response.usuario;
      } else {
          consultar_noticia = response.usuario;
          swal.fire({
              type: 'error',
              title: 'Error',
              text: response.msj
          });
      }
  
  });
  
  return traer_rating;
  
  };
  
  let agregar_ranking = (pId, pranking) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/modificar_ce",
      method: "POST",
      async: false,
      data: {
        _id : pId,
        evaluacion_mep: pranking
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
  
    request.done(function (msg) {
      swal.fire({
        type: 'success',
        title: 'El rating ha sido recibido',
        text: 'Se le estará mostrando la información actualizada',
      }).then(function() {
        window.location = "/public/lista_ratings.html";
  
      });
    });
  
    request.fail(function (jqXHR, textStatus) {
      swal.fire({
        type: 'error',
        title: 'El rating no ha sido modificado',
        text: 'Ocurrió un error inesperado, por favor intente de nuevo'
      });
    });
  };
  
  