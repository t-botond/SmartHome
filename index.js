let express = require('express');
let app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('static'));

app.use(session({
	secret: 'titkos cica'
}));

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


