import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

const Menu = (props) => {

    useEffect(() => {
        const links = document.querySelectorAll('.menI')
        console.log(props.path)
        for (let i = 0; i < links.length; i++) {
            if (props.path === '/login') {
                if (links[i].id === 'l') {
                    links[i].style.color = '#0A2CDF'
                }
            } if (props.path === '/signup'){
                if (links[i].id === 's') {
                    links[i].style.color = '#0A2CDF'
                }
            } if (props.path === '/map') {
                if (links[i].id === 'm') {
                    links[i].style.color = '#0A2CDF'
                }
            }
        }
    }, [])

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
                <Link className='menI' id='l' to='/login'>Login</Link>
                <Link className='menI' id='s' to='/signup'>Sign Up</Link>
                <Link className='menI' id='m' to='/map'>View Beaches</Link>
                <div className='fas fa-chevron-up mt-2' id='menuUp' onClick={() => handleMenu()}></div>
            </div>
        </div>
    )
}

export default Menu