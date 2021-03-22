const { request, response } = require('express');
const express = require('express');
const route = express.Router();
const User = require('../models/user');
const userOperations = require('../db/helpers/usercrud');
const otp = require('../utils/otp');

route.get('/verify/:otp', async (req, res) => {
    const otp = req.params.otp;
    try {
        const result = await userOperations.alreadyVerified(otp);
        if (result) {
            res.json({ message: 'Already Verified User' });
            return;
        }
    }
    catch (e) {
        console.log('Error in Already Verified ', e);
    }
    const promise = userOperations.verifyOTP(otp);
    promise.then(doc => {
        const pr = userOperations.updateVerification(doc);
        pr.then(data => {
            res.json({ message: 'Verified '+otp });
        }).catch(err => {
            console.log('Error in OTP verification updation ',err);
            res.json({ message: 'Not Verified, Not Updated' });
        });
    }).catch(err => {
        console.log('Error in OTP verification ',err);
        res.json({ message: 'Not Verified ' + otp });
    });
});

route.post('/reactregister', (request, response) => {
    let emailid = request.body.userid;
    let password = request.body.password;
    const userObject = new User(emailid, password);
    userObject.otp = otp();
    let oneHour = 36000000;
    userObject.otpexpiry = Date.now() + oneHour;
    const promise = userOperations.add(userObject);
    promise.then(data => {
        const mail = require('../utils/mail');
        mail(emailid, response, userObject.otp);
        //response.json({message:'Registered SuccessFully'});
    }).catch(err => {
        response.json({ message: 'Some problems in Register' });
        console.log('Register Fail ', err);
    });
});
const token = require('../utils/token');
route.post('/reactlogin', (request, response) => {
    let userid = request.body.userid;
    let password = request.body.password;
    const userObject = new User(userid, password);
    const promise = userOperations.search(userObject);
    promise.then(data => {
        let t = token.createToken(userid);
        response.json({ "result": data, "token": t });
    }).catch(err => {
        response.json({ message: 'DB Issue in Login ' + err });
        console.log('Error in Login ', err);
    });
});

route.post('/todoadd', (request, response) => {
    response.send('user route');
});

route.post('/changepwd', (request, response) => {

});
module.exports = route;  // ***********export route****** using modular approach 