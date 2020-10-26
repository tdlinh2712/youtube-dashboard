import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {color3, redBoxShadow} from '../../shared/Styles'
//import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                        <LogInButton href="/auth/google">
                            Login in with Google
                        </LogInButton>
                );
            default:
                return (
                        <LogInButton href="/api/logout">
                            Log out
                        </LogInButton>
                );
        }
    };

    render() {
        return (
                <Bar className="nap-wrapper">
                    <Logo 
                        to={this.props.auth ? './dashboard' : '/'} 
                    >
                        YoutubeDashboard
                    </Logo>
                    <div></div>
                    {this.renderContent()}
                </Bar>
        )
    }
};

function mapStateToProps({auth}) {
    return { auth };
};

export default connect(mapStateToProps)(Header);

const Bar = styled.div`
    display:grid;
    grid-template-columns: 180px auto 200px ;
    margin-bottom: 40px;

`
const Logo = styled(Link)`
    color:${color3};
    font-size:1.5em;
    text-decoration:none;

`
const LogInButton = styled.a`
    color:${color3};
    width:auto;
    font-size:1.25em;
    text-decoration:none;
    text-align: center;
    padding-top:5px;
    &:hover {
        ${redBoxShadow}
    }
    
`
