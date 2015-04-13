//var express = require('express');
//var app = express();
//
//app.use('/', express.static(__dirname + '/public'));
//app.listen(3000, function() { console.log('listening')});

var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<h1>Hello World</h1>');
});

var port = Number(process.env.PORT || 3000);

server.listen(port);
