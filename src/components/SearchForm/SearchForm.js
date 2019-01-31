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
        console.log('search button clicked');
    }

    render() {
        return(
            <div>
                <form className="searchForm">
                  <input type="text" placeholder="Search.." id="search" onChange={this.handleChange}/>
                  <button type="submit" onClick={this.handleSearch}>Search</button>
                </form>
            </div>
        )
    }
}

export default connect()(SearchForm);