/**
 * Betöltünk egy alvómódot az adatbázisból a :ruleID paraméter alapján
 * Az eredményt mentjük a res.locals.rule-ba
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
    const RuleModel = requireOption(objectrepository, 'ruleModel');

    return function (req, res, next) {
        RuleModel.findOne({_id: req.params.ruleID}, (err, Rule) => {
            if (err || !Rule) return next(err);
            res.locals.oneRule = Rule;
            return next();
        });
    };
};