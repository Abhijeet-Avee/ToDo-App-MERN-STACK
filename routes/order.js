const { request, response } = require('express');
const express = require('express');
const route = express.Router();

route.get('/orderdetails',(request,response)=>{
    response.send('I am the Order '+request.query.id +' OrderName: '+request.query.name);
});
route.post('/payment',(request,response)=>{

});
route.get('/orderhistory',(request,response)=>{

});
route.get('/add',(request,response)=>{
    response.send('order route');
});
module.exports = route;