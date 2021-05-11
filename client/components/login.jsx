import React from 'react';
import { Link } from 'react-router-dom'
import Menu from './menu'

const Login = (props) => {

    const passEye = () => {
        const eye = document.getElementById('eye')
        const pass = document.getElementById('pass1')
        console.log(pass.type)
        if (eye.classList.contains('show')) {
            eye.classList.remove('fa-eye-slash')
            eye.classList.remove('show')
            pass.type = 'text'
            eye.classList.add ('fa-eye')
        } else {
            eye.classList.add('fa-eye-slash')
            eye.classList.add('show')
            pass.type = 'password'
            eye.classList.remove('fa-eye')
        }
    }

    return (
        <div className=''>
            <Menu path={props.match.path} nightMode={props.nightMode} setNightMode={props.setNightMode}/>
            <div className='loginCont'>
            <h2 className='sTitle'>Login</h2>
                <form action="">
                    <div className='wrapper mt-3'>
                        <div className='input-data' id='e'>
                            <input id='firstname' required type='text'/>
                            <label htmlFor="">First Name</label>
                        </div>
                        <div className='input-data' id='c'>
                            <input  id='pass1' required type='password'/>
                            <label htmlFor="">Password</label>
                            <span onClick={() => passEye()} id='eye' className='fas fa-eye-slash show'></span>
                        </div>
                        <div>
                            <button type="button" className='signupBtn'>Login</button>
                        </div>
                    </div>
                </form>
                <Link className='gotosu' to='/signup'>Create Account</Link>
            </div>
        </div>
    )
}

export default Login