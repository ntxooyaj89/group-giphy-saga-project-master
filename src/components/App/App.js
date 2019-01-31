import React, { Component } from 'react';
import Header from './../Header/Header.js';
import SearchGif from './../SearchGif/SearchGif.js';

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
        


=======
        <Header className='App-header' title={'title'}/>
        <SearchGif />
>>>>>>> 0ce38d4c63e122bb364cb9443d181a8b91c9ae98
      </div>
    );
  }
  
}

export default App;
