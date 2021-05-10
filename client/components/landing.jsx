import React from 'react';
import { Link } from 'react-router-dom'
import Menu from './menu'

const Landing = (props) => {
 
    return (
        <div className='landingCont'>
            <div className='copyCont'>
                <div></div>
                <h5> Mason Keiser  2021 ©</h5>
            </div>
            <div className='shopCont'>
                <div></div>
                <a href="https://mss.masonkeiser.com">Go To Surf Shop</a>
            </div>
            <Menu/>
            <div className='logoCont'>
                <img src="/images/logo4bw.png" alt=""/>
                <Link to='/map'>View Beaches</Link>
            </div>
        </div>
    )
}

export default Landing