import { createServer } from 'http';

createServer(function(req, res){
    res.write('Hello World!2');
    res.end();
}).listen(8080);