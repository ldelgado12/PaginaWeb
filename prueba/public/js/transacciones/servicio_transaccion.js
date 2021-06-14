'use strict';

//funcion que llama al api mandadole los parametros requeridos para registrar categoria, con la funcion de manejo de errores

let registrar_transaccion = (pUsuario, pTipoUsuario, pTransaccion, pEstatus) => {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_transaccion',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            usuario: pUsuario,
            tipoUsuario: pTipoUsuario,
            transaccion: pTransaccion,
            estatus: pEstatus
        }
    });

    peticion.done(function(response){
        respuesta = response;
        //console.log(response.msj);
    });

    peticion.fail(function(response){
        respuesta = response;
        //console.log(response.msj);
    });

    return respuesta;
};


// funcion que pide las categorias en bd mongo, y las guarda en un arreglo
function obtenerTransacciones(){
    let listaTransacciones = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_transacciones',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
    });

    peticion.done(function(response){
        listaTransacciones = response;
    });

    peticion.fail(function(){

    });

    return listaTransacciones;
};