/**
 *  Ellenőrzi, hogy helyes username, password lett-e megadva.
 *  Ha nem, visszaírányít a loginra, ha helyes, továbbirányít a /-re
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (req.method == "POST") {
            if (typeof req.body.passwordLast === 'undefined' || typeof req.body.email === 'undefined') {
                next();
            } else {
                if (req.body.passwordLast === "asd" && req.body.email === "asd@asd") {
                    return res.redirect('/');
                } else {
                    res.locals.error = "rossz_jelszo";
                    return res.redirect('/login');
                }
            }
        }else
            next();
    };
};