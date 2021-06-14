
'use strict';
const express = require('express');
const router = express.Router();
const noticias_api = require('./noticias.api');

router.param('noticia_id', function (req, res, next, noticia_id) {
    req.body.noticia_id = noticia_id;
    next();
});

router.route('/registrar_noticias')
    .post(
        function (req, res) {
            noticias_api.registrar_noticias(req, res);
        }
    );

router.route('/consultar_noticias')
    .post(
        function (req, res) {
            noticias_api.consultar_noticias(req, res);
        }
    )

router.route('/eliminar_noticia')
    .post(
        function (req, res) {
            noticias_api.eliminar_noticia(req, res);
        }
    )


router.route('/buscar_noticia/:noticia_id')
    .get(
        function (req, res) {
            noticias_api.buscarnoticia_noticiaid(req, res);
        }
    )

router.route('/actualizar_noticia')
    .post(
        function (req, res) {
            noticias_api.actualizar_noticia(req, res);
        }
    );



module.exports = router;