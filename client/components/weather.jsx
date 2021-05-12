import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Menu from './menu'
import Footer from './footer';
import api from './api'

const Weather = (props) => {
    const [weatherInfo, setWeatherInfo] = useState();

    useEffect(() => {
        iconChanger()
    }, [weatherInfo])

    useEffect(() => {
        if (props.mInfo.name) {
            fetch(`${api.baseurl}weather?lat=${props.mInfo.lat}&lon=${props.mInfo.lng}&units=metric&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeatherInfo(result)
                    iconChanger()
                })
        }
    },[])

    const iconChanger = () => {
        const i = document.getElementById('wIcon')
        if (weatherInfo) {
            if (weatherInfo.weather[0].description.includes('cloud')) {
                i.src = '/images/c.png'
            }
            if (weatherInfo.weather[0].description.includes('rain')) {
                i.src = '/images/rain.png'
            }
            if (weatherInfo.weather[0].description.includes('mist')) {
                i.src = '/images/cloud.png'
            }
            if (weatherInfo.weather[0].description.includes('clear')) {
                i.src = '/images/moon.png'
            }
            if (weatherInfo.weather[0].description.includes('sunny')) {
                i.src = '/images/sun.png'
            }
        } 
    }

    const celsiusConverter = (val) => {
        let valNum = parseFloat(val);
        return Math.round((valNum * 1.8) + 32) + '°' ;
    }

    return (
        <div className=''>
            <Menu path={props.match.path} nightMode={props.nightMode} setNightMode={props.setNightMode}/>
            <h2 className='sTitle'>{props.mInfo.name}</h2>
            <div className='w'>
                <img src='' alt='' id='wIcon' />
            </div>
            {
                (weatherInfo) ? (
                    <div>
                        <h1 className='weth'>{weatherInfo.weather[0].main}</h1>
                        <div className='tempCont'>
                            <h4>{celsiusConverter((weatherInfo.main.temp_min) - 2)}</h4>
                            <h2>{celsiusConverter(weatherInfo.main.temp)}</h2>
                            <h4>{celsiusConverter((weatherInfo.main.temp_max) + 2)}</h4>
                        </div>
                    </div>
                )
                : null
            }
            <div className='addBtn'>add</div>
            <Footer/>
        </div>
    )
}

export default Weather