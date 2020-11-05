import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import styled from 'styled-components'
import {connect} from 'react-redux';
import {redBoxShadow, color3, color4, fontColorWhite} from '../shared/Styles'

const LandingText = styled.h3`
    font-size: 2em;
    margin-bottom: 50px;
`
const LandingStyled = styled.div`
    text-align: center;
    margin-top: 100px;
`
const LogInButton = styled.a`
    width:auto;
    cursor: pointer;
    font-size:1.25em;
    ${fontColorWhite};
    background-color:${color3};
    text-decoration:none;
    text-align: center;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 1px 1px ${color4};
    &:hover {
        ${redBoxShadow}
    }
`

class LandingPage extends Component {
    render() {
        if(this.props.auth) {
            //if user is logged in => redirect to dashboard
            return <Redirect to="/dashboard" />
        }

        return (
            <LandingStyled>
                <LandingText>View your youtube data with YoutubeDashboard</LandingText>
                <LogInButton href="/auth/google">Login to Youtube</LogInButton>
            </LandingStyled>
        )
    }
    
}

function mapStateToProps({auth}) {
    return { auth };
};

export default connect(mapStateToProps)(LandingPage);