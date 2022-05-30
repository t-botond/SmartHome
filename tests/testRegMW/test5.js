let expect = require('chai').expect;
let regMW = require('../../middlewares/auth/regMW');

describe('RegMW test' , function (){
    it('GET kérést kapunk', function (done){
        let req={
            method: "GET"
        };
        let res={
            redirectURL:"",
            redirect: function (url){
                this.redirectURL=url;
            },
            locals: {

            }
        };

        let objRepo={
            userModel: function () {
                return {
                    save:(cb)=>{
                        cb(null);
                        done();
                    }
                }
            }
        }

        let mw= regMW(objRepo);
        mw(req,res,function (err){
            expect(err).to.be.undefined;
            done();
        });
    });
});