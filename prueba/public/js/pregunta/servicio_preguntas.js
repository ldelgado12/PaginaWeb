'use strict';


let registrar_pregunta = (ppregunta, prespuesta) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_pregunta",
    method: "POST",
    data: {
      pregunta: ppregunta,
      respuesta: prespuesta
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'La pregunta fue registrada correctamente', 
      text: '',
      onClose: () => {
        window.location.href = 'registro_pregunta.html';
      }
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'La pregunta no pude ser enviada',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let listar_pregunta = () => {
  let lista_pregunta = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_pregunta",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_pregunta = res.pregunta;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return lista_pregunta;
 
};

let buscar_pregunta = (id_pregunta) => {
  let pregunta = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_pregunta/"+ id_pregunta,
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
      pregunta = res.pregunta;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return pregunta;
 
};

let actualizar_pregunta = (ppregunta, prespuesta, pid) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/actualizar_pregunta',
      method : "POST",
      data : {
          pregunta : ppregunta,
          respuesta : prespuesta,
          id : pid
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
  });

  request.done(function(res){
      
     
      swal.fire({
          type : 'success',
          title : 'Pregunta actualizado con éxito',
          text : res.msg,
          onClose: () => {
              window.location.href = 'listar_pregunta.html';
            }    
      });

  });

  request.fail(function(res){
      swal.fire({
          type : 'error',
          title : 'Proceso no realizado',
          text : res.msg
      });

  });

};

let eliminar = (pid) => {
  let request = $.ajax({
      url : 'http://localhost:4000/api/eliminar_pregunta',
      method : "POST",
      data : {
          id : pid,
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
      
  });
    window.location.href = 'listar_pregunta.html';
};