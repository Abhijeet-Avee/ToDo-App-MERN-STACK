const UserModel = require('../schema/user');
const encryptObj = require('../../utils/encrypt');
const userOperations = {
    add(userObject){
        userObject.password = encryptObj.encrypt(userObject.password);
        let promise = UserModel.create(userObject); //insert record in users using create with param userobjects
        return promise;
    },
    search(userObject){
        const pr = new Promise((resolve,reject)=>{
            UserModel.findOne({userid:userObject.userid},(err,doc)=>{
                if(doc && doc.userid){
                    let dbPassword = doc.password;
                    let plainPassword = userObject.password;
                    let result = encryptObj.compare(dbPassword,plainPassword);
                    if(result){
                        resolve({message:'Welcome '+userObject.userid});
                    }
                    else{
                        resolve({message:'Invalid Userid or Password'});   
                    }
                }
                else{
                    resolve({message:'Invalid Userid or Password'});
                }
            });
        });
        return pr;
    },
    verifyOTP(otpNo){
        const promise = UserModel.findOne({otp:otpNo,otpexpiry:{$gt:Date.now()},verified:'N'});
        return promise;
    },
    async alreadyVerified(otpNo){
        const result = await UserModel.findOne({otp:otpNo,otpexpiry:{$gt:Date.now()},verified:'Y'});
        return result;
    },
    updateVerification(doc){
        doc.verified = 'Y';
        const promise = doc.save();
        return promise;
    },
    update(){

    },
    remove(){

    }
};
module.exports = userOperations;