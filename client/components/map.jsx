import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import Menu from './menu'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { googleApi } from './api';
import Footer from './footer';

const MapPage = (props) => {
    const history = useHistory();
    const [mx] = useState([
        {
            lat: 33.542721,
            lng:  -117.785355,
            name: 'Laguna Beach'
        },
        {
            lat: 33.608768,
            lng:  -117.873360,
            name: 'Newport Beach'
        },
        {
            lat: 33.659485,
            lng:  -117.998802,
            name: 'Huntington Beach'
        },
        {
            lat: 33.467224,
            lng:  -117.698097,
            name: 'Dana Point'
        },
        {
            lat: 33.427353,
            lng:  -117.612602,
            name: 'San Clemente'
        },
        {
            lat: 33.770050,
            lng:  -118.193741,
            name: 'Long Beach'
        },
        {
            lat: 33.770050,
            lng:  -118.193741,
            name: 'Long Beach'
        },
        {
            lat: 33.195911,
            lng:  -117.379517,
            name: 'Oceanside'
        },
        {
            lat: 33.844980,
            lng:  -118.387240,
            name: 'Redondo Beach'
        },
        {
            lat: 32.700031,
            lng:  -117.246681,
            name: 'Point Loma'
        },
        {
            lat: 33.458420,
            lng:   -117.665180,
            name: 'Capistrano Beach'
        },
        {
            lat:  33.044800,
            lng:   -117.292450,
            name: 'Encinitas'
        },
        {
            lat:  32.959389,
            lng:   -117.266296,
            name: 'Del Mar'
        },
        {
            lat: 32.832809,
            lng:  -117.271271,
            name: 'La Jolla'
        },
        {
            lat: 33.166039,
            lng:  -117.337929,
            name: 'Carlsbad'
        },
        {
            lat: 34.420830,
            lng:  -119.698189,
            name: 'Santa Barbara'
        },
        {
            lat: 34.019455,
            lng:  -118.491188,
            name: 'Santa Monica'
        },
        {
            lat: 34.025921,
            lng:  -118.779755,
            name: 'Malibu'
        },
        {
            lat: 34.280491,
            lng:  -119.294518,
            name: 'Ventura'
        },
        {
            lat: 33.993118,
            lng:  -118.456200,
            name: 'Venice Beach'
        },
        {
            lat: 33.884735,
            lng:  -118.410912,
            name: 'Manhattan Beach'
        },
        {
            lat: 34.157530,
            lng:  -119.223540,
            name: 'Channel Islands Beach'
        },
        {
            lat: 33.331676,
            lng:  -118.384437,
            name: 'Catalina Island'
        },
    ])

    const onMarkerClick =  (marker) => {
        props.setMInfo(marker)
        history.push("/weather")
      };

    return (
        <div className='signUpCont fadeIn'>
             <Menu path={props.match.path} setUser={props.setUser} user={props.user} nightMode={props.nightMode} setNightMode={props.setNightMode}/>
            {
                (props.google)
                ? (
                    <div>
                        <Map className='map' google={props.google} initialCenter={{lat: 33.542721, lng: -117.785355}} zoom={10}>
                            {
                                mx.map((marker, index) => {
                                    return (
                                        <Marker
                                        icon={{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}
                                        key={index}
                                        position={{ lat: marker.lat, lng: marker.lng}}
                                        name={marker.name}
                                        onClick={() => onMarkerClick(marker)}
                                        />
                                    )
                                })
                            }
                        </Map>
                        <div className='mapInfo'>
                            <h3 className='m-4'>Select Beach From Map Above</h3>
                            <h4>Clicking on a marker will take you to the selected locations current weather report.</h4>
                            <h4>When viewing a beach’s weather information tap “add” to save that beach to your list.</h4>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className='errTit'>Experiencing issues loading the Weather </h2>
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                )
            }
            <Footer/>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: googleApi
  })(MapPage);