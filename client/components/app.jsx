import React from 'react'
import Landing from './landing'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './signup';

const App = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={Landing}/>
                    <Route path='/signup' exact component={SignUp}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App