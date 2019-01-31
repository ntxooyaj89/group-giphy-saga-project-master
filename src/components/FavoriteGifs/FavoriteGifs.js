import React, { Component } from "react";
import { connect } from 'react-redux';

import Header from '../Header/Header.js';

class FavoriteGifs extends Component {
    render() {
        return (
            <Header />
            {this.props.rs.}
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => { 
    reduxStore: reduxStore,
};
export default connect(mapReduxStoreToProps)(FavoriteGifs);