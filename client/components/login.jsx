import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import Menu from './menu'

const Login = (props) => {
    const [name, setName] = useState();
    const [pass, setPass] = useState();
    const history = useHistory();

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

    const handleChange = (event) => {
        if (event.target.id === 'firstname') {
            setName(event.target.value)
        } if (event.target.id === 'pass1') {
            setPass(event.target.value)
        } 
    }

    const login = () => {
        let loginInfo = {
            user_first_name: name,
            user_password: pass
        }
        if (!loginInfo) {
            return null
        }
        let fname = loginInfo.user_first_name;
        const password = loginInfo.user_password;
        fetch('/api/login/' + fname + '/' + password, {
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
                        props.setUser(result)
                        history.push("/mybeaches");
                    }
                })
    }

    return (
        <div className=''>
            <Menu user={props.user} path={props.match.path} nightMode={props.nightMode} setNightMode={props.setNightMode}/>
            <div className='loginCont fadeIn'>
            <h2 className='sTitle'>Login</h2>
                <form autoComplete='off'>
                    <div className='wrapper mt-3'>
                        <div className='input-data' id='e'>
                            <input onChange={handleChange} id='firstname' required type='text'/>
                            <label htmlFor="">First Name</label>
                        </div>
                        <div className='input-data' id='c'>
                            <input onChange={handleChange} id='pass1' required type='password'/>
                            <label htmlFor="">Password</label>
                            <span onClick={() => passEye()} id='eye' className='fas fa-eye-slash show'></span>
                        </div>
                        <div>
                            <button onClick={() => login()} type="button" className='signupBtn'>Login</button>
                        </div>
                    </div>
                </form>
                <Link className='gotosu' to='/signup'>Create Account</Link>
                <Link className='learn' to='/'>Learn About This Application</Link>
            </div>
        </div>
    )
}

export default Login