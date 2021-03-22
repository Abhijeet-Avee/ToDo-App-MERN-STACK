import React, { Component } from 'react';
import { constants } from '../../utils/conifg';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes:[]
        };
    }

    componentDidMount(){
        this.loadNotes();
    }
    loadNotes(){
        const URL = constants.LIST_NOTES_URL;
        const options = {
            mode:'cors',
            method:'GET'
        }
        const promise = fetch(URL+"?token="+localStorage.token,options);
        promise.then(res=>{
            res.json().then(data=>{
                let arr = data.result;
                this.setState({notes:arr});
            }).catch(err=>{
                this.setState({notes:err});
            }).catch(err=>{
                this.setState({notes:err});
            })
        });
    }
    render() {
        let jsx='';
        if(this.state.notes.length==0){
            jsx = <h1>No Notes Found</h1>
        }
        else{
            jsx = this.state.notes.map((note,index)=>{
                return (<tr key={index}><td>{index+1}</td><td>{note.name}</td><td>{note.desc}</td></tr>)
            })
        }
        return (
            <div>
                <h1>List of Notes</h1>
                <table className="table table-dark table-hover">
                    <thead classNameName=''>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Descripiton</th>
                        </tr>
                    </thead>
                    <tbody>
                            <>
                                {jsx}
                            </>
                    </tbody>
                </table>
            </div>
        );
    }
}