import React from 'react';
import { Link } from 'react-router-dom'
import Menu from './menu'

const SignUp = (props) => {

    return (
        <div className='signUpCont c'>
            <Menu path={props.match.path} nightMode={props.nightMode} setNightMode={props.setNightMode}/>
            <h2 className='sTitle'>Create Account</h2>
            <div className='swit'>
                <form action="">
                    <div className='wrapper mt-3'>
                        <div className='input-data' id='e'>
                            <input required type='text'/>
                            <label htmlFor="">First Name</label>
                        </div>
                        <div className='input-data' id='e'>
                            <input required type='text'/>
                            <label htmlFor="">Last Name</label>
                        </div>
                        <div className='input-data' id='c'>
                            <input required type='text'/>
                            <label htmlFor="">Password</label>
                        </div>
                        <div className='input-data' id='a'>
                            <input required type="text"/>
                            <label htmlFor="">Re Enter Password</label>
                        </div>
                        <div>
                            <button className='signupBtn'>Create Account</button>
                        </div>
                    </div>
                </form>
            <div className='valCont'>

            </div>
            </div>
        </div>
    )
}

export default SignUp