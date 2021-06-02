import React, { useEffect, useState } from 'react'
import Landing from './landing'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './signup';
import Login from './login';
import MapPage from './map';
import Weather from './weather';

const App = () => {
    const [nightMode, setNightMode] = useState(false)
    const [mInfo, setMInfo] = useState(false);
    const [myBeaches, setMyBeaches] = useState(false);
    const [user, setUser] = useState({
        user_id: 9,
        user_first_name: 'Guest'
    });

    useEffect(() => {
        getBeaches()
    },[user])

    useEffect(() => {
        getBeaches()
    }, []) 

    const getBeaches = () => {
        if (!user) return console.log('user falsy')
        fetch('/api/getBeaches/'+ user.user_id, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        }) 
        .then(response => {
            if (response.status === 400 || response.status === 404) {
                return null
            } else {
                return response.json();
            }
            })
            .then(result => {
                if (!result) {
                    return null
                } else {
                    if (result.error) {
                        setMyBeaches(null)
                    } else {
                        setMyBeaches(result)
                    }
                }
        })
    }

    return (
        <Router>
            <Switch>
                <Route exact path='/' render={(props) => (<Landing {...props} setUser={setUser} user={user} nightMode={nightMode} setNightMode={setNightMode}/>)}/>
                <Route exact path='/signup' render={(props) => (<SignUp {...props} getBeaches={getBeaches} setUser={setUser} user={user} nightMode={nightMode} setNightMode={setNightMode} setUser={setUser}/>)}/>
                <Route exact path='/login' render={(props) => (<Login {...props} getBeaches={getBeaches} setUser={setUser} user={user} nightMode={nightMode} setNightMode={setNightMode} setUser={setUser}/>)}/>
                <Route exact path='/map' render={(props) => (<MapPage {...props} mInfo={mInfo} setMInfo={setMInfo} setUser={setUser} user={user} nightMode={nightMode} setNightMode={setNightMode} user={user}/>)}/>
                <Route exact path='/weather' render={(props) => (<Weather {...props} getBeaches={getBeaches} myBeaches={myBeaches} mInfo={mInfo} setMInfo={setMInfo} setUser={setUser} user={user} nightMode={nightMode} setNightMode={setNightMode} user={user}/>)}/>
            </Switch>
        </Router>  
    )
}

export default App