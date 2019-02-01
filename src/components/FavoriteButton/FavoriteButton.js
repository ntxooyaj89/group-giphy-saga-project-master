import React, { Component } from "react";
import { connect } from 'react-redux';

//import FavoriteCard from '../FavoriteCard/FavoriteCard.js'; 

class FavoriteButton extends Component {

    addFavorite = () => {
        console.log('this is addGifs');
        const action = { type: 'ADD_FAVORITE'} // waiting on payload from ImageCard...
        this.props.dispatch(action);

    }


    render() {
        return (
            <div>
               <button onClick={this.addFavorite.gifs}>Add To Favorite</button>
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapReduxStoreToProps)(FavoriteButton);