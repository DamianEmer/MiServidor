//cargando el modulo http = "";
var colors = require('colors');
var http = require ( "http");

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

//creanndo el server 
var server = http.createServer(function(req, res){

   

    var path = req.url;/// se queda el mismo y lo manejo por medio de un if 
    
    if (path == '/index' || path == '/index.html'){
        path = `static/index.html`;
        fs.readFile(path, 'utf8',function(err, content){
            if(err){
                throw err;
            }
            res.writeHead(
                200,
                {
                    'Content-Type': 'text/html',
                    'Server':'Buho@0.0.2'
                }
            );
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
    }
    /*
    console.log(`> url solicitudes: ${path}`.color);
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
   res.write(`${pathD}`);
   res.write("<h1>Damian Emer</h1>");
   res.write('<p style = "color:blue">Soy amante de las tics/n');
   res.write('y vivo en orizaba veracruz</p>');
    res.end();
});   *///  poniendo a escuchar al server 
    server.listen(3000,'127.0.0.1', function(){

    //server.listen(PORT, IP, function(){
        console.log("Server escuchando en "+
        `http://${IP}:${PORT}/....`);
        console.log("Haciendo cambios con el servidor activado....Hola");
    });
});