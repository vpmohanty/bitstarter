var express = require('express');
var fs = require("fs");

var filename = "./index.html";
var buffer;

fs.exists(filename, function(exists) {
    if (exists) {
	fs.stat(filename, function(error, stats) {
	    buffer = new Buffer(stats.size);

	    buffer = fs.readFile(filename, function(err, data) {
		if (err) throw err;
		
		console.log(data);
	    });	   

	    
	});
    }
});


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send( buffer.toString() );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
