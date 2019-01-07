import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/work" component={Work} />
    <Route exact path="/experience" component={Experience} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
)

export default App;
