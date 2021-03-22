class User{
    constructor(userid,password){
        this.userid = userid;
        this.password = password;
        this.otp = '';
        this.otpexpiry = undefined;
    }
}
module.exports = User;