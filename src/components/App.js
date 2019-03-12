import React, { Component } from 'react';
import './App.scss';
import './Container.scss';
import './Button.scss';
import './List.scss';
import './Image.scss';
import './Paragraph.scss';
import Header from './header/Header';
import ServiceSection from './service/ServiceSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main" role="main">
          <ServiceSection />
        </main>
      </div>
    );
  }
}

export default App;
