
'use strict';
const mongoose = require('mongoose');

let schema_noticias = new mongoose.Schema(
    {
        userid : {type : String, required : true},
        titulo : {type : String, required: true},
        descripcion : {type: String, required: true},
        fecha : {type: Date, required: true}
    }
);

module.exports = mongoose.model('Noticia', schema_noticias);