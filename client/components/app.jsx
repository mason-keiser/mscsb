import React, { useState } from 'react'
import Landing from './landing'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './signup';
import Login from './login';
import MapPage from './map';

const App = () => {
    const [user, setUser] = useState('no user')
    const [nightMode, setNightMode] = useState(false)

    return (
        <Router>
            <Switch>
                <Route exact path='/' render={(props) => (<Landing {...props} nightMode={nightMode} setNightMode={setNightMode}/>)}/>
                <Route exact path='/signup' render={(props) => (<SignUp {...props} nightMode={nightMode} setNightMode={setNightMode} setUser={setUser}/>)}/>
                <Route exact path='/login' render={(props) => (<Login {...props} nightMode={nightMode} setNightMode={setNightMode} setUser={setUser}/>)}/>
                <Route exact path='/map' render={(props) => (<MapPage {...props} nightMode={nightMode} setNightMode={setNightMode} user={user}/>)}/>
            </Switch>
        </Router>  
    )
}

export default App