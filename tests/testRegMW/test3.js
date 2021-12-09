let expect = require('chai').expect;
let regMW = require('../../middlewares/auth/regMW');

describe('RegMW test' , function (){
    it('Jelszavak nem egyeznek', function (done){
        let req={
            method: "POST",
            body: {
                email: "email@email.email",
                password: "password",
                passwordLast: "Mas"
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
                        done();
                    }
                }
            }
        }

        let mw= regMW(objRepo);
        mw(req,res,function (err){
            expect(res.redirectURL).to.eql("/reg/?err=invalid");
        });

        done();
    });
});