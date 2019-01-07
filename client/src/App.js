import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import './App.scss';

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
