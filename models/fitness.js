const mongoose = require('mongoose');

const ejerciciosSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        min:1,
        max:9999999999
    },
    nombre:{
        type:String,
        required:true,
        min:1,
        max:250
    },
    descripcion:{
        type:String,
        required:true,
        min:1,
        max:250
    }, 
    link:{
    type:String,
    required:true,
    min:1,
    max:500
    },
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: { type: Number},
    created_at: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('ejercicios',ejerciciosSchema);