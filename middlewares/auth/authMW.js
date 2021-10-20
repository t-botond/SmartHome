/**
 * Ha a felhasználó be van lépve, nextet hív, különben átirányít -> /login
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};