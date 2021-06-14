'use strict';
const express = require('express');
const router = express.Router();
const rating_api = require('./rating.api');

router.param('rating_id', function (req, res, next, rating_id) {
    req.body.rating_id = rating_id;
    next();
});

router.route('/registrar_rating')
    .post(
        function (req, res) {
            rating_api.registrar(req, res);
        }
    );

router.route('/listar_rating')
    .get(
        function (req, res) {
            rating_api.listar_todos(req, res);
        }
    )

router.route('/listar_ratings_usuario')
    .post(
        function (req, res) {
            rating_api.listar_ratings_usuario(req, res);
        }
    )

router.route('/listar_ratings_usuario_pf')
    .post(
        function (req, res) {
            rating_api.listar_ratings_usuario_pf(req, res);
        }
    )

router.route('/eliminar_evaluacion')
    .post(
        function (req, res) {
            rating_api.eliminar_evaluacion(req, res);
        }
    )

router.route('/buscar_rating/:rating_id')
    .get(
        function (req, res) {
            rating_api.buscarrating_ratingid(req, res);
        }
    )

router.route('/actualizar_rating')
    .post(
        function (req, res) {
            rating_api.actualizar_rating(req, res);
        }
    );


module.exports = router;