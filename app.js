const bodyParser = require('body-parser');
const { request } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false})); //extended:false; to prevent binary // Parse URL Encoded
app.use(bodyParser.json());     //Parse JSON

app.use(cors());        //using cors for CORS-POLICY 
app.use('/',require('./routes/userroutes')); // includes the userroutes.js in app.js
app.use((req,res,next)=>{
    let token = req.query.token;
    const t = require('./utils/token');
    var obj = t.verifyToken(token);
    if(obj.verified && obj.userid){
        next();
    }
    else{
        res.json({token:'false',code:401});
    }
})
app.use('/notes',require('./routes/noteroutes'));
//app.use('/order',require('./routes/order'));
app.use((req,res,next)=>{
    //res.send('OOPS U TYPED SOMETHING WRONG');
    const path = require('path');
    console.log('CURRENT DIR IS ',__dirname);
    const fullPath = path.join(__dirname,'/public/error.html');
    res.sendFile(fullPath);
});
 
app.listen(process.env.PORT || 1234,(err)=>{    //process->environment->PORT or go for 1234
    if(err){
        console.log('Error on Server Start');
    }
    else{
        console.log('Server is Up and Running');
    }
})