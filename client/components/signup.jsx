import { sign } from 'crypto';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import Menu from './menu'

const SignUp = (props) => {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [pass1, setPass1] = useState()
    const [pass2, setPass2] = useState()
    const [reqsMet, setReqsMet] = useState(false)
    const history = useHistory();

    useEffect(() => {
        validate()
    },[pass1, pass2, props.nightMode])

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
        }
    }

    const signUp = () => {
        let signupInfo = {
            user_first_name: firstname,
            user_last_name: lastname,
            user_password: pass1
        } 
        if (!signupInfo.user_first_name || !signupInfo.user_last_name) {
            let bottomTag = document.querySelector('.reqB')
            bottomTag.innerHTML = 'Please fill out all required inputs'
            bottomTag.style.color = 'red'
        }
        console.log(signupInfo)
        fetch('/api/signUp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(signupInfo)
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
                    console.log(result)
                    props.setUser(result)
                    props.getBeaches()
                    history.push("/map");
                }
            })
    }

    const validate = () => {
        const one = document.getElementById('8char')
        const two = document.getElementById('1lett')
        const three = document.getElementById('1num')
        const four = document.getElementById('1spec')
        const five = document.getElementById('passM')

        let passMatch = false;
        let length = false;
        let lettCount = false;
        let numCount = false;
        let specChar = false;
        if (pass1) {
             //validate length of pass
            for (let i = 0; i < pass1.length; i++) {
               
                if (pass1.length >= 8 ) {
                    length = true
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

            //validate if contains 1 letter
            for (let j = 0; j < pass1.length; j++) {
                  
                  if (pass1[j].match(/[A-Z]/i)) {
                      lettCount = true
                  }
    
                  if (lettCount === true) {
                      if (props.nightMode) {
                          two.style.color = 'white'
                      } else {
                          two.style.color = 'black'
                      }
                  } else {
                      if (props.nightMode) {
                          two.style.color = 'black'
                      } else {
                          two.style.color = 'white'
                      }
                  }
            }

            //validate if contains 1 num
            for (let k = 0;k < pass1.length; k++ ) {
                
                if (pass1[k].match(/^\d+$/)) {
                    numCount = true
                }
                  
                 if (numCount === true) {
                    if (props.nightMode) {
                        three.style.color = 'white'
                    } else {
                        three.style.color = 'black'
                    }
                } else {
                    if (props.nightMode) {
                        three.style.color = 'black'
                    } else {
                        three.style.color = 'white'
                    }
                }
            }

            //validate if contains 1 special character
            for (let l = 0; l < pass1.length; l ++) {
                if (pass1[l].match(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g)) {
                    specChar = true
                }

                if (specChar === true) {
                    if (props.nightMode) {
                        four.style.color = 'white'
                    } else {
                        four.style.color = 'black'
                    }
                } else {
                    if (props.nightMode) {
                        four.style.color = 'black'
                    } else {
                        four.style.color = 'white'
                    }
                }
            }
        }

        //validate if passwords match
        if (!(pass1 && pass2)) {
            if (props.nightMode) {
                five.style.color = 'black'
            } else {
                five.style.color = 'white'
            }
        } else if (pass1 === pass2){
                passMatch = true
            if (props.nightMode) {
                five.style.color = 'white'
            } else {
                five.style.color = 'black'
            }
        }

        // validate if all requirements are met
        let finalVal = [length, lettCount, numCount, specChar, passMatch]
        let bottomTag = document.querySelector('.reqB')
        let suBtn = document.querySelector('.signupBtn')
        if (finalVal.includes(false)) {
            setReqsMet(false)
            bottomTag.innerHTML = 'Meet All Password Requirements to Create Account'
            bottomTag.style.color = 'red'
            suBtn.style.background = '#353535'
            suBtn.removeEventListener('click', signUp)
        } else {
            setReqsMet(true)
            bottomTag.innerHTML = 'All Requirements Met'
            bottomTag.style.color ='green'
            suBtn.style.background = '#0A2CDF'
            suBtn.addEventListener('click', signUp)
        }

    }

    const passEye = () => {
        const eye1 = document.querySelector('#eye1')
        const eye2 = document.querySelector('#eye2')
        const pass1 = document.querySelector('#pass1')
        const pass2 = document.querySelector('#pass2')
        if (eye1.classList.contains('show')) {
            eye1.classList.remove('fa-eye-slash')
            eye1.classList.remove('show')
            pass1.type = 'text'
            eye1.classList.add ('fa-eye')
        } else {
            eye1.classList.add('fa-eye-slash')
            eye1.classList.add('show')
            pass1.type = 'password'
            eye1.classList.remove('fa-eye')
        } if (eye2.classList.contains('show')) {
            eye2.classList.remove('fa-eye-slash')
            eye2.classList.remove('show')
            pass2.type = 'text'
            eye2.classList.add ('fa-eye')
        } else {
            eye2.classList.add('fa-eye-slash')
            eye2.classList.add('show')
            pass2.type = 'password'
            eye2.classList.remove('fa-eye')
        }
    }

    return (
        <div className='signUpCont c fadeIn'>
            <Menu user={props.user} path={props.match.path} nightMode={props.nightMode} setNightMode={props.setNightMode}/>
            <h2 className='sTitle'>Create Account</h2>
            <div className='swit'>
                <form  autoComplete='off'>
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
                            <input onChange={handlePassChange} id='pass1' required type='password'/>
                            <label htmlFor="">Password</label>
                            <span onClick={() => passEye()} id='eye1' className='fas fa-eye-slash show'></span>
                        </div>
                        <div className='input-data' id='a'>
                            <input onChange={handlePassChange} id='pass2' required type="password"/>
                            <label htmlFor="">Re Enter Password</label>
                            <span onClick={() => passEye()} id='eye2' className='fas fa-eye-slash show'></span>
                        </div>
                        <div>
                            <button type="button" className='signupBtn'>Create Account</button>
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
                            <div>One letter</div>
                        </div>
                        <div className='reqRow'>
                            <span id='1num' className='fas fa-check'></span>
                            <div>One number</div>
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
                    <h5 className='reqB mb-3 pb-5'>Meet All Password Requirements to Create Account</h5>
                </div>
            </div>
        </div>
    )
}

export default SignUp