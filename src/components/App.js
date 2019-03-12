import React, { Component } from 'react';
import './App.scss';
import './Container.scss';
import './Button.scss';
import './List.scss';
import './Paragraph.scss';
import Header from './header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
