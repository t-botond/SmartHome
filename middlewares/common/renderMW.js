/**
 * Megjelenítünk valamilyen statikusan előkészített html fájlt
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};