import React from 'react'
import Landing from './landing'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={Landing}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App