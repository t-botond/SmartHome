/**
 * A kapcsolót fel, vagy lekapcsoltuk. Mentjük az adatokat.
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (req.method == "GET") {
            res.locals.item = {id: req.params.modID };
        }
        if (req.method == "POST") {
            //TODO mentünk az adatbázisba
            return res.redirect('/');
        }
        next();
    };
};