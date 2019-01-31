import React, { Component } from 'react';
import Header from './../Header/Header.js';
import SearchForm from './../SearchForm/SearchForm.js';

import { HashRouter as Router, Route, } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div>

        <Router>
          <did>

            <Header exact path="/header" component={Header} className='App-header' />
            <SearchForm exact path="/search-form" component={SearchForm} />

          </did>
          

        </Router>
        


      </div>
    );
  }
  
}

export default App;
