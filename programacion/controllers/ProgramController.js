const Program = require('../models/Program');
/**
 * 
 * @param {*} req => Son todos los parametros que recibimos 
 * @param {*} res => Respuesta que se va a devolver
 */

function create(req, res) {
    var program= new Program();
    var params = req.body;

    program.name = params.name;
    program.date = params.date;
    program.adress = params.adress;
    program.tel = params.tel;
    program.email = params.email;
    program.activity.desinfeccion = params.activity.desinfeccion;
    program.activity.avisos = params.activity.avisos;
    program.activity.fachadas = params.activity.fachadas;
    program.activity.reparaciones= params.activity.reparaciones;
    program.activity.cajeros = params.activity.cajeros;
    program.activity.otros = params.activity.otros;


    program.save((error, programCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!programCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al enviar su solicitud "
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "¡Solicitud exitosa!",
                    dataBase: programCreated
                })
            }
        }
    })
}


function getService(req, res) {
    
    Program.find({  }, (error, allService) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todas las cotizaciones",
                allService: allService

            })
        }
    })
}

module.exports = {
    create,
    getService
}
