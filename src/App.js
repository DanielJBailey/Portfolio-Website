import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';

const App = () => (
    <>
        <NavBar />
        <Switch>
            <Route exact path = "/" component={Home} />
            {/* <Route exact path ="/about" component={About} />
            <Route exact path ="/portfolio" component={Portfolio} />
            <Route exact path ="/experience" component={Experience} />
            <Route exact path ="/contact" component={Contact} /> */}
            <Route component={NotFound} />
        </Switch>
    </>
)

export default App;
