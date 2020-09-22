import React, { Component } from 'react';
import './App.scss';
import Introduction from './components/selfIntroduction';
import MessAboutMe from './components/aboutMe';
import Educion from './components/educationTip';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Introduction />
        <hr></hr>

        <MessAboutMe />

        <Educion />
      </main>
    );
  }
}

export default App;
