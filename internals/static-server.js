//cargar librerias

var fs = require("fs"), 
    config = require(`../config/config.js`),
    mime = require ("mime"),
    path = require ("path");

//exportar funcionalidad de server estatico de archivos 

exports.serve = function(urlPath, res){
   
   
   
   /* if (urlPath == '/'){// || urlPath == '/index.html'){
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
    }else{
        //GENERA UNA RUTA DENTRO DE STATIC
       
        //res.end(`> se sirve ${urlPath}`);
    }
    */



     var urlPath = path.resolve(config.STATIC_PATH + urlPath);//resolve concatenea las dos y crea una ruta completa de los archivos******HIBA DENTRO DE ELSE DE ARRIBA
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
            res.end("<h1>404 NOT FOUND....:( </h1>"); //yo comente fuera de clase
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

};
