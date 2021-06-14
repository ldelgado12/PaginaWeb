'use strict';
const express = require('express');
const router =  express.Router();
const pregunta_api = require('./preguntas.api');

router.param('id_pregunta', function(req, res, next, id_pregunta){
    req.body.id_pregunta = id_pregunta;
    next();
});

router.route('/registrar_pregunta')
    .post(
        function(req, res){
            pregunta_api.registrar(req, res);
        }
    );

    router.route('/actualizar_pregunta')
    .post(
        function(req , res){
            pregunta_api.actualizar(req, res);
        }
    );


router.route('/listar_pregunta')
        .get(
            function(req, res){
                pregunta_api.listar_todos(req, res);
            }
        );

router.route('/buscar_pregunta/:id_pregunta')
        .get(
            function(req , res){
                pregunta_api.buscar_por_id(req, res);
            }
        );
       
router.route('/eliminar_pregunta')
        .post(
            function(req , res){
                pregunta_api.eliminar(req, res);
            }
        );        


module.exports = router;