/**
 *  Ellenőrzi, hogy helyes username, password lett-e megadva.
 *  Ha nem, visszaírányít a loginra, ha helyes, továbbirányít a /-re
 */
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
    const userModel = requireOption(objectrepository, 'userModel');
    return function (req, res, next) {
        if (req.method == "POST") {
            if (typeof req.body.passwordLast === 'undefined' || typeof req.body.email === 'undefined') {
                return next();
            } else {
                userModel.findOne({email: req.body.email, password: req.body.passwordLast}, (err, User) => {
                    if (err) return next(err);
                    if(!User){
                        res.locals.login={err: "noUserFound"};
                        return res.redirect('/login/?err=noUserFound');
                    }
                    req.session.belepve = true;
                    req.session.user = User;
                    return req.session.save(err=>{
                        return res.redirect('/');
                    });
                });
            }
        }else {
            if(typeof  req.session.belepve !== 'undefined' && req.session.belepve === true)
                return res.redirect('/');
            if(typeof req.query.err !== 'undefined')
                res.locals.login={err: req.query.err};
            next();
        }
    };
};