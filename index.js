var http = require('http');
var fs = require('fs')

var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
		fs.readFile('./index.html', 'utf-8', function(err, data) {
			response.write(data)
			response.end();  	
		})
        
    } else {
		response.statusCode = 404;
		response.write('<img src="https://s3.envato.com/files/241000411/15%20Preview%20Image%20590x332.jpg">');
		response.end();
    }
});

server.listen(9000);