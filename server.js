//cargando el modulo http = "";
//cargando la libreria mime
var mime = require("mime");
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

    var urlPath = req.url;/// se queda el mismo y lo manejo por medio de un if 
    
    if (urlPath == '/'){// || urlPath == '/index.html'){
        //GENERA UNA RUTA HACIA EL INDEX.HTML
        urlPath = path.resolve(`./static/index.html`);
        //res.end(`> se sirve ${urlPath}`);

       /* urlPath = `./static/index.html`
        fs.readFile(urlPath, 'utf8',function(err, content){
            //cont +=1
            if(err){
                throw err;
                //console.log("Hubo un error");
            }   
           res.writeHead(
                200,
                {
                    'Content-Type': 'text/html',
                    'Server':'Buho@0.0.2'
                }
            );
            //res.write("<p>visitas el dia de hoy</p>"+cont)
            cont++;
            content = content.replace('visitas',cont.toString());
            res.end(content);
         })
    }else{
        res.writeHead(
            200,
            {
                'Content-Type': 'text/html',
                'Server': 'Buho@0.0.2' 
            }
        );
        res.end('<marquee><h1 style="color: orange">EN CONSTRUCCION!!!</h1></marquee>');
    */}else{
        //GENERA UNA RUTA DENTRO DE STATIC
        urlPath = path.resolve(config.STATIC_PATH + urlPath);//resolve concatenea las dos y crea una ruta completa de los archivos
        //res.end(`> se sirve ${urlPath}`);
    }
    //EXTRAYENDO LA EXTENSION DE LO QUE VAMOS A SERVIR 
    var extname = path.extname(urlPath);
   //antes del switch ...... res.end(`> extension a servir: ${extname}`);
    //seleccionar en content ttpe 
    var contentType = mime.lookup(urlPath); //CAMBIANDO POR SWITCH .....todo lo de static es publico al cliente
    
    /*'text/plane'
    switch(extname){
        case '.html':
        contentType = 'text/html';
        break;
        case '.js':
        contentType = 'text/javascript';
        break;

        case '.css':
        contentType = 'text/css';
        break;
    };*/

    fs.exists(urlPath,function(exists){
        if(!exists){
            //no existe  ``
            res.writeHead(404,{
                'Content-Type': 'text/html' ///para estas comillas es alt + 39
            })
            res.end("<h1>404 NOT FOUND....:( </h1>");
        }else{
            //si existe
            //leemos el archivo y lo servimos....
            //------------res.end(` ${urlPath} existe`);///estas comillas son alt + 96
            fs.readFile(urlPath, function(err, content){
                if(err){
                    res.writeHead(500,{
                        'Content-Type':'text/html'
                    });
                    res.end(`<h1 style="color:red">500 ERROR</h1>`);
                }else{
                    //si pudo leer el archivo...
                    res.writeHead(200,{
                        'Content-Type': contentType
                    });
                    res.end(content);
                }
            });
        }
    });

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
        console.log("Haciendo cambios con el servidor activado....Hola");
    });
