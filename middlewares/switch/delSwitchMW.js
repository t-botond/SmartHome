/**
 * Egy meglévő eszközt eltávolítunk az adatbázisból.
 * Tovább irányítjuk a felhasználót a /rule/-ra
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};