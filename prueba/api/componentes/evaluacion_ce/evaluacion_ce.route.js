'use strict';
const express = require('express');
const router =  express.Router();
const evaluacion_api = require('./evaluacion_ce.api');

router.route('/registrar_evaluacion_ce')
    .post(
        function(req, res){
            evaluacion_api.registrar(req, res);
        }
    );

router.route('/listar_evaluacion_ce')
        .get(
            function(req, res){
                evaluacion_ce_api.listar_todos(req, res);
            }
        )

module.exports = router;