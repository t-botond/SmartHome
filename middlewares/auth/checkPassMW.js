/**
 *  Ellenőrzi, hogy helyes username, password lett-e megadva.
 *  Ha nem, visszaírányít a loginra, ha helyes, továbbirányít a /-re
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};