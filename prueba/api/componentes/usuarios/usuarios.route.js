'use strict';
const express = require('express');
const router = express.Router();
const api_usuarios = require('./usuarios.api');

//end point registro ce
router.route('/registrar_ce')
.post(
    function(req, res){
        api_usuarios.registrar_ce(req, res);
    }
);

//end point modificar ce
router.route('/modificar_ce')
.post(
    function(req, res){
        api_usuarios.modificar_ce(req, res);
    }
);
//end point lista ce

router.route('/listar_centroe')
    .get(
        function(req, res){
            api_usuarios.listar_ce(req, res);
        }
    )
//end point lista todos

router.route('/listar_todos')
    .get(
        function(req, res){
            api_usuarios.listar_todos(req, res);
    }
)

//end point lista ce pendientes

router.route('/listar_ce_pendientes')
    .get(
        function(req, res){
            api_usuarios.listar_solicitud_pendiente(req, res);
    }
)

//end point validar sesion usuario
router.route('/validar_sesion')
    .post(
        function(req, res){
            api_usuarios.validar_sesion(req, res);
        }
    );

//end point buscar usuario por id

router.route('/buscar_usuario')
    .post(
        function(req, res){
            api_usuarios.buscar_usuario(req, res);
        }
    );


//end point registro pf
router.route('/registrar_pf')
.post(
    function(req, res){
        api_usuarios.registrar_pf(req, res);
    }
);

//end point modificar pf
router.route('/modificar_pf')
    .post(
        function(req, res){
            api_usuarios.modificar_pf(req, res);
        }
    );


//end point lista primaria

router.route('/listar_primaria')
    .get(
        function(req, res){
            api_usuarios.listar_primaria(req, res);
    }
);

//end point lista secundaria

router.route('/listar_secundaria')
    .get(
        function(req, res){
            api_usuarios.listar_secundaria(req, res);
    }
);

//end point habilitar usuario

router.route('/habilitar_usuario')
    .post(
        function(req, res){
            api_usuarios.habilitar_usuario(req, res);
        }
    );

//end point deshabilitar usuario

router.route('/deshabilitar_usuario')
    .post(
        function(req, res){
            api_usuarios.deshabilitar_usuario(req, res);
        }
    );

//end point borrar usuario

router.route('/borrar_usuario')
    .post(
        function(req, res){
            api_usuarios.borrar_usuario(req, res);
        }
    );


router.route('/listar_activos')
    .get(
        function(req, res){
            api_usuarios.listar_activos(req, res);
    }
);

router.route('/clave_temporal').post(function (req, res) {
    api_usuarios.clave_temporal(req, res);
});

router.route('/cambiar_clave').post(function (req, res) {
    api_usuarios.cambiar_clave(req, res);
});

router.route('/set_temporal').post(function (req, res) {
    api_usuarios.set_temporal(req, res);
});

router.route('/activar_ce').post(function (req, res) {
    api_usuarios.activar_ce(req, res);
});




module.exports = router;
