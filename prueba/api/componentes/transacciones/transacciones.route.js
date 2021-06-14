'use strict';


//carga libreria express para utilizar la funcion de ruteo
const express = require('express');
const router = express.Router();
const apiTransacciones = require('./transacciones.api');

//ruteo para registrar
router.route('/registrar_transaccion').post(function (req, res) {
    apiTransacciones.registrar(req, res);
});
//ruteo para listar
router.route('/listar_transacciones').get(function (req, res) {
    apiTransacciones.listarTransacciones(req, res);
});

//esportacion del ruteo, muy importante
module.exports = router;