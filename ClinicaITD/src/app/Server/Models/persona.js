const mongoose = require('mongoose');
const { Schema } = mongoose;

new Schema({
    nombre: {type: String, required: true},
    edad: {type: Number, required: true},
    fechaNacimiento: {type: Date, required: true},
    nacionalidad: {type: String, required: true},
    domicilio: {type: String, required: true},
    telefono: {type: Number, required: true}
})