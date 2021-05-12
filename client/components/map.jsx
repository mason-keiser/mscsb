import React from 'react';
import { Link } from 'react-router-dom'
import Menu from './menu'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { googleApi } from './api';

const MapPage = (props) => {

    return (
        <div className='signUpCont'>
            <Menu path={props.match.path} setUser={props.setUser} user={props.user} nightMode={props.nightMode} setNightMode={props.setNightMode}/>
            <Map className='map' google={props.google} initialCenter={{lat: 33.542721, lng: -117.785355}} zoom={15}>

            </Map>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: googleApi
  })(MapPage);