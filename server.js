var http = require('http');
var port = process.env.port || 1337;
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.writeHead(200, {"Content-Type": 'text/plain '});
    res.end("This is my default endpoint");
});

app.get('/hello', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello GitHub. This is my repository.');
});
app.listen(port);
