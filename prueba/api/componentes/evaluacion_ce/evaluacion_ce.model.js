'use strict';
const mongoose = require('mongoose');


let schema_evaluacion_ce = new mongoose.Schema(
    {
        star1 : {type : String , required : true},
        star2 : {type : String , required: true},
        star3 : {type : String, required: true},
        star4 : {type : String, required: true},
        star5 : {type : String, required: true}
    }
);

module.exports = mongoose.model('evaluacion_ce', schema_evaluacion_ce);