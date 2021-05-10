import React from 'react';
import { Link } from 'react-router-dom'
import Menu from './menu'

const Login = (props) => {

    return (
        <div className='signUpCont'>
            <Menu path={props.match.path}/>
        </div>
    )
}

export default Login