import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import FavoriteGifs from '../FavoriteGifs/FavoriteGifs.js';
import SearchGif from './../SearchGif/SearchGif.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={SearchGif} />
            <Route exact path="/search" component={SearchGif} />
            <Route exact path="/favorite" component={FavoriteGifs} />
          </div>
        </Router>
      </div>
    );
  }
  
}

export default App;
