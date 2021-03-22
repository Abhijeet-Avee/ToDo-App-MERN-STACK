import React from "react";
import {constants} from "../utils/conifg";
export class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    async doRegister(){
        let userid = this.refs.userid.value;
        let password = this.refs.pwd.value;
        let obj = {userid, password};
        const url= constants.REGISTER_URL;
        const options = {
            mode: 'cors',
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(obj)
        }
        let response = await fetch(url,options);
        let data = await response.json();       //parse response{body} into JSON
        this.setState({'message':data.message});
    }
    render(){
        return(
            <>
            <h1 className='alert-info text-center'>Register {this.state.message}</h1>
            <div className='form-group'>
                <label>Userid</label>
                <input ref="userid" className='form-control' type='text' placeholder='Type Userid Here'/>
            </div>
            <br/>
            <div className='form-group'>
                <label>Password</label>
                <input ref="pwd" className='form-control' type='password' placeholder='Type Password Here'/>
            </div>
            <br/>
            <div className='form-group'>
                <button onClick={this.doRegister.bind(this)} className='btn btn-primary mb-5'>Register</button>
            </div>
            </>
        )
    }
}