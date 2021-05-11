import React from 'react';
import { Link } from 'react-router-dom'
import Menu from './menu'

const Landing = (props) => {

    return (
        <div className='landingCont'>
            <div className='copyCont'>
                <div className=''></div>
                <h5 className=''> Mason Keiser  2021 ©</h5>
            </div>
            <div className='shopCont'>
                <div className=''></div>
                <a className='' href="https://mss.masonkeiser.com">Go To Surf Shop</a>
            </div>
            <Menu path={props.match.path} setUser={props.setUser} user={props.user} nightMode={props.nightMode} setNightMode={props.setNightMode}/>
            <div className='logoCont'>
                <img src="/images/logo4bw.png" alt="" id='landingLogo'/>
                <Link to='/map' >View Beaches</Link>
            </div>
        </div>
    )
}

export default Landing