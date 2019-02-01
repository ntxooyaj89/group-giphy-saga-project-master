import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ImageCard.css';

///////////////////////Needs props.history!!!!

class ImageCard extends Component {

    //chooses where image comes from
    conditionalImage = () => {
        if(this.props.history.location.pathname === '/favorite'){
            //happens on favorite page
            console.log('fav image');
            //image source with class cardImage
            
        }
        else{
            //happens on search page
            console.log('search image');
            //image source with class cardImage
            return <img src='https://media1.giphy.com/media/3og0IHxCPD1oAQQZPi/200_s.gif' alt='placeholder image'/>
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
            return <button>favorite button</button>
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