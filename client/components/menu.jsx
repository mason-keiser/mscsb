import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

const Menu = (props) => {
    const history = useHistory()

    useEffect(() => {
        const links = document.querySelectorAll('.menI')
        const landingLogo = document.getElementById('landingLogo')
        const footerLogo = document.getElementById('footerLogo')
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
            } if (props.path === '/'){
                document.getElementById('homeBtn').style.color = '#0A2CDF' 
            }
        }
        if (props.nightMode) {
            document.body.style.background = '#0E0E0E'
            var els = document.getElementsByTagName("*");
            for(var i = 0, all = els.length; i < all; i++){   
                 els[i].classList.add('nm');
             }
             if (landingLogo) {
                landingLogo.src = '/images/nmlogo.png'
             }
             if (footerLogo) {
                footerLogo.src = '/images/nmlogo.png'
            }
        } else {
            document.body.style.background = 'white'
            var els = document.getElementsByTagName("*");
            for(var i = 0, all = els.length; i < all; i++){   
                 els[i].classList.remove('nm');
             }
            if (landingLogo) {
                landingLogo.src = '/images/logo4bw.png'
            }
            if (footerLogo) {
                footerLogo.src = '/images/logo4bw.png'
            }
        }
        
    }, [props.nightMode])

    const handleMenu = () => {
        const ham = document.getElementById('side');
        const h = document.getElementById('homeBtn')
        const nm = document.getElementById('nmBtn')
        if (ham.classList.contains('open')) {
            ham.classList.remove('open') 
            h.classList.remove('open') 
            nm.classList.remove('open')
        } else {
            ham.classList.add('open')
            h.classList.add('open')
            nm.classList.add('open')
        }
    }

    const nm = () => {
        props.setNightMode(!props.nightMode)
    }

    const logout = () => {
        props.setUser(false)
        history.push("/");
    }

    const sideterp = (props.user) 
    ? (
    <div className='side shadow-lg' id='side'>
        <div className='menI' id='lo'>My Beaches</div>
        <Link className='menI' id='m' to='/map'>View Beaches</Link>
        <div className='menI' id='lo' onClick={() => logout()}>Logout</div>
        <div className='fas fa-chevron-up mt-2' id='menuUp' onClick={() => handleMenu()}></div>
    </div>
    )  : (
    <div className='side shadow-lg' id='side'>
        <Link className='menI' id='l' to='/login'>Login</Link>
        <Link className='menI' id='s' to='/signup'>Sign Up</Link>
        <Link className='menI' id='m' to='/map'>View Beaches</Link>
        <div className='fas fa-chevron-up mt-2' id='menuUp' onClick={() => handleMenu()}></div>
    </div>
    )

    return (
        <div>
            <Link to='/' className='fas fa-home' id='homeBtn'></Link>
            <div className='fas fa-moon' id='nmBtn' onClick={() => nm()}></div>
            <div className='menuBtn' onClick={() => handleMenu()}>
                Menu
            </div>
            {sideterp}
        </div>
    )
}

export default Menu