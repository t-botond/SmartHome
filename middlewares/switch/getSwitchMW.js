/**
 * Betöltjük azösszes eszközt az adatbázisból
 * Az eredményt mentjük a res.locals.dev-be
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
    const SwitchModel = requireOption(objectrepository, 'switchModel');

    return function (req, res, next) {
        SwitchModel.findOne({_id: req.params.modID}, (err, sw) => {
            if (err || !sw) return next(err);
            res.locals.oneSwitch = sw;

            return next();
        });
    };
};