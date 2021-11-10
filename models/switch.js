const Schema = require('mongoose').Schema;
const db= require('../config/db');
const mongoose = require("mongoose");

const Switch = db.model('Switch', {
    name: String,
    state: Boolean,
    color: String,
    sensor: Boolean
});

module.exports=Switch;



