import React, { Component } from 'react';
import { Row,Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import { Add } from '../components/todo/Add';
import { Delete } from '../components/todo/Delete';
import { Home } from '../components/todo/Home';
import { List } from '../components/todo/List';
import { Search } from '../components/todo/Search';
import './dashboard.css';
import { Error } from './widgets/error';
import {NavBar} from './widgets/navbar';
import {SideBar} from './widgets/sidebar';

export class Dashboard extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
              <NavBar/>
              <div className="container">
                <Row>
                <Col xs lg="2">
                <SideBar/>
                </Col>
                <Col md="9" sm="auto" lg="10">
                   <Switch> 
                  <Route exact path="/" component={Home}/>
                  <Route path="/add" component={Add}/>
                  <Route path="/list" component={List}/>
                  <Route path="/search" component={Search}/>
                  <Route path="/delete" component={Delete}/>
                  <Route component={Error}/>
                  </Switch>                  
              </Col>
                </Row>
                {/* OUTPUT ROUTING STUFF */}
              </div>
              {/*<h1>DashBoard Page - Welcome {this.props.userid}</h1>*/}  
            </>
        );
    }
}
