const Schema = require('mongoose').Schema;
const db= require('../config/db');

const Switch = db.model('Switch', {
    name: String,
    state: Boolean,
    color: String,
    sensor: Boolean,
    azon : String
});

module.exports=Switch;



