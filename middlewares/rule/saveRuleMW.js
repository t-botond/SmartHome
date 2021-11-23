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
                    if(err) return next(err);
                    return res.redirect('/rule/');
                });
            });
        } else{
            if(typeof req.params.ruleID ==='undefined') return next();

            if(typeof req.query.begDay === 'undefined' ||
                typeof req.query.kezdo === 'undefined' || typeof req.query.endDay === 'undefined' || typeof req.query.veg === 'undefined' ) return res.redirect('/rule/');

            const napok=["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];
            console.log(req.query.state)
            if(typeof req.query.state === 'undefined')
                res.locals.oneRule.state = req.query.state=false;
            else
                res.locals.oneRule.state = true;

            let day=0;
            let currentDay= Number(req.query.begDay);
            if( !Number.isNaN(currentDay) && Number(currentDay)>=0 && Number(currentDay)<7) day = Number(currentDay);
            res.locals.oneRule.begDay = napok[day];

            currentDay= Number(req.query.endDay);
            if( !Number.isNaN(currentDay) && Number(currentDay)>=0 && Number(currentDay)<7) day = Number(currentDay);
            res.locals.oneRule.endDay = napok[day];

            res.locals.oneRule.begTime = req.query.kezdo;
            res.locals.oneRule.endTime = req.query.veg;


            res.locals.oneRule.save(error => {
                if(error) return next(error);
                return res.redirect('/rule/');
            });
        }
    };
};