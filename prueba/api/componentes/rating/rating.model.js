'use strict';
const mongoose = require('mongoose');

let schema_rating = new mongoose.Schema(
    {
        userid : {type : String, required : true},
        centroid : {type : String, required : true},
        comentario : {type : String, required : true},
        rating :{type : Number, required : true},
        fecha :{type : Date, required : true}
    }
);

module.exports = mongoose.model('Rating', schema_rating);