'use strict';
//inportacion libreria mongoose
let mongoose = require('mongoose');
//modelo interfaz para guardar la transacciones para la bitacora
let esquemaTransacciones = new mongoose.Schema({
    usuario: {type: String, required: true},
    tipoUsuario: {type: String, required: true},
    transaccion: {type: String, required: true},
    estatus: {type: String, requiered: true},
    fechaHora: {type: String, required: true}
});

//exportacion del modulo, muy importante
module.exports = mongoose.model('transaccion', esquemaTransacciones);