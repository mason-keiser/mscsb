import React from 'react';
import { Link } from 'react-router-dom'
import Menu from './menu'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { googleApi } from './api';

const MapPage = (props) => {

    return (
        <div className='signUpCont'>
            <Menu path={props.match.path} setUser={props.setUser} user={props.user} nightMode={props.nightMode} setNightMode={props.setNightMode}/>
            <Map className='map' google={props.google} initialCenter={{lat: 33.542721, lng: -117.785355}} zoom={10}>

            </Map>
            <div className='mapInfo'>
                <h3 className='m-4'>Select Beach From Map Above</h3>
                <h4>Clicking on a marker will take you to the selected locations current weather report.</h4>
                <h4>When viewing a beach’s weather information tap “add” to save that beach to your list.</h4>
            </div>
            
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: googleApi
  })(MapPage);