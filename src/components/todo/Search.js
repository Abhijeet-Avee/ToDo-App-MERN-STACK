import React, { Component } from 'react';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <h1>Search Notes</h1>
                <input className='form-control mb-3' type='text' placeholder='Type to Search Notes' />
                <table className="table table-dark table-hover">
                    <thead classNameName=''>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Descripiton</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </>
        );
    }
}