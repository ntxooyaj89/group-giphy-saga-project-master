import React, { Component } from "react";
import { connect } from 'react-redux';

import Header from '../Header/Header.js';

class FavoriteGifs extends Component {
    render() {
        return (
            <Header />
            {}
        );
    }
}

const mapReduxStoreToProps = (rs) => ({rs});
export default connect(mapReduxStoreToProps)(FavoriteGifs);