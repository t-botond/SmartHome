/**
 * Betöltünk egy alvómódot az adatbázisból a :ruleID paraméter alapján
 * Az eredményt mentjük a res.locals.rule-ba
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};