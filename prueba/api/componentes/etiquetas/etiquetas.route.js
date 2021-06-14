'use strict';
const express = require('express');
const router = express.Router();
const api_etiquetas = require('./etiquetas.api');

router.route('/registrar_etiqueta')
.post(
    function(req, res){
        api_etiquetas.registrar_etiqueta(req, res);
    }
);

router.route('/listar_etiquetas')
        .get(
            function(req, res){
                api_etiquetas.listar_etiquetas(req, res);
            }
        )

router.route('/buscar_etiqueta')
    .post(
    function(req, res){
        api_etiquetas.buscar_etiqueta(req, res);
    }
    );

router.route('/actualizar_etiqueta')    
    .post(
        function (req, res) {
            api_etiquetas.actualizar_etiqueta(req, res);
        }
    );
    
router.route('/eliminar_etiqueta')
    .post(
        function (req, res) {
            api_etiquetas.eliminar_etiqueta(req, res);
        }
    )
module.exports = router;
