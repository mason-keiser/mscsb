import React from 'react';
import { Link } from 'react-router-dom'

const Menu = (props) => {

    const handleMenu = () => {
        const ham = document.getElementById('side');
        if (ham.classList.contains('open')) {
            ham.classList.remove('open') 
        } else {
            ham.classList.add('open')
        }
    }

    return (
        <div>
            <div className='menuBtn' onClick={() => handleMenu()}>
                Menu
            </div>
            <div className='side shadow-lg' id='side'>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/map'>View Beaches</Link>
                <div className='fas fa-chevron-up mt-2' id='menuUp' onClick={() => handleMenu()}></div>
            </div>
        </div>
    )
}

export default Menu