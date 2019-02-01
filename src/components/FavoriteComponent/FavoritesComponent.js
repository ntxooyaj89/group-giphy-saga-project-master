import React, { Component } from 'react';
import { connect } from 'react-redux';


class FavoritesComponent extends Component {

componentDidMount() {
addToFavorites();
}

addToFavorites= (gif) =>(event)=> {
    console.log('in AddFavorites', gif);
    const action = {type: 'SET_FAVORITES', payload: {}
    this.props.dispatch(action);
    
}

    render() {
        return (
            <div>
                <img src="" alt="favorite gif"/>
                <button onClick={this.addtoFavorites}>Add to Favorites</button>
            </div>
        )
    }
}


export default connect()(FavoritesComponent);