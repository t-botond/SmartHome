
const SwitchModel= require('./models/user');
const Rule = require('./models/rule');
const Switch = require('./models/switch');
/*
let user1= new SwitchModel();
user1.name="Botond";
user1.email="turaibotond9911@gmail.com";
user1.password="Faszaa";

user1.save((err)=>{
	 console.log(err);
});
 */
/*
let switch1 = new Switch();

switch1.name="Hálószoba";
switch1.state=false;
switch1.azon = "0x9247fa2"
switch1.save(error =>  {
	console.log(error);
});

/*
let rule1 = new Rule();
rule1.state=true;
rule1.begDay="Kedd";
rule1.endDay="Szerda";
rule1.begTime="22:00";
rule1.endTime="08:00";
rule1._devID=switch1;

rule1.save((err) =>{
	console.log(err);
});
*/

var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

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
