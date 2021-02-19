const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProgramSchema = new Schema({
    name: String,
    date: String,
    adress: String,
    tel: Number,
    email: String,
    activity: [
        desinfeccion= Boolean,
        avisos = Boolean,
        fachadas = Boolean,
        reparaciones = Boolean,
        cajeros = Boolean,
        otros = Boolean
    ]
});

module.exports = mongoose.model('Program', ProgramSchema);