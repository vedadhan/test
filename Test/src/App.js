import React, { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Righthand from './components/MainFile';
//import Lefthand from './components/Lefthand';
import './App.css';
import MainFile from './components/MainFile';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Header />
      </Router>
      <MainFile />
    </div>
    );
  }
}

export default App;
