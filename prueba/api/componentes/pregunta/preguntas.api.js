'use strict';
const model_pregunta = require('./preguntas.model');


module.exports.registrar = (req, res) =>{
    let pregunta_nueva = new model_pregunta(
        {
            pregunta : req.body.pregunta,
            respuesta : req.body.respuesta,
            estado : 'Activo'
        }
    );
    pregunta_nueva.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo guardar la pregunta ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Se registró la pregunta de forma correcta`
                    }
                )
            }
        }

    );
};


module.exports.listar_todos = (req ,res) =>{
    model_pregunta.find().then(
        function(pregunta){
            if(pregunta.length > 0){
                res.json(
                    {
                        success: true,
                        pregunta: pregunta
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        pregunta: 'No se encontraron preguntas'
                    }
                )
            }
        }

    )
};

module.exports.buscar_por_id = function (req, res){
    model_pregunta.find({_id : req.body.id_pregunta}).then(
        function(pregunta){
            if(pregunta){
                res.json({success: true, pregunta : pregunta});
            }else{
                res.json({success: false, pregunta : pregunta});
            }
        }

    );

};

module.exports.actualizar = function(req, res){
   
    model_pregunta.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar la pregunta'});
            }else{
                res.json({success: true , msg : 'La pregunta se actualizó con éxito'});
            }
        }
    
    );
};

module.exports.eliminar = function(req, res){
    model_pregunta.findByIdAndRemove(req.body.id,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar la pregunta '});
            }else{
                res.json({success: true ,msg: 'La pregunta se eliminó con éxito'}); 
            }
        }
    )
};

