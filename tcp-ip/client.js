var net = require('net');

var socket = new net.Socket();
socket.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
	socket.write('This is socket.');
});

socket.on('data', function(data) {
	console.log(data+"");
	console.log('client');
	socket.write('from ..client.. to ..server..');
	socket.destroy(); // kill socket after server's response
});
//
// socket.on('close', function() {
// 	console.log('Connection closed');
// });
