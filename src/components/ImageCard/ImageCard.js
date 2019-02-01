import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ImageCard.css';

class ImageCard extends Component {

    render(){
        return(
            <div>

            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ( {reduxStore: reduxStore});
export default connect(mapReduxStoreToProps)(ImageCard);