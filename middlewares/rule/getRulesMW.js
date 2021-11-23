/**
 * Betöltjük azösszes alvómódot az adatbázisból
 * Az eredményt mentjük a res.locals.rule-ba
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const RuleModel = requireOption(objectrepository, 'ruleModel');
    return function (req, res, next) {
        RuleModel.find().populate('_devID').exec(function (err,rules){
            if (err) {
                return next(err);
            }
            res.locals.Rulearr = rules;
            return next();
        });

    };
};