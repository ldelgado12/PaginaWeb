'use strict';

const model_noticias = require('./noticias.model');

module.exports.registrar_noticias = (req, res) => {
    let noticia_nueva = new model_noticias(
        {
            userid: req.body.userid,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            fecha: req.body.fecha
        }
    );

    noticia_nueva.save(
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo registrar la noticia, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se registró la noticia de forma correcta`
                    }
                )
            }
        }

    );
};


module.exports.consultar_noticias = (req, res) => {
    model_noticias.find({userid: req.body.userid}).then(
        function (noticias) {
            if (noticias) {
                res.json(
                    {
                        success: true,
                        noticias: noticias
                    }
                )
            } else{
                res.json(
                    {
                        success: false,
                        noticias: `Error, no se encontraron noticias: ${noticias}`
                    }
                )
            }
        }

    )
};


module.exports.eliminar_noticia = function (req, res) {
    model_noticias.findByIdAndRemove(req.body._id,
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo eliminar la noticia, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se elimino la noticia de forma correcta`
                    }
                )
            }
        }


    );
};


module.exports.buscarnoticia_noticiaid = (req, res) => {
    model_noticias.find({ _id: req.body.noticia_id }).then(
        function (noticias) {
            if (noticias) {
                res.json(
                    {
                        success: true,
                        noticias: noticias
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        noticias: noticias
                    }
                )
            }
        }

    )
};

module.exports.actualizar_noticia = function (req, res) {
    model_noticias.findByIdAndUpdate(req.body._id, { $set: req.body },
        
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo actualizar la noticia, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se actualizo la noticia de forma correcta`
                    }
                )
            }
        }


    );
};
