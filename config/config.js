//Un vez tenga todo lo anterior... Mis configuraciones

// exports.numero0=10
// exports.numero1=11;

// //exportando por bloque

// module.exports = 10;


/////////////////////////////



module.exports = {
    'IP' :  process.env.IP ||  '127.0.0.1',
    'PORT' : process.env.PORT || 3000,  ///sino existe habra que asignarle una por defecto
    'STATIC_PATH' : './static'
};