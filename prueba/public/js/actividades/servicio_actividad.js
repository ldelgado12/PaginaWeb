'use strict';

let registrar_actividad = (pId, pTitulo, pActividad, pFoto) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_actividad",
    method: "POST",
    data: {
      userid: pId,
      titulo: pTitulo,
      actividad: pActividad,
      foto: pFoto
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'La actividad fue enviada',
      text: 'En unos segundos se mostrará en tu perfil'
    }).then(function () {
      window.location = "listar_actividad.html";
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'La actividad no pude ser enviada',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let listar_actividad = () => {
  let lista_actividad = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_actividad",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
  });

  request.done(function (res) {
    lista_actividad = res.actividad;

  });

  request.fail(function (jqXHR, textStatus) {

  });
  return lista_actividad;

};


let consultar_actividad_usuario = (pId) => {

  let consultar_actividad = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_actividad_usuario",
    method: 'POST',
    async: false,
    data: {
      userid: pId
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  });

  request.done(function (response) {

    if (response.success) {
      consultar_actividad = response.actividads;
    } else {
      consultar_actividad = response.actividads;
      swal.fire({
        type: 'error',
        title: 'Error',
        text: response.msj
      });
    }

  });

  return consultar_actividad;

};

let eliminar_actividad = (pId) => {
  let request = $.ajax({
      url: "http://localhost:4000/api/eliminar_actividad",
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
          title: 'Actividad eliminada',
          text: `Gracias, la actividad fue eliminada correctamente`
      }).then(function () {
          window.location = "/public/padrefamilia/listar_citas_pf.html";
      });
  });

  request.fail(function (jqXHR, textStatus) {
      swal.fire({
          type: 'error',
          title: 'La actividad no fue eliminada',
          text: 'Ocurrió un error inesperado, por favor intente de nuevo'
      });
  });

};

let buscaractividad_actividadid = (actividad_id) => {

  let actividad = [];

  let request = $.ajax({
      url: "http://localhost:4000/api/buscar_actividad/" + actividad_id,
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async: false
  });

  request.done(function (res) {
      actividad = res.actividads;
  });

  request.fail(function (jqXHR, textStatus) {

  });
  return actividad;

};

let actualizar_actividad = (pId, pTitulo, pDescripcion, pFoto) => {

  let request = $.ajax({
      url: "http://localhost:4000/api/actualizar_actividad",
      method: "POST",
      data: {
          _id: pId,
          titulo: pTitulo,
          actividad: pDescripcion,
          foto: pFoto
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
      swal.fire({
          type: 'success',
          title: 'La actividad fue modificada',
          text: `Gracias por modificar la actividad. Titulo: ${pTitulo}`
      }).then(function () {
          window.location = "/public/listar_actividad.html";
      });
  });

  request.fail(function (jqXHR, textStatus) {
      swal.fire({
          type: 'error',
          title: 'La actividad no fue modificada',
          text: 'Ocurrió un error inesperado, por favor intente de nuevo'
      });
  });

};