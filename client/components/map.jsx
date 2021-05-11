import React from 'react';
import { Link } from 'react-router-dom'
import Menu from './menu'

const MapPage = (props) => {

    return (
        <div className='signUpCont'>
            <Menu path={props.match.path} setUser={props.setUser} user={props.user} nightMode={props.nightMode} setNightMode={props.setNightMode}/>
        </div>
    )
}

export default MapPage