var express = require('express');
var app = express();

app.use(express.static('static'));

//Load routing
require('./route/index')(app);

const port = 3000

var server = app.listen(port, function () {
	console.log("On: "+port);
});