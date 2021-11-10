const Schema = require('mongoose').Schema;
const db= require('../config/db');

const Rule = db.model('Rule', {
    state: Boolean,
    begDay: String,
    endDay: String,
    begTime: String,
    endTime: String,
    _devID : {
        type: Schema.Types.ObjectId,
        ref: 'Switch'
    }
});

module.exports=Rule;

