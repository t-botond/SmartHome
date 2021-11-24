/**
 * Új felhasználó regisztrálása
 */
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
    const userModel = requireOption(objectrepository, 'userModel');
    return function (req, res, next) {
        if (req.method == "POST") {
            if(typeof req.body.email === 'undefined' || typeof req.body.password === 'undefined' || !validateEmail(req.body.email) || req.body.passwordLast!==req.body.password || typeof req.body.passwordLast === 'undefined')
                return res.redirect('/reg/?err=invalid');

            let user1= new userModel();
            user1.email=req.body.email;
            user1.password=req.body.password;

            user1.save((err)=>{
                if(err) console.log(err);
                return res.redirect('/login/?err=suc');
            });

        }else
        next();
    };
};
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}