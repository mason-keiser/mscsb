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
                    <Route exact path='/' render={(props) => (<Landing {...props}/>)}/>
                    <Route exact path='/signup' render={(props) => (<SignUp {...props}/>)}/>
                    <Route exact path='/login' render={(props) => (<Login {...props}/>)}/>
                    <Route exact path='/map' render={(props) => (<MapPage {...props}/>)}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App