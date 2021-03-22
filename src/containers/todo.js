import React from 'react';
import { Login } from '../components/login';
import { Container } from 'react-bootstrap';
import { Register } from '../components/register';
import { Dashboard } from './dashboard';
import { Header } from './widgets/header';
import {Row,Col} from 'react-bootstrap';

export class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 0
        }
    }
    showHide(val) {
        this.setState({ show: val });
    }
    showDashBoard(result) {
        this.setState({ ...this.state, result: result });
        // maintain the old state and add result to the state.
    }
    doUHaveToken() {
        if (localStorage.token) {
            return (<Dashboard/>);
        }
        else {
            const jsx = (
                <>
                    <Header/>
                    <Row>
                    <Col>
                    <button onClick={() => {
                        this.showHide(1);
                    }} className='btn btn-primary mr-10' style={{float:'right'}}>Login</button>
                    </Col>
                    <Col>
                    <button onClick={() => {
                        this.showHide(2);
                    }} className='btn btn-success' style={{float:'left'}}>Register</button>
                    </Col>
                    </Row>
                </>
            )
            return jsx;
        }
    }
    render() {
        if (this.state.result) {
            return <Dashboard />
        }
        let jsx;
        if (this.state.show === 1) {
            jsx = <Login isSuccess={this.showDashBoard.bind(this)} />;
        }
        else if (this.state.show === 2) {
            jsx = <Register />;
        }
        else {
            jsx = <></>;
        }

        return (
            <>
            {this.doUHaveToken()}
            <Container>
                <hr />
                <br />
                {jsx}
            </Container>
            </>
        )
    }
}