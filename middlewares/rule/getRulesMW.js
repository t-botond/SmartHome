/**
 * Betöltjük azösszes alvómódot az adatbázisból
 * Az eredményt mentjük a res.locals.rule-ba
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};