/**
 * POST paramétert használunk egy szabály mentésére, vagy módosítására.
 * Ha a res.locals.dev rendelkezésre áll, akkor ez egy módosítás különben ez a middleware létrehoz egy entitást.
 * Átirányít -> /
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
    const SwitchModel = requireOption(objectrepository, 'switchModel');
    return function (req, res, next) {
        if (req.method == "POST") {
            if (typeof req.body.devName === 'undefined' || typeof req.body.devID === 'undefined' || typeof req.body.devType === 'undefined') {
                res.locals.badForm = {err: "MissingField"};
                console.log("Hiányzó mező ");
                return next();
            }
            let switch1 = new SwitchModel();

            switch1.name=req.body.devName;
            switch1.state=false;
            switch1.azon = req.body.devID;
            if(req.body.devType.toString() === "3") switch1.color = '#0398fc';
            if(req.body.devType.toString() === "2") switch1.sensor = true;

            switch1.save(error =>  {
                console.log(error);
                return res.redirect('/');
            });

        }else next();

    };
};