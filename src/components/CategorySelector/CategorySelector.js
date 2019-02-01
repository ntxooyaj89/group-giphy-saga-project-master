import React, { Component } from 'react';
import { connect } from 'react-redux';



class CategorySelector extends Component {
    render() {
        return (
            <div>
                <h1>drop down goes here</h1>
            </div>
        )
    }
}


export default connect()(CategorySelector);