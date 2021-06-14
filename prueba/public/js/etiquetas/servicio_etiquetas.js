'use strict';

let registrar_etiqueta = (pId,pNombre) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_etiqueta",
    method: "POST",
    data: {
      userid: pId,
      nombre : pNombre
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'La etiqueta ha sido registrada',
      text: 'En unos segundos estará lista para su uso'
    }).then(function() {
      window.location = "lista_etiquetas.html";
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'La no ha sido registrada',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let listado_etiquetas = () => {
 
  let lista_etiquetas = [];

  let request = $.ajax({

    url: "http://localhost:4000/api/listar_etiquetas",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_etiquetas = res.etiqueta;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return lista_etiquetas;
 
};

let traer_etiqueta = (pId) => {

  let traer_etiqueta = [];

  let request = $.ajax({
      url: "http://localhost:4000/api/buscar_etiqueta",
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
      traer_etiqueta = response.etiqueta;
    } else {
        consultar_noticia = response.etiqueta;
        swal.fire({
            type: 'error',
            title: 'Error',
            text: response.msj
        });
    }

});

return traer_etiqueta;

};

let modificar_etiqueta = (pId,pNombre) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/actualizar_etiqueta",
    method: "POST",
    data: {
      _id: pId,
      nombre : pNombre
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'La etiqueta ha sido modificada',
      text: 'En unos segundos estará lista para su uso'
    }).then(function() {
      window.location = "lista_etiquetas.html";
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'La etiqueta no ha sido modificada',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let eliminar_etiqueta = (pId) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/eliminar_etiqueta",
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
          title: 'Etiqueta eliminada',
          text: `Gracias, la etiqueta fue eliminada correctamente`
      }).then(function () {
          window.location = "/public/lista_etiquetas.html";
      });
  });

  request.fail(function (jqXHR, textStatus) {
      swal.fire({
          type: 'error',
          title: 'La etiqueta no fue eliminada',
          text: 'Ocurrió un error inesperado, por favor intente de nuevo'
      });
  });

};