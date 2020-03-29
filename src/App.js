import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Headline header="Posts" desc="Click the button to render"/>
        </div>
      </div>
    );
  }
}
export default App;
