import React, { Component } from 'react';
import {connect} from 'react-redux';



class Header extends Component {
    render() {
        return(
            <div>
                <h1>Giphy search</h1>
            </div>
        )
    }
}


export default connect()(Header);