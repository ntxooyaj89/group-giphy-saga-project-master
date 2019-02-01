import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import ImageCard from '../ImageCard/ImageCard.js';

class SearchGif extends Component {

    render() {
        return(
            <div>
                <Header titleText="Search Gifs" />
                <SearchForm />

                {this.props.reduxStore.searchReducer.data !== undefined
                    && 
                    this.props.reduxStore.searchReducer.data.map((imageSource, index) => 
                        <ImageCard key={index} imageSource={imageSource} history={this.props.history}/>
                        )
                }

            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({reduxStore}); 
export default connect(mapReduxStoreToProps)(SearchGif);