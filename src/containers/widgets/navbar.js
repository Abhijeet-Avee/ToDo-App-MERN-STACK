import React from 'react';
import { constants } from '../../utils/conifg';
import BrandIcon from 'react-feather/dist/icons/aperture';
import { ToDo } from '../todo';
export class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    signOut(){
        console.log('I am Clicked');
        localStorage.clear();
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow navbar-inverse navbar-fixed-top">
                    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#" style={{ fontFamily: 'Courier New', textAlign: 'center' }}>
                        <BrandIcon size={25} />  {constants.companyName}
                    </a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="http://localhost:3000/" onClick={this.signOut}>Sign out</a>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}