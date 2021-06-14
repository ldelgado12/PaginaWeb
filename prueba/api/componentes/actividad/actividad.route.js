'use strict';
const express = require('express');
const router = express.Router();
const actividad_api = require('./actividad.api');

router.param('actividad_id', function (req, res, next, actividad_id) {
    req.body.actividad_id = actividad_id;
    next();
});

router.route('/registrar_actividad')
    .post(
        function (req, res) {
            actividad_api.registrar(req, res);
        }
    );

router.route('/listar_actividad')
    .get(
        function (req, res) {
            actividad_api.listar_todos(req, res);
        }
    )

router.route('/listar_actividad_usuario')
    .post(
        function (req, res) {
            actividad_api.listar_actividades_usuario(req, res);
        }
    )


router.route('/eliminar_actividad')
    .post(
        function (req, res) {
            actividad_api.eliminar_actividad(req, res);
        }
    )

router.route('/buscar_actividad/:actividad_id')
    .get(
        function (req, res) {
            actividad_api.buscaractividad_actividadid(req, res);
        }
    )


router.route('/actualizar_actividad')
    .post(
        function (req, res) {
            actividad_api.actualizar_actividad(req, res);
        }
    );


module.exports = router;