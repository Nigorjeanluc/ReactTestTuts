import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import './App.scss';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Headline header="Posts" desc="Click the button to render" tempArr={tempArr}/>
        </div>
      </div>
    );
  }
}
export default App;
