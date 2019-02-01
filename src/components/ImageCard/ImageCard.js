import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ImageCard.css';
import FavoriteButton from '../FavoriteButton/FavoriteButton.js';

///////////////////////Needs props.history!!!!

class ImageCard extends Component {

    //chooses where image comes from
    conditionalImage = () => {
        if(this.props.history.location.pathname === '/favorite'){
            //happens on favorite page
            console.log('fav image');
            //image source with class cardImage
            return <img className='cardImage' src={this.props.favorite.url} alt='placeholder image'/>
            
        }
        else{
            //happens on search page
            console.log('search image');
            //image source with class cardImage
            return <img className='cardImage' src={this.props.imageSource.images.fixed_height_still.url} alt='placeholder image'/>
        }
    }

    //chooses what appears below image
    conditionalOption = () => {
        if(this.props.history.location.pathname === '/favorite'){
            //happens on favorite page
            // return whatever the category choice looks like
        }
        else{
            //happens on search page
            return <FavoriteButton url={this.props.imageSource.images.fixed_height_still.url}/>
        }
    }

    render(){
        return(
            <div className='imageCard'>
                {/* calls for an image */}
                {this.conditionalImage()}
                <br />
                <br />
                {/* calls for an action */}
                {this.conditionalOption()}
            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ( {reduxStore: reduxStore});
export default connect(mapReduxStoreToProps)(ImageCard);