import React from 'react';
import { Link } from 'react-router-dom'
import Menu from './menu'

const SignUp = (props) => {

    return (
        <div className='signUpCont c'>
            <Menu path={props.match.path} nightMode={props.nightMode} setNightMode={props.setNightMode}/>
        </div>
    )
}

export default SignUp