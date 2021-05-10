import React, { useState } from 'react'
import Landing from './landing'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './signup';
import Login from './login';
import MapPage from './map';

const App = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={Landing} />
                    <Route path='/signup' exact component={SignUp} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/map' exact component={MapPage} />
                </Switch>
            </Router>
        </div>
    )
}

export default App