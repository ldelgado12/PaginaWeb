'use strict';

let registrar_utiles = (pidCentro, pNombre, pTipo, pCiclo, pNivel, pAnho, pUtiles, pCantidad) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_utiles",
    method: "POST",
    data: {
      idcentro: pidCentro,
      nombre: pNombre,
      tipo: pTipo,
      ciclo: pCiclo,
      nivel: pNivel,
      anho: pAnho,
      util: pUtiles,
      cantidad: pCantidad
    },
    dataType: "json",
    async: false,
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El útil fue agregado',
      text: ''
    }).then(function() {
      window.location = "listar_utiles.html";

    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'Los útiles no pudieron ser agregados',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let consultar_utiles = (pId) => {

  let consultar_util = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_utiles",
    method: 'POST',
    async: false,
    data: {
      idcentro: pId
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  });

  request.done(function (response) {

    if (response.success) {
      consultar_util = response.utiles;
    }

  });

  return consultar_util;

};

/*let registrar_utiles = (pidCentro, pNombre, pTipo, pCiclo, pNivel, pAnho, pUtiles, pCantidad) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/desactivar_utiles",
    method: "POST",
    data: {
      idcentro: pidCentro,
      nombre: pNombre,
      tipo: pTipo,
      ciclo: pCiclo,
      nivel: pNivel,
      anho: pAnho,
      util: pUtiles,
      cantidad: pCantidad
    },
    dataType: "json",
    async: false,
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El útil fue agregado',
      text: ''
    }).then(function() {
      window.location = "listar_utiles.html";

    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'Los útiles no pudieron ser agregados',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};*/


let buscar_util = (id_util) => {
  let util = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_util/"+id_util,
    method: "GET", 
    data:{
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res){
    util = res.util;
  });

  request.fail(function (jqXHR, textStatus){

  });
  return util;

};


let actualizar_util = (pidCentro, pNombre, pTipo, pCiclo, pNivel, pAnho, pUtiles, pCantidad, pid) =>{
  let request = $.ajax({
    url: "http://localhost:4000/api/actualizar_util",
    method: "POST",
    data: {
      _id: pid,
      idcentro: pidCentro,
      nombre: pNombre,
      tipo: pTipo,
      ciclo: pCiclo,
      nivel: pNivel,
      anho: pAnho,
      util: pUtiles,
      cantidad: pCantidad
    },
    dataType: "json",
    async: false,
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El útil fue actualizado',
      text: ''
    }).then(function() {
      window.location = "listar_utiles.html";

    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'Los útiles no pudieron ser agregados',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};


let desactivar = (pid) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/desactivar_utiles",
    method: "POST",
    data: {
      id : pid,
    },
    dataType: "json",
    async: false,
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El útil fue desactivado',
      text: ''
    }).then(function() {
      window.location = "listar_utiles.html";

    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'Los útiles no pudieron ser desactivador',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let activar = (pid) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/activar_utiles",
    method: "POST",
    data: {
      id : pid,
    },
    dataType: "json",
    async: false,
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El útil fue activado',
      text: ''
    }).then(function() {
      window.location = "listar_utiles.html";

    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'Los útiles no pudieron ser activados',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let eliminar = (pid) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/eliminar_utiles",
    method: "POST",
    data: {
      id : pid,
    },
    dataType: "json",
    async: false,
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El útil fue activado',
      text: ''
    }).then(function() {
      window.location = "listar_utiles.html";

    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'Los útiles no pudieron ser activados',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};