/**
 * A kapcsolót fel, vagy lekapcsoltuk. Mentjük az adatokat.
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (req.method == "GET") {
            if(typeof  req.query.state !== 'undefined')
                res.locals.oneSwitch.state = req.query.state === 'on';

            if(typeof req.query.color !== 'undefined')
                res.locals.oneSwitch.color = '#'+req.query.color;

            res.locals.oneSwitch.save(err => {
                if (err) return next(err);
                return next();
            });
        }
        if (req.method == "POST") {

            if (typeof req.body.devName !== 'undefined' && req.body.devName.length > 0)
                res.locals.oneSwitch.name = req.body.devName;
            if(typeof req.body.devID !== 'undefined' && req.body.devID.length > 0)
                res.locals.oneSwitch.azon = req.body.devID;

            res.locals.oneSwitch.save(err => {
                if (err) return next(err);
                return res.redirect('/');
            });
        }
    };
};