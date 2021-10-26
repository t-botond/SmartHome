const authMW = require('../middlewares/auth/authMW');
const checkPassMW = require('../middlewares/auth/checkPassMW');
const logoutMW = require('../middlewares/auth/logoutMW');
const handleWrongPassMW = require('../middlewares/auth/handleWrongPassMW');
const renderMW= require('../middlewares/common/renderMW');
const delRuleMW = require('../middlewares/rule/delRuleMW');
const getRuleMW = require('../middlewares/rule/getRuleMW');
const getRulesMW = require('../middlewares/rule/getRulesMW');
const saveRuleMW = require('../middlewares/rule/saveRuleMW');
const delSwitchMW = require('../middlewares/switch/delSwitchMW');
const getSwitchesMW = require('../middlewares/switch/getSwitchesMW');
const getSwitchMW = require('../middlewares/switch/getSwitchMW');
const saveSwitchMW = require('../middlewares/switch/saveSwitchMW');

module.exports = function (app) {
    const objRepo = {};

    app.use('/login',
        checkPassMW(objRepo),
        handleWrongPassMW(objRepo),
        renderMW(objRepo, 'login'));
    app.use('/dev/add',
        authMW(objRepo),
        saveSwitchMW(objRepo),
        renderMW(objRepo, 'newItem'));
    app.get('/dev/mod',
        authMW(objRepo),
        renderMW(objRepo, 'modify'));
    app.use('/dev/remove/:devID',
        authMW(objRepo),
        getSwitchMW(objRepo),
        delSwitchMW(objRepo, 'newItem'));
    app.get('/rule',
        authMW(objRepo),
        getRulesMW(objRepo),
        renderMW(objRepo, 'sleep'));
    app.post('/rule/mod/:ruleID',
        authMW(objRepo),
        getRuleMW(objRepo),
        saveRuleMW(objRepo),
        renderMW(objRepo, 'sleep'));
    app.use('/rule/add',
        authMW(objRepo),
        saveRuleMW(objRepo),
        renderMW(objRepo, 'newRule'));
    app.get('/rule/remove/:ruleID',
        authMW(objRepo),
        getRuleMW(objRepo),
        delRuleMW(objRepo, 'sleep'));
    app.get('/logout',
        logoutMW(objRepo));

    app.get('/',
        authMW(objRepo),
        getSwitchesMW(objRepo),
        renderMW(objRepo, 'index'));


}