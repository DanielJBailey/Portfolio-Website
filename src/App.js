import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './styles/App.scss';

const App = () => (
    <>
        <Switch>
            <Route exact path = "/" component={Home} />
            <Route component={NotFound} />
        </Switch>
    </>
)

export default App;
