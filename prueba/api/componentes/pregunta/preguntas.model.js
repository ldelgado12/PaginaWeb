'use strict';
const mongoose = require('mongoose');

let schema_pregunta = new mongoose.Schema(
    {
        pregunta : {type : String, required : true},
        respuesta : {type : String, required : true},
        estado : {type : String, required : true}
    }
);

module.exports = mongoose.model('Pregunta', schema_pregunta);