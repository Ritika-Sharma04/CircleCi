const http = require('http');

http.createServer(function (req, res){
    res.write('HelloWorld!');
    res.end();
}).listen (8000, '0.0.0.0');