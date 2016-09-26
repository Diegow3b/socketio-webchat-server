
var io = require('socket.io'),
    http = require('http'),
    server = http.createServer(),
    io = io.listen(server);

var user; 

io.on('connection', function(socket) {       
    console.log('User Connected');
    socket.on('data', function(data){
        io.emit('data', data);             
    });
});

server.listen(3000, function(){
    console.log('Server started');
})

// Open Shift Config
// var express = require('express')  
// , app = express()
// , server = require('http').createServer(app)
// , io = require("socket.io").listen(server)
// app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);  
// app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");  

// io.on('connection', function(socket) {       
//     console.log('User Connected');
//     socket.on('message', function(msg){
//         io.emit('message', msg);
//     });
//     socket.on('user', function(user){        
//         this.user = user;   
//     });
// });

// server.listen(app.get('port'), app.get('ipaddr'), function(){
// 	console.log('Express server listening on  IP: ' + app.get('ipaddr') + ' and port ' + app.get('port'));
// });

