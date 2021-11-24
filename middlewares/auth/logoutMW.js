/**
 * Töröljük a sessionöket, és átirányítjuk a felhasználót a /login-ra
 */


module.exports = function (objectrepository) {
    return function (req, res, next) {
        req.session.destroy(err=>{
            return res.redirect('/login/?err=logout');
        });
    };
};