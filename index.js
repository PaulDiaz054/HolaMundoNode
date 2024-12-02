//protocolo de intercambio
var http = require('http');
//creando el servidor
var server = http.createServer();

//servicio web
function mensaje(request, response ){
    response.writeHead(200, {'content-type':'text/plain'});
    response.write('Hola mundo');
    response.end();
}

server.on('request', mensaje);
server.listen(3000, function(){
    console.log('la solicitud fue realizada');
});