import React from 'react';
import { Link } from 'react-router-dom'
import Menu from './menu'

const SignUp = (props) => {

    return (
        <div className='signUpCont'>
            <Menu path={props.match.path}/>
        </div>
    )
}

export default SignUp