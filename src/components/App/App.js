import React, { Component } from 'react';
import Header from './../Header/Header.js';
import SearchGif from './../SearchGif/SearchGif.js';
import SearchForm from './../SearchForm/SearchForm'

import { HashRouter as Router, Route, } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <did>

            <Route exact path="/header" component={Header} className='App-header' />
            <Route exact path="/search-form" component={SearchForm} />

          </did>
          

        </Router>
        

      </div>
    );
  }
  
}

export default App;
