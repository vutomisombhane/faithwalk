var http = require('http');
var port = process.env.port || 1337;
var express = require('express');
var app = express();

app.get('/crush', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('My crush is Zendaya Coleman');
});
app.listen(port);
