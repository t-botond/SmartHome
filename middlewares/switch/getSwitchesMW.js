/**
 * Betöltünk egy eszközt az adatbázisból a :devID paraméter alapján
 * Az eredményt mentjük a res.locals.dev-be
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const SwitchModel = requireOption(objectrepository, 'switchModel');

    return function (req, res, next) {
        SwitchModel.find({}, (err, switches) => {
            if (err) return next(err);
            res.locals.SWarr = switches;

            return next();
        });
    };
};