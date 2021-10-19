var express = require('express');
var app = express();

app.use(express.static('static'));

const port = 3000

var server = app.listen(port, function () {
	console.log("On: "+port);
});