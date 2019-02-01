import React, { Component } from "react";
import { connect } from 'react-redux';

import Header from '../Header/Header.js';
import FavoriteButton from './../FavoriteButton/FavoriteButton'
import ImageCard from '../ImageCard/ImageCard.js'; 

class FavoriteGifs extends Component {
    render() {
        return (
            <div>
                <Header titleText="My Favorite Gifs" />
                {
                    this.props.reduxStore.favoriteReducer.map((favorite) => 
                        <ImageCard key={favorite.id} favorite={favorite} history={this.props.history} />
                    )
                }
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ 
    reduxStore
});
export default connect(mapReduxStoreToProps)(FavoriteGifs);