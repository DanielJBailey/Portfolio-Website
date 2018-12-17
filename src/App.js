import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import './styles/App.scss';

const App = () => (
    <>
        <Switch>
            <Route exact path = "/" component={Home} />
            <Route exact path = "/Contact" component={Contact} />
            <Route component={NotFound} />
        </Switch>
    </>
)

export default App;
