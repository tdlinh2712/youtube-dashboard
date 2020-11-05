import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../actions'
import styled from 'styled-components'

import Header from './Header/index'
import Dashboard from './Dashboard'
import LandingPage from './LandingPage'

//const Header = () => <h2>Header</h2>

const Settings = () => <h2>Settings</h2>


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <AppLayout>
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route exact path="/" component={LandingPage}></Route>
                        <Route exact path= "/settings" component={Settings}></Route>
                        <Route exact path="/dashboard" component={Dashboard}></Route>
                        
                    </div>
                </BrowserRouter>
            </AppLayout>
        )
    }
    
}

export default connect(null, actions)(App);

const AppLayout = styled.div`
    padding-top:20px;
    padding-left: 120px;
    padding-right: 120px;
`