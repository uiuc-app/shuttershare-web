var
express = require("express"),
app= express(),
http = require('http'),
server = http.createServer(app),
path = require('path'),
io = require('socket.io').listen(server, {log : false});

var
groups = {},
count = 0;

app.configure(function() {
    app.set('views', 'views/');
    app.set('view engine', 'jade');
    app.use(express.static(path.resolve('./static')));
});

app.get('/', function(req, res) {
    res.render('index');
});

server.listen(3000);
