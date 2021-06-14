'use strict';
const model_rating = require('./rating.model');


module.exports.registrar = (req, res) =>{
    let rating_nuevo = new model_rating(
        {
            userid: req.body.userid,
            centroid : req.body.centroid,
            comentario : req.body.comentario,
            rating : req.body.rating,
            fecha: req.body.fecha
        }
    );
    rating_nuevo.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo guardar el rating ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Se registró el rating de forma correcta`
                    }
                )
            }
        }

    );
};

module.exports.listar_todos = (req ,res) =>{
    model_rating.find().then(
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

module.exports.listar_ratings_usuario = (req, res) => {
    model_rating.find({centroid: req.body.centroid}).then(
        function (ratings) {
            if (ratings) {
                res.json(
                    {
                        success: true,
                        ratings: ratings
                    }
                )
            } else{
                res.json(
                    {
                        success: false,
                        ratings: `Error, no se encontraron ratings: ${ratings}`
                    }
                )
            }
        }

    )
};

module.exports.listar_ratings_usuario_pf = (req, res) => {
    model_rating.find({userid: req.body.userid}).then(
        function (ratings) {
            if (ratings) {
                res.json(
                    {
                        success: true,
                        ratings: ratings
                    }
                )
            } else{
                res.json(
                    {
                        success: false,
                        ratings: `Error, no se encontraron ratings: ${ratings}`
                    }
                )
            }
        }

    )
};

module.exports.eliminar_evaluacion = function (req, res) {
    model_rating.findByIdAndRemove(req.body._id,
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo eliminar la evaluacion, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se elimino la evaluacion de forma correcta`
                    }
                )
            }
        }


    );
};

module.exports.buscarrating_ratingid = (req, res) => {
    model_rating.find({ _id: req.body.rating_id }).then(
        function (ratings) {
            if (ratings) {
                res.json(
                    {
                        success: true,
                        ratings: ratings
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        ratings: ratings
                    }
                )
            }
        }

    )
};

module.exports.actualizar_rating = function (req, res) {
    model_rating.findByIdAndUpdate(req.body._id, { $set: req.body },
        
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar la evaluacion, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se actualizo la evaluacion de forma correcta`
                    }
                )
            }
        }


    );
};