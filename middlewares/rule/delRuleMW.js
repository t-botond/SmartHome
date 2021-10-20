/**
 * Egy meglévő alvóidőszakot eltávolítunk az adatbázisból.
 * Tovább irányítjuk a felhasználót -> /
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};