import React from 'react';
import { Link } from 'react-router-dom'
import Menu from './menu'

const Login = (props) => {

    return (
        <div className='signUpCont'>
            <Menu path={props.match.path} nightMode={props.nightMode} setNightMode={props.setNightMode}/>
            <h2 className='sTitle'>Login</h2>
        </div>
    )
}

export default Login