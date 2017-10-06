var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.send("Hi")
    // res.sendFile(__dirname + '/index.html');
});

 // io.on('connection', function(socket){
//
//     console.log('a user connected');
// });

io.on('connection', function(socket){
     socket.on('game_play', function(msg){
        console.log('message: ' + msg);
        console.log(msg.data.action);

        io.emit('game_play', msg);
    });
});
http.listen(2525, function(){
    console.log('listening on *:2525');
});

