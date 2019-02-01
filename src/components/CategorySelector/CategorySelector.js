import React, { Component } from 'react';
import { connect } from 'react-redux';


class CategorySelector extends Component {

constructor(props) {
    super(props);
    this.state = {
        category: '',
    }
 }

 handleChange = (event) => {
     console.log('handlechange', event.target.value);
     this.setState({
         category:target.value,
     })
     
 }

    render() {
        return (
            <form className="favoriteCategory">
                <select onChange={this.handleChange} value={this.state.input}>
                    <option value=''>Favorite Category</option>
                    <option value="Funny">Funny</option>
                    <option value="Reactions">Funny</option>
                    <option value="Entertainment">Funny</option>
                    <option value="NSFW">Funny</option>
                    <option value="Meme">Funny</option>
                </select>            
            </form>
        )
    }
}


export default connect()(CategorySelector);

