const express = require('express');
const ProgramController = require('../controllers/ProgramController');
const api = express.Router();

api.get('/generar', (req, res) => {
    console.log('Programación de servicios');

});

api.post('/', ProgramController.create);
api.get('/allService', ProgramController.getService);

module.exports = api;