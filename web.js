var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  //response.send('Hello World 2!');
  //var index_buff = fs.readFile("index.html")
  //response.send(index_buff.toString())
  response.send('Ania');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
