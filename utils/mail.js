const nodeMailer = require('nodemailer');
const config = require('../db/config');

async function sendMail(recMailId, response,otpNo) {
    let transport = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.email,
            pass: config.password
        }
    });
    const attachmentArray = [
        {
            path:'E:/football/Adidas.jpg',
            filename:'myimage.png'
        }
    ];
    const mailOptions = {
        from: config.email,
        to: recMailId,
        subject: 'Hello U registered Succesfully !!',
        text: 'Hello User, here is the verification link',
        html: `<a href='http://localhost:1234/verify/${otpNo}'>Verification Link</a>`,
        attachments: attachmentArray
    };
    try {
        await transport.sendMail(mailOptions);
        response.json({ message: 'You registered Succesffuly, Mail Sent to ' + recMailId });
    }
    catch(e){
        response.json({message:'Error in Mail Send '+e});
    }
}

module.exports = sendMail;