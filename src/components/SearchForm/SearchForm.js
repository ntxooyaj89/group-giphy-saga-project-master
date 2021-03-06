import React, { Component } from 'react';
import {connect} from 'react-redux';
import './SearchForm.css';

class SearchForm extends Component {

    state = {
        category: '',
    }

    handleChange = (event) => {
        this.setState({
            category: event.target.value,
        })
        console.log(this.state.category);
    }
    
    handleSearch = (event) => {
        event.preventDefault();
        const action = { type: 'SEARCH_GIFS', payload: this.state.category };
        this.props.dispatch(action);
    }

    render() {
        return(
            <div>
                <h3>This is the search form:</h3>
                <form className="searchForm">
                  <input type="text" placeholder="Search.." id="search" onChange={this.handleChange}/>
                  <button type="submit" onClick={this.handleSearch}>Search</button>
                </form>
            </div>
        )
    }
}

export default connect()(SearchForm);