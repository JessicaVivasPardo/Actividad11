const express = require('express');
const ClientController = require('../controllers/ClientController');
const api = express.Router();



api.get('/registro', (req, res) => {
    console.log('Clientes registrados');

});

api.post('/', ClientController.create);
api.get('/allClients', ClientController.getClient);

module.exports = api;