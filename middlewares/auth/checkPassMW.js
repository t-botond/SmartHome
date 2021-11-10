/**
 *  Ellenőrzi, hogy helyes username, password lett-e megadva.
 *  Ha nem, visszaírányít a loginra, ha helyes, továbbirányít a /-re
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {

        //TODO valamiért nem látok rá a POST adatokra. Ideiglenesen GET-tel helyettesítettem
        if (typeof req.query.password === 'undefined' || typeof req.query.email === 'undefined') {
            next();
        } else {
            if (req.query.password === "asd" && req.query.email === "asd@asd") {
                return res.redirect('/');
            } else {
                res.locals.error="rossz_jelszo";
                return res.redirect('/login');
            }
        }
    };
};