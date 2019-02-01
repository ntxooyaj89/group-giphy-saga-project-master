import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';

class SearchGif extends Component {
    render() {
        return(
            <div>
                <Header titleText="Search Gifs" />
                <SearchForm />
                {JSON.stringify(this.props.reduxStore.searchReducer)}
                
            
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({reduxStore}); 
export default connect(mapReduxStoreToProps)(SearchGif);