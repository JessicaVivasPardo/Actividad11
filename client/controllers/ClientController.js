const Client = require('../models/Client');

/**
 * 
 * @param {*} req => Son todos los parametros que recibimos 
 * @param {*} res => Respuesta que se va a devolver
 */
function create(req, res) {
    var client = new Client();
    var params = req.body;

    client.name = params.name;
    client.email = params.email;
    client.message = params.message;
    client.tel = params.tel;
    client.sevice=params.sevice;

    client.save((error, clientCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!clientCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al enviar su solicitud "
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "¡Solicitud exitosa!",
                    dataBase: clientCreated
                })
            }
        }

    })
}


function getClient(req, res) {
    
    Client.find({  }, (error, allClients) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todas las cotizaciones",
                allClients: allClients
            })
        }
    })
}

module.exports = {
    create,
    getClient
}