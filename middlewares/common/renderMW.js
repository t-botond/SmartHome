/**
 * Megjelenítünk valamilyen statikusan előkészített html fájlt
 */

module.exports = function (objectrepository, viewName) {
    return function(req, res) {
        res.render(viewName);
    };
};