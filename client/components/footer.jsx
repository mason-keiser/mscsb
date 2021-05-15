import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const Footer = () => {
    const history = useHistory();

    const goHome = () => {
        history.push("/")
    } 

    return (
        <div className='footerCont'>
            <div className='logo'>
                <img onClick={() => goHome()} src="/images/logo4bw.png" alt="" className='fadeIn' id='footerLogo'/>
            </div>
            <div className='ti'>MSCSB</div>
        </div>
    )
}

export default Footer