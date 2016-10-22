//cargando el modulo http = "";
//cargando la libreria mime
var mime = require("mime");
//cargando servidor estatico
var staticServer = require ("./internals/static-server.js");
//cargando el manejador

var handlers = require ("./internals/handlers");

var colors = require('colors');
var http = require ( "http");
//cargamdo libreria path +
var path = require("path");

var fs = require ("fs");//LECTURA DEL ARCHIVO
//generando un tema propio----
colors.setTheme({
    silly : 'rainbow',
    input : 'grey',
    verbose : 'cyan',
    prompt : 'grey',
    info : 'green',
    data : 'grey',
    help : 'cyan',
    warn : ['yellow','rainbow'],
    debug : 'blue',
    error : 'red',
    achivement : 'rainbow'
});


///obteniendo configuraciones
var config = require('./config/config');
var IP = config.IP;
var PORT = config.PORT;

var cont = 0;



//creanndo el server 
var server = http.createServer(function(req, res){

   //var cont = 0;

    var url = req.url;/// se queda el mismo y lo manejo por medio de un if 
    console.log(`url solicitudes: ${url}`);
    if(url == "/"){
        url = "/index.html";
    } //else{
        if (typeof(handlers[url])=== `function`){
            handlers[url](req, res);
        }else{
            console.log("servimos estaticamente");
            staticServer.serve(url, res);
        }

         
    //}

    /*
    console.log(`> url solicitudes: ${urlPath}`.color);
    res.writeHead(
        200,
        {
            //mime type 
            //"Content-Type": "text-plain",
            "Content-Type":"text/html",
            "Server": "buho@0.0.0"
        }
    );
   // res.write("Hola desde el server.....");
   res.write(content);//MOSTRANDO RESPUESTA 
   res.write(`${urlPathD}`);
   res.write("<h1>Damian Emer</h1>");
   res.write('<p style = "color:blue">Soy amante de las tics/n');
   res.write('y vivo en orizaba veracruz</p>');
    res.end();
});   *///  poniendo a escuchar al server 

});
    server.listen(3000,'127.0.0.1', function(){

    //server.listen(PORT, IP, function(){
        console.log("Server escuchando en "+
        `http://${IP}:${PORT}/....`);
        console.log("Haciendo cambios con el servidor activado...");
    });
