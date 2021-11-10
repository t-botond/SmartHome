/**
 * POST paramétert használunk egy szabály mentésére, vagy módosítására.
 * Ha a res.locals.rule rendelkezésre áll, akkor ez egy módosítás különben ez a middleware létrehoz egy entitást.
 * Átirányít a /rule/-ra
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (req.method == "POST") {
            //TODO adatbázis művelet
            return res.redirect('/rule/');
        }
        next();
    };
};