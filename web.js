var express = require('express');
var fs = require('fs');

var filename = "./index.html";
var buffer;

fs.exists(filename, function(exists) {
    if (exists) {

	buffer = fs.readFileSync(filename, null);

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
