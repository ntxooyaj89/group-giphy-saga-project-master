import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchForm from './../SearchForm/SearchForm.js';

class SearchGif extends Component {
    render() {
        return(
            <div>
                <SearchForm />
            </div>
        )
    }
}

export default connect()(SearchGif);