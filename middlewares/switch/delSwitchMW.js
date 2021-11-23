/**
 * Egy meglévő eszközt eltávolítunk az adatbázisból.
 * Tovább irányítjuk a felhasználót a /rule/-ra
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const RuleModel = requireOption(objectrepository, 'ruleModel');
    return function (req, res, next) {

        if (typeof req.params.modID === 'undefined') {
            return res.redirect('/?err=Sikertelen_torles');
        }
        RuleModel.remove({ _devID: req.params.modID } ).populate('_devID').exec(function (err,rules){
            if (err)  return next(err);

            res.locals.oneSwitch.remove(err => {
                if (err)
                    return next(err);
                return res.redirect('/');
            });

        });

    };
};