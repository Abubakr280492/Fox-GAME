var http = require('http');
http.createServer(function(req,res){
    res.write('hey');
    res.end();
}).listen(8080); 