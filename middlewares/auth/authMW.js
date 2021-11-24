/**
 * Ha a felhasználó be van lépve, nextet hív, különben átirányít -> /login
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {

        if(typeof  req.session.belepve === 'undefined' || req.session.belepve !== true){
            return res.redirect('/login');
        }
        next();
    };
};