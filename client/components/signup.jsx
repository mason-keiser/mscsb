import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Menu from './menu'

const SignUp = (props) => {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [pass1, setPass1] = useState()
    const [pass2, setPass2] = useState()

    useEffect(() => {
        validate()
    })

    useEffect(() => {
        validate()
    },[pass1, pass2])

    const handleNameChange = (event) => {
        if (event.target.id === 'firstname') {
            setFirstname(event.target.value)
        } else {
            setLastname(event.target.value)
        }
    }

    const handlePassChange = (event) => {
        if (event.target.id === 'pass1') {
            setPass1(event.target.value)
            validate()
        } else {
            setPass2(event.target.value)
            validate()
        }
    }

    const validate = () => {
        const one = document.getElementById('8char')
        const two = document.getElementById('1lett')
        const three = document.getElementById('1num')
        const four = document.getElementById('1spec')
        const five = document.getElementById('passM')

        if (pass1) {
            for (let i = 0; i < pass1.length; i++) {
                if (pass1.length >= 8 ) {
                    if (props.nightMode) {
                        one.style.color = 'white'
                    } else  {
                        one.style.color = 'black'
                    }
                } else  {
                    if (props.nightMode) {
                        one.style.color = 'black'
                    } else {
                        one.style.color = 'white'
                    }
                }
            }
        }

        if (!(pass1 && pass2)) {
            if (props.nightMode) {
                five.style.color = 'black'
            } else {
                five.style.color = 'white'
            }
        } else if (pass1 === pass2){
            if (props.nightMode) {
                five.style.color = 'white'
            } else {
                five.style.color = 'black'
            }
        }
    }

    return (
        <div className='signUpCont c'>
            <Menu path={props.match.path} nightMode={props.nightMode} setNightMode={props.setNightMode}/>
            <h2 className='sTitle'>Create Account</h2>
            <div className='swit'>
                <form action="">
                    <div className='wrapper mt-3'>
                        <div className='input-data' id='e'>
                            <input id='firstname' onChange={handleNameChange} required type='text'/>
                            <label htmlFor="">First Name</label>
                        </div>
                        <div className='input-data' id='e'>
                            <input id='lastname' onChange={handleNameChange} required type='text'/>
                            <label htmlFor="">Last Name</label>
                        </div>
                        <div className='input-data' id='c'>
                            <input onChange={handlePassChange} id='pass1' required type='text'/>
                            <label htmlFor="">Password</label>
                        </div>
                        <div className='input-data' id='a'>
                            <input onChange={handlePassChange} id='pass2' required type="text"/>
                            <label htmlFor="">Re Enter Password</label>
                        </div>
                        <div>
                            <button className='signupBtn'>Create Account</button>
                        </div>
                    </div>
                </form>
            <div className='valCont'>
                <h3 className='reqT'>Password Requirements</h3>
                <div className='reqCont'>
                    <div className='reqCol'>
                        <div className='reqRow'>
                            <span id='8char' className='fas fa-check'></span>
                            <div>8+ Characters</div>
                        </div>
                        <div className='reqRow'>
                            <span id='1lett' className='fas fa-check'></span>
                            <div>At least one letter</div>
                        </div>
                        <div className='reqRow'>
                            <span id='1num' className='fas fa-check'></span>
                            <div>At least one number</div>
                        </div>
                    </div>
                    <div className='reqCol'>
                        <div className='reqRow'>
                                <span id='1spec' className='fas fa-check'></span>
                                <div>One special character</div>
                            </div>
                            <div className='reqRow'>
                                <span id='passM' className='fas fa-check'></span>
                                <div>Passwords Match</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp