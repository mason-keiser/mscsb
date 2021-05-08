import React from 'react';

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
                <h5> Go To Surf Shop</h5>
            </div>
            <div className='menuBtn' onClick={() => handleMenu()}>
                Menu
            </div>
            <div className='side shadow-lg' id='side'>
                <h4>Login</h4>
                <h4>Sign Up</h4>
                <h4>View Beaches</h4>
                <div className='fas fa-chevron-up mt-2' id='menuUp' onClick={() => handleMenu()}></div>
            </div>
            <div className='logoCont'>
                <img src="/images/logo4bw.png" alt=""/>
                <h3 className='viewBtn'>View Beaches</h3>
            </div>
        </div>
    )
}

export default Landing