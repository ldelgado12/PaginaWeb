'use strict';
const express = require('express');
const router =  express.Router();
const utiles_api = require('./utiles.api');

router.route('/registrar_utiles')
    .post(
        function(req, res){
            utiles_api.registrar(req, res);
        }
    );

router.route('/listar_utiles')
        .get(
            function(req, res){
                utiles_api.listar_todos(req, res);
            }
        )

module.exports = router;