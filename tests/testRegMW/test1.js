let expect = require('chai').expect;
let regMW = require('../../middlewares/auth/regMW');

describe('RegMW test' , function (){
    it('Regisztacio sikeresen vegbemegy', function (done){
        let req={
            method: "POST",
            body: {
                email: "email@email.email",
                password: "password",
                passwordLast: "password"
            }
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

                        expect(res.redirectURL).to.eql("/login/?err=suc");
                        done();
                    }
                }
            }
        }

        let mw= regMW(objRepo);
        mw(req,res,function (err){});
    });
});