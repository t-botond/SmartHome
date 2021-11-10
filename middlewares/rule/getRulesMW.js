/**
 * Betöltjük azösszes alvómódot az adatbázisból
 * Az eredményt mentjük a res.locals.rule-ba
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {

        //Próbaadatok
        res.locals.arr=[
            {name: "Asztal",    id: "rule1", isActice: true, begDay: 2, endDay: 3, begTime: "20:00", endTime: "08:00"},
            {name: "Lámpa",     id: "rule2", isActice: false,begDay: 4, endDay: 6, begTime: "22:00", endTime: "06:00"},
            {name: "Földgömb",  id: "rule3", isActice: true, begDay: 3, endDay: 4, begTime: "21:00", endTime: "08:00"},
            {name: "Érzékelő",  id: "rule4", isActice: false,begDay: 1, endDay: 1, begTime: "10:00", endTime: "20:00"}
        ];
        next();
    };
};