let expect = require('chai').expect;
let delRuleMW = require('../../middlewares/rule/delRuleMW');

describe('delRuleMW test' , function (){
    it('Kapunk ID-t', function (done){
        let req={
            params:{
                ruleID: 'meh'
            }
        };
        let res={
            redirectURL:"",
            redirect: function (url){
                this.redirectURL=url;
            },
            locals: {
                oneRule:{
                    remove : function (cb) {
                        cb(false);
                    }
                }
            }
        };

        let objRepo={}

        let mw= delRuleMW(objRepo);
        mw(req,res,function (err){
            expect(err).to.be.undefined;
        });

        expect(res.redirectURL).to.be.eql("/rule/?action=rule_deleted");
        done();

    });
});