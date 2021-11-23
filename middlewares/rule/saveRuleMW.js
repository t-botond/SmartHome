/**
 * POST paramétert használunk egy szabály mentésére, vagy módosítására.
 * Ha a res.locals.rule rendelkezésre áll, akkor ez egy módosítás különben ez a middleware létrehoz egy entitást.
 * Átirányít a /rule/-ra
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
    const RuleModel = requireOption(objectrepository, 'ruleModel');
    const SwitchModel = requireOption(objectrepository, 'switchModel');

    return function (req, res, next) {
        if (req.method == "POST") {
            if (typeof req.body.devID === 'undefined') {
                res.locals.badForm = {err: "MissingField"};
                console.log("Hiányzó mező ");
                return next();
            }

            SwitchModel.findOne({_id: req.body.devID}, (err, sw) => {
                if (err || !sw) return next(err);

                let rule1 = new RuleModel();
                rule1.state=false;
                rule1.begDay="Hétfő";
                rule1.endDay="Hétfő";
                rule1.begTime="00:00";
                rule1.endTime="00:00";

                rule1._devID=sw;

                rule1.save((err) =>{
                    console.log(err);
                    return res.redirect('/rule/');
                });
            });
        } else
            next();
    };
};