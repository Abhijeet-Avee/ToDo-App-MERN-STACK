const { response } = require('express');
const express = require('express');
const route = express.Router();
const notecrud = require('../db/helpers/notecrud');

route.post('/addnote',async(request,response)=>{
    const name = request.body.name;
    const desc = request.body.desc;
    const noteObject = {
        'name':name,
        'desc':desc
    };
    try{
        const res = await notecrud.add(noteObject);
        if(res){
            response.json({message:'Note Added SuccesFully'});
        }
        else{
            response.json({message:'Problem in Note Add'});
        }
    }
    catch(e){
        response.json({message:'Problem in Note Add, Some Error Occurred!!'});
    }
});

route.get('/listnote',(request,response)=>{
    const promise = notecrud.read();
    promise.then(res=>{
        response.json({"result":res});
    }).catch(err=>{
        response.json({"err":"Problem in Fetching Data"});
    })
});

module.exports = route;