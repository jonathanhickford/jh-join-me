var http = require('http');
var fs = require('fs');


var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  	var ojb;
	fs.readFile('link.json', handleFile)
	function handleFile(err, data) {
    if (err) throw err
    obj = JSON.parse(data)
  	res.writeHead(200, { 'Content-Type': 'text/plain' });
 	 res.end('Following: '  + obj.link + '\n');
    // You can now play with your datas
}


}).listen(port);