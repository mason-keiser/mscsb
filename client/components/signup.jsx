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
                //validate length of pass
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

            for (let j = 0; j <pass1.length; j++) {
                  //validate if contains 1 letter
                  let lettCount = 0;

                  if (pass1[j].match(/[a-z]/i)) {
                      console.log('letter')
                      lettCount++
                  } 
                  console.log(lettCount)
                  if (lettCount >= 1) {
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

            for (let k = 0;k < pass1.length; k++ ) {
                let numCount = 0
                if (pass1[k].match(/^\d+$/)) {
                    console.log('num')
                    numCount++
                }
                console.log(numCount)
                 //validate if contains 1 num
                  
                 if (numCount >= 1) {
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
                    <h4 className='reqB mb-3 pb-5'>Meet Password Requirements to Create Account</h4>
                </div>
            </div>
        </div>
    )
}

export default SignUp