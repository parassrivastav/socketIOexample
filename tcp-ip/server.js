var net = require('net');

var server = net.createServer();


server.on('connection',socket=>{
	console.log(`Client connected`);
	socket.write(`welcome to server`);

	socket.on('data',data=>{
		//console.log(data);
		console.log('server');
		socket.write('from ..server.. to ..client..');
		//socket.write(data);
		console.log(data.toString());
	})

	socket.on(`end`,()=>{
		console.log('Client Disconnected');
	})
})

server.listen(1337,()=>{
	console.log("server running");
});
