/**
 * Egy meglévő alvóidőszakot eltávolítunk az adatbázisból.
 * Tovább irányítjuk a felhasználót -> /
 */


module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof req.params.ruleID === 'undefined') {
            return res.redirect('/rule/?err=Sikertelen_torles');
        }

        res.locals.oneRule.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/rule/?action=rule_deleted');
        });

    };
};