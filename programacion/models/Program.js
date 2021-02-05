const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProgramSchema = new Schema({
    name: String,
    date: String,
    adress: String,
    tel: Number,
    email: String

});

module.exports = mongoose.model('Program', ProgramSchema);