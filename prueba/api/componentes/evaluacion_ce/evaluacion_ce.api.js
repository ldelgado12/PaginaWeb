'use strict';
const model_evaluacion = require('./evaluacion_ce.model');

module.exports.registrar = (req, res) =>{
    let evaluacion_ce = new model_evaluacion(
        {
            star1 : req.body.star1,
            star2 : req.body.star2,
            star3 : req.body.star3,
            star4 : req.body.star4,
            star5 : req.body.star5
        }
    );
    
    evaluacion_ce.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo guardar la evaluacion ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Se registró la informacion de forma correcta`
                    }
                )
            }
        }

    );
};



module.exports.listar_todos = (req ,res) =>{
    model_evaluacion.find().then(
        function(evaluacion){
            if(evaluacion.length > 0){
                res.json(
                    {
                        success: true,
                        evaluacion: evaluacion
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        evaluacion: 'No se encontro evaluacion'
                    }
                )
            }
        }

    )
};