'use strict';
const model_actividad = require('./actividad.model');


module.exports.registrar = (req, res) =>{
    let actividad_nueva = new model_actividad(
        {
            userid: req.body.userid,
            titulo : req.body.titulo,
            actividad : req.body.actividad,
            foto : req.body.foto,
            estado : 'Activo'
        }
    );
    actividad_nueva.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo guardar la actividad ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Se registró la actividad de forma correcta`
                    }
                )
            }
        }

    );
};


module.exports.listar_todos = (req ,res) =>{
    model_actividad.find().then(
        function(actividad){
            if(actividad.length > 0){
                res.json(
                    {
                        success: true,
                        actividad: actividad
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        actividad: 'No se encontraron actividades'
                    }
                )
            }
        }

    )
};

module.exports.listar_actividades_usuario = (req, res) => {
    model_actividad.find({userid: req.body.userid}).then(
        function (actividads) {
            if (actividads) {
                res.json(
                    {
                        success: true,
                        actividads: actividads
                    }
                )
            } else{
                res.json(
                    {
                        success: false,
                        actividads: `Error, no se encontraron actividads: ${actividads}`
                    }
                )
            }
        }

    )
};

module.exports.eliminar_actividad = function (req, res) {
    model_actividad.findByIdAndRemove(req.body._id,
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo eliminar la actividad, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se elimino la actividad de forma correcta`
                    }
                )
            }
        }


    );
};

module.exports.buscaractividad_actividadid = (req, res) => {
    model_actividad.find({ _id: req.body.actividad_id }).then(
        function (actividads) {
            if (actividads) {
                res.json(
                    {
                        success: true,
                        actividads: actividads
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        actividads: actividads
                    }
                )
            }
        }

    )
};

module.exports.actualizar_actividad = function (req, res) {
    model_actividad.findByIdAndUpdate(req.body._id, { $set: req.body },
        
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar la actividad, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se actualizo la actividad de forma correcta`
                    }
                )
            }
        }


    );
};