
'use strict';
const express = require('express');
const router = express.Router();
const servicios_api = require('./servicios.api');

router.route('/registrar_servicios')
    .post(
        function (req, res) {
            servicios_api.registrar_servicio(req, res);
        }
    );

router.route('/consultar_servicios')
    .post(
        function (req, res) {
            servicios_api.consultar_servicios(req, res);
        }
    )

router.route('/eliminar_servicio')
    .post(
        function (req, res) {
            servicios_api.eliminar_servicio(req, res);
        }
    )



router.route('/actualizar_servicio')
    .post(
        function (req, res) {
            servicios_api.actualizar_servicio(req, res);
        }
    );

    router.route('/buscar_servicio')
    .post(
    function(req, res){
        servicios_api.buscar_servicio(req, res);
    }
    );

module.exports = router;