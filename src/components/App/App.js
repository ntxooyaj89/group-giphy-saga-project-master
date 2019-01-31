import React, { Component } from 'react';
import Header from './../Header/Header.js';
import SearchForm from './../SearchForm/SearchForm.js';
import ImageCard from '../ImageCard/ImageCard.js';

class App extends Component {

  render() {
    return (
      <div>
        <Header className='App-header'/>
        <SearchForm />
        <ImageCard />
      </div>
    );
  }
  
}

export default App;
