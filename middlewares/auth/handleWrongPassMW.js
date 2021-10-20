/**
 *  Rossz jelszó esetén hibaüzenetet kell hagynunk.
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};