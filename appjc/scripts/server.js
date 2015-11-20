var http = require('http')
	,sio = require('socket.io');


var app = function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('Servidor de socket para tiempo real');
}

var server = http.createServer(app);
var io = sio.listen(server);


io.sockets.on('connection', function(socket){

	socket.on('chat', function(obj){
		socket.broadcast.emit('chat', obj);
	});

});


var port = 81;
server.listen(port);

console.log('Servidor iniciado por el puerto ' + port);