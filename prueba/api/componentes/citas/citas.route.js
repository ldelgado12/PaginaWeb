
'use strict';
const express = require('express');
const router = express.Router();
const citas_api = require('./citas.api');

router.param('id_cita', function (req, res, next, id_cita) {
    req.body.id_cita = id_cita;
    next();
});

router.route('/registrar_citas')
    .post(
        function (req, res) {
            citas_api.registrar_cita(req, res);
        }
    );

router.route('/actualizar_cita')
    .post(
        function (req, res) {
            citas_api.actualizar_cita(req, res);
        }
    );

router.route('/consultar_citas')
    .post(
        function (req, res) {
            citas_api.consultar_citas(req, res);
        }
    )

router.route('/consultar_citas_pf')
    .post(
        function (req, res) {
            citas_api.consultar_citas_pf(req, res);
        }
    )

router.route('/buscar_cita/:id_cita')
    .get(
        function (req, res) {
            citas_api.buscarcita_idcita(req, res);
        }
    )

router.route('/eliminar_cita')
    .post(
        function (req, res) {
            citas_api.eliminar_cita(req, res);
        }
    )

    router.route('/consultar_citas_ce')
    .post(
        function (req, res) {
            citas_api.consultar_citas_ce(req, res);
        }
    )


module.exports = router;