/**
 * Betöltünk egy eszközt az adatbázisból a :devID paraméter alapján
 * Az eredményt mentjük a res.locals.dev-be
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};