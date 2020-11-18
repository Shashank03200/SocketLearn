var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
    console.log('A user connected');
    socket.on('disconnect', function(){
        console.log('A user disconnected');
    })
})

http.listen(3000, ()=>{
    console.log('Listening on port 3000.');
})