var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('static'));

//Load routing
require('./route/index')(app);

app.use((err, req, res, next) => {
	res.end('Problem...');
	console.log(err);
});

const port = 3000
app.listen(port, function () {
	console.log("On: "+port);
});