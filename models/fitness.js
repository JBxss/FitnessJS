const mongoose = require('mongoose');

const ejerciciosSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        min: 1,
        max: 9999999999
    },
    nombre: {
        type: String,
        required: true,
        min: 1,
        max: 250
    },
    descripcion: {
        type: String,
        required: true,
        min: 1,
        max: 250
    },
    link: {
        type: String,
        required: true,
        min: 1,
        max: 500
    },
    filename: { type: String },
    path: { type: String },
    originalname: { type: String },
    mimetype: { type: String },
    size: { type: Number },
    created_at: { type: Date, default: Date.now() },
    musculos: {
        deltoides: { type: Number, default: 0 },
        pectoral: { type: Number, default: 0 },
        biceps_braquial: { type: Number, default: 0 },
        biceps_femoral: { type: Number, default: 0 },
        triceps_braquial: { type: Number, default: 0 },
        aductores: { type: Number, default: 0 },
        dorsal_ancho: { type: Number, default: 0 },
        masa_comun_extensores_columna: { type: Number, default: 0 },
        cuadrado_lumbar: { type: Number, default: 0 },
        recto_femoral: { type: Number, default: 0 },
        basto_interno: { type: Number, default: 0 },
        basto_exterior: { type: Number, default: 0 },
        basto_intermedio: { type: Number, default: 0 },
        tensor_fascia_lata: { type: Number, default: 0 },
        gluteo_mayor: { type: Number, default: 0 },
        gluteo_medio: { type: Number, default: 0 },
        gluteo_menor: { type: Number, default: 0 },
        piriforme: { type: Number, default: 0 },
        gastrocnemio: { type: Number, default: 0 },
        soleo: { type: Number, default: 0 },
        tibial_anterior: { type: Number, default: 0 },
        tibial_posterior: { type: Number, default: 0 },
        recto_abdominal: { type: Number, default: 0 },
        transverso_abdomen: { type: Number, default: 0 },
        oblicuo_externo: { type: Number, default: 0 },
        oblicuo_interno: { type: Number, default: 0 },
        supraespinoso: { type: Number, default: 0 },
        serrato_anterior: { type: Number, default: 0 },
        subescapular: { type: Number, default: 0 },
        redondo_menor: { type: Number, default: 0 },
        redondo_mayor: { type: Number, default: 0 },
        infraespinoso: { type: Number, default: 0 },
        romboides_mayor: { type: Number, default: 0 },
        romboides_menor: { type: Number, default: 0 },
        trapecio: { type: Number, default: 0 },
        pectoral_menor: { type: Number, default: 0 },
        braquial_radial: { type: Number, default: 0 },
        musculos_epicondileos_mediales: { type: Number, default: 0 },
        musculos_epicondileos_laterales: { type: Number, default: 0 },
        semitendinoso: { type: Number, default: 0 },
        semimembranoso: { type: Number, default: 0 },
        multifidos_lumbares: { type: Number, default: 0 },
        gracil: { type: Number, default: 0 },
        sartorio: { type: Number, default: 0 },
    }
});

module.exports = mongoose.model('ejercicios', ejerciciosSchema);