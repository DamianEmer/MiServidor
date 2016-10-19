//cargando el modulo http = "";
var 
var http = require ( "http")

//creanndo el server 
var server = http.createServer(function(req, res){
    res.writeHead(
        200,
        {
            //mime type 
            "Content-Type": "text-plain",
            "Server": "buho@0.0.0"
        }
    );
    res.write("Hola desde el server.....");
    res.end();
});                                                                                                                                                                                                                                                                                                            //poniendo a escuchar al server 
server.listen(3000,'127.0.0.1', function(){
    console.log("Server escuchando en "+                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    "http://127.0.0.1:3000/....");
});


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        