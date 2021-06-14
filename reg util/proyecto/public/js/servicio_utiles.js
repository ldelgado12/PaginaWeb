'use strict';


let registrar_utiles = (pnombre, ptipo, pciclo, pnivel, pano, putiles, pcantidad) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_utiles",
    method: "POST",
    data: {
      utiles: putiles,
      cantidad: pcantidad,
    tipo: ptipo, 
     nombre: pnombre,
      ciclo: pciclo,
      nivel: pnivel, 
      ano: pano
      

    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El util fue agregado',
      text: ''
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'Los utiles no pudieron ser agregados',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let lista_utiles = () => {
  let lista_utiles = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_utiles",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_utiles = res.utiles;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return lista_utiles;
 
};