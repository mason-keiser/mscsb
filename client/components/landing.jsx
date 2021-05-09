import React from 'react';
import { Link } from 'react-router-dom'

const Landing = (props) => {

    const handleMenu = () => {
        const ham = document.getElementById('side');
        if (ham.classList.contains('open')) {
            ham.classList.remove('open') 
        } else {
            ham.classList.add('open')
        }
    }

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
            <div className='menuBtn' onClick={() => handleMenu()}>
                Menu
            </div>
            <div className='side shadow-lg' id='side'>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/map'>View Beaches</Link>
                <div className='fas fa-chevron-up mt-2' id='menuUp' onClick={() => handleMenu()}></div>
            </div>
            <div className='logoCont'>
                <img src="/images/logo4bw.png" alt=""/>
                <Link to='/map'>View Beaches</Link>
            </div>
        </div>
    )
}

export default Landing