import React, { Component } from "react";
import { connect } from 'react-redux';

import Header from '../Header/Header.js';
//import FavoriteCard from '../FavoriteCard/FavoriteCard.js'; 
import FavoriteButton from './../FavoriteButton/FavoriteButton'

class FavoriteGifs extends Component {
    render() {
        return (
            <div>
                <Header titleText="My Favorite Gifs" />
             
                {/* { this.props.reduxStore.favoritesReducer.map((favorite) => {
                        return <FavoriteCard key={favorite.id} favorite={favorite} />
                    });
                } */}
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ 
    reduxStore
});
export default connect(mapReduxStoreToProps)(FavoriteGifs);