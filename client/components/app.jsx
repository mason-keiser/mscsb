import React, { useState } from 'react'
import Landing from './landing'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './signup';
import Login from './login';
import MapPage from './map';

const App = () => {
    const [user, setUser] = useState('no user')

    return (
        <Router>
            <Switch>
                <Route exact path='/' render={(props) => (<Landing {...props} user={user} setUser={setUser}/>)}/>
                <Route exact path='/signup' render={(props) => (<SignUp {...props} setUser={setUser}/>)}/>
                <Route exact path='/login' render={(props) => (<Login {...props} setUser={setUser}/>)}/>
                <Route exact path='/map' render={(props) => (<MapPage {...props} user={user}/>)}/>
            </Switch>
        </Router>  
    )
}

export default App