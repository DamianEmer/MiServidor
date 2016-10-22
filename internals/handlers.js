

var path = require ("path"),
    fs = require ("fs");

//creando manejadorese

var _getFortune = function (req, res){
    res.end("tu fortuna es: come menos y te ira mejor");
}
//creando objeto manejadorese

var handler = {};

//registros de manejadores

handler["/getFortune"] = _getFortune; 

//exportando objeto manejador


module.exports = handler;