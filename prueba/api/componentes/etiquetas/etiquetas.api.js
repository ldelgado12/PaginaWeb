'use strict';
const model_etiqueta = require ('./etiquetas.model');

module.exports.registrar_etiqueta = (req, res) =>{
    let nueva_etiqueta = new model_etiqueta(
        {
        userid: req.body.userid,    
        nombre : req.body.nombre
        }
    );
    nueva_etiqueta.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se completar el registro ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Se registró la etiqueta de manera correcta`
                    }
                )
            }
        }
    );
};


module.exports.listar_etiquetas = (req ,res) =>{
    model_etiqueta.find().then(
        function(etiqueta){
            if(etiqueta.length > 0){
                res.json(
                    {
                        success: true,
                        etiqueta: etiqueta
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron etiquetas'
                    }
                )
            }
        }

    )
};

module.exports.buscar_etiqueta = (req, res)=>{
    model_etiqueta.findOne({_id : req.body._id}).then(
        function(etiqueta){
            if(etiqueta){
                res.json({
                    success:true,
                    etiqueta: etiqueta
                });
            }else{
                res.json({
                    success:false,
                    msj: 'No se encontró la etiqueta'
                });
            }

        }
    )
}

module.exports.actualizar_etiqueta = function (req, res) {
    model_etiqueta.findByIdAndUpdate(req.body._id, { $set: req.body },
        
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar la etiqueta, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se actualizo la etiqueta de forma correcta`
                    }
                )
            }
        }


    );
};

module.exports.eliminar_etiqueta = function (req, res) {
    model_etiqueta.findByIdAndRemove(req.body._id,
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo eliminar la etiqueta, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se elimino la etiqueta de forma correcta`
                    }
                )
            }
        }


    );
};