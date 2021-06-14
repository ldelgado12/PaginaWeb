'use strict';

//inportacion del modelo

const modeloTransaccion = require('./transacciones.model');
const moment = require('moment');

moment.locale('es');

//creacion de funcion registrar en el modulo a exportar (Peticion y resultado)

module.exports.registrar = function (req, res) {
    //creacion nuevo opjeto transacción con la informacion a registrar
    let nuevaTransaccion = new modeloTransaccion({
        usuario: req.body.usuario,
        tipoUsuario: req.body.tipoUsuario,
        transaccion: req.body.transaccion,
        estatus: req.body.estatus,
        fechaHora: moment().format('Do MMMM YYYY, hh:mm:ss a')
    });

    //funcion que guarda el objeto en mongo y maneja errores al guardar.
    nuevaTransaccion.save(function (error) {


        if(error){
            res.json({success: false, msg: 'No se pudo registrar la Transacción, ocurrió el siguiente error: "'+error+'"'});
        }else{
            res.json({success: true, msg: 'La Transacción se registro con éxito'});
        }
    });
};

//funcion que lista las Transacciones que estan en la base de datos

module.exports.listarTransacciones= function(req , res){
        modeloTransaccion.find().sort({fechaHora: 'desc'}).then(
        function (transacciones) {
            res.send(transacciones);
        }
    )
};