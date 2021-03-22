import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { constants } from '../../utils/conifg';

export class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: ''
        };
    }

    addNote(){
        let name = this.refs.name.value;
        let desc = this.refs.desc.value;
        const URL = constants.ADD_NOTES_URL;
        const noteObject = {
            "name":name,
            "desc":desc
        };
        const options = {
            mode:'cors',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(noteObject)
        }
        const promise = fetch(URL,options);
        promise.then(response=>{
            response.json().then(data=>{
                    this.setState({message:data.message});
            }).catch(err=>{
                    this.setState({message: 'Error in Add'});
            })
        }).catch(err=>{
            this.setState({message:"Error in Add response"});
        });
    }
    componentDidMount(){

    }

    render() {
        return (
            <>
                <h1>Add Notes</h1>
                <h3>{this.state.message}</h3>
                <Row>
                <div className='form-group mt-2'>
                    <label>Name</label>
                    <input ref = 'name' className='form-control mt-1' type='text' placeholder='TITLE'/>
                </div>
                </Row>
                <Row>
                <div className='form-group mt-2'>
                    <label>Description</label>
                    <textarea ref='desc' className='form-control mt-1' placeholder='Descripiton here' rows='5' cols='30'/>
                </div>
                </Row>
                <Row>
                <div className='form-group'>
                    <button onClick={this.addNote.bind(this)} className='btn btn-primary mt-3'>Add Notes</button>
                </div>
                </Row>            
            </>
        );
    }
}