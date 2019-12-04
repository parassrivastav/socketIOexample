var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var socket=void 0;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(_socket){
  socket=_socket;
});

let i = 0;
setInterval(function() {
  socket &&    socket.emit('increase', {val:i});
  i++;
},1000)
http.listen(port, function(){
  console.log('listening on :' + port);
});
