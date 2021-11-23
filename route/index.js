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
const modSwitchMW = require('../middlewares/switch/modSwitchMW');
const regMW = require('../middlewares/auth/regMW');


const ruleModel = require('../models/rule');
const switchModel = require('../models/switch');
const userMode = require('../models/user');

module.exports = function (app) {
    const objRepo = {
        ruleModel: ruleModel,
        switchModel: switchModel,
        userMode: userMode
    };

    app.use('/login',
        checkPassMW(objRepo),
        handleWrongPassMW(objRepo),
        renderMW(objRepo, 'login'));

    app.use('/dev/add',
        authMW(objRepo),
        saveSwitchMW(objRepo),
        renderMW(objRepo, 'newItem'));


    app.use('/dev/mod/:modID',
        authMW(objRepo),
        getSwitchMW(objRepo),
        modSwitchMW(objRepo),
        renderMW(objRepo, 'modify'));

    app.use('/dev/remove/:modID',
        authMW(objRepo),
        getSwitchMW(objRepo),
        delSwitchMW(objRepo, 'delete'));

    app.get('/rule',
        authMW(objRepo),
        getRulesMW(objRepo),
        renderMW(objRepo, 'sleep'));
    app.use('/rule/mod/:ruleID',
        authMW(objRepo),
        getRuleMW(objRepo),
        saveRuleMW(objRepo),
        renderMW(objRepo, 'sleep'));
    app.use('/rule/add',
        authMW(objRepo),
        getRulesMW(objRepo),
        getSwitchesMW(objRepo),
        saveRuleMW(objRepo),
        renderMW(objRepo, 'newRule'));
    app.get('/rule/remove/:ruleID',
        authMW(objRepo),
        getRuleMW(objRepo),
        delRuleMW(objRepo, 'sleep'));
    app.get('/logout',
        logoutMW(objRepo));
    app.use('/reg',
        regMW(objRepo),
        renderMW(objRepo, 'reg')
        );
    app.use('/',
        authMW(objRepo),
        getSwitchesMW(objRepo),
        renderMW(objRepo, 'index'));



}