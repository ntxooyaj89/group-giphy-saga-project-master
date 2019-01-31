import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';


class ImageCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            add: true,
            card: {maxWidth: 4,},
            media: {height: 40,
                paddingTop: '56.25%',},
            };
        };

    render(){
        return(
            //using the CardMedia in material ui.
            <div>
                <Card className={this.state.card}>
                    <CardActionArea>
                        <CardHeader
                            title='Image Card, mabye replace this later'/>
                        <CardMedia component="img"
                            className={this.state.media} 
                            image={this.props.favorite.url}
                        />
                        <CardContent>
                            <Button />
                        </CardContent>
                        <p>A description here</p>
                    </CardActionArea>
                </Card>
            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ( {reduxStore: reduxStore});
export default connect(mapReduxStoreToProps)(ImageCard);