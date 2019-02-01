import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <header>
                <h1>{this.props.titleText}</h1>
            </header>
        )
    }
}


export default connect()(Header);