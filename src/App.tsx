import React, { useState } from 'react';
import './App.css';
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import { Route } from 'react-router-dom';
import Work from './components/Work/Work';
import { HashRouter as Router } from 'react-router-dom'

function App() {
//
  return (
    <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Header />
          <Route exact path="/" component={Main}></Route>
          <Route path="/work/:id" component={Work}/>
        </Router>
    </div>
  );
}

export default App;
