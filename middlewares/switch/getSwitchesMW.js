/**
 * Betöltünk egy eszközt az adatbázisból a :devID paraméter alapján
 * Az eredményt mentjük a res.locals.dev-be
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {

        //Próbaadatok
        res.locals.arr=[
                {name: "Asztal", id: "devID1"},
                {name: "Lámpa", id: "devID2"},
                {name: "Földgömb", id:"devID3" , color: "#199CC8"},
                {name: "Érzékelő", id:"devID4" , sensor: true}
        ];
        next();
    };
};