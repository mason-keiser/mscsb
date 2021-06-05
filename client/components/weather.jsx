import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Menu from './menu'
import Footer from './footer';
import api from './api'
import { useHistory } from 'react-router-dom'

const Weather = (props) => {
    const [weatherInfo, setWeatherInfo] = useState();
    const history = useHistory()

    useEffect(() => {
        iconChanger()
    }, [weatherInfo])

    useEffect(() => {
        tert()
    }, [props.myBeaches])

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
                i.src = '/images/sun.png'
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

    const addApi = () => {
        let userTert = (!props.user[0]) ? props.user.user_id : props.user[0].user_id
        const beachObj = {
            user_id: userTert,
            beach_name: props.mInfo.name,
            beach_lat: props.mInfo.lat, 
            beach_long: props.mInfo.lng,
        }

        if (!beachObj) return console.log('beach obj is falsy')

        fetch('/api/addBeach', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(beachObj)
        })
        .then(response => {
            if (response.status === 400 || response.status === 404) {
                return null
            } else {
                props.getBeaches()
            }
        })
    }

    const add = () => {
        const add = document.querySelector('.addBtn')
        const rmv = document.querySelector('.rmvBtn')
        
        addApi()

        rmv.style.display = 'unset'
        add.style.display = 'none'

        history.push("/mybeaches")
    }

    const rmvApi = () => {
        let userTert = (!props.user[0]) ? props.user.user_id : props.user[0].user_id
        const beachObj = {
            user_id: userTert,
            beach_name: props.mInfo.name
        }

        if (!beachObj) return console.log('beach obj is falsy')

        fetch('/api/rmvBeach', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(beachObj)
        })
        .then(response => {
            if (response.status === 400 || response.status === 404) {
                return null
            } else {
                props.getBeaches()
            }
        })
    }

    const rmv = () => {
        const add = document.querySelector('.addBtn')
        const rmv = document.querySelector('.rmvBtn')

        rmvApi()

        rmv.style.display = 'none'
        add.style.display = 'unset'
    }

    const tert = () => {
        const add = document.querySelector('.addBtn')
        const rmv = document.querySelector('.rmvBtn')
        if (!props.myBeaches) {
            rmv.style.display = 'none'
            add.style.display = 'unset'
            return 
        }
        if(props.myBeaches.some(beach => beach.beach_name === props.mInfo.name)){
            rmv.style.display = 'unset'
            add.style.display = 'none'
        } else{
            rmv.style.display = 'none'
            add.style.display = 'unset'
        }
    }

    return (
        <div className='wC'>
            <Menu setMyBeaches={props.setMyBeaches} path={props.match.path} nightMode={props.nightMode} user={props.user} setNightMode={props.setNightMode}/>
            <h2 className='sTitle'>{props.mInfo.name}</h2>
            
            {
                (weatherInfo) ? (
                    <div>
                        <div className='w fadeIn '>
                            <img src='' alt='' id='wIcon' />
                        </div>
                        <h1 className='weth'>{weatherInfo.weather[0].main}</h1>
                        <div className='tempCont'>
                            <h4>{celsiusConverter((weatherInfo.main.temp_min))}</h4>
                            <h2>{celsiusConverter(weatherInfo.main.temp)}</h2>
                            <h4>{celsiusConverter((weatherInfo.main.temp_max) )}</h4>
                        </div>
                        <div className='bottomWeathSection'>                       
                            <div className='tRow'>
                                <h3>Wind Speed</h3>
                                <div className='bar'>|</div>
                                <h3>{Math.round(((2.23694 * weatherInfo.wind.speed).toFixed(2)))} mph</h3>
                            </div>
                            <div className='bRow'>
                                <h3>Clouds  </h3>
                                <div className='bar'>|</div>
                                <h3>~ {weatherInfo.clouds.all}</h3>
                            </div>
                        </div>
                    </div>
                )
                : (
                    <div>
                        <h3 className='errTit'>Loading Weather Report ...</h3>
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                ) 
            }
            {
                <div>
                    <div className='rmvBtn fadeIn' onClick={() => rmv()}>rmv</div>
                    <div className='addBtn fadeIn' onClick={() => add()}>add</div>
                </div>
            }   
            <Footer/>
        </div>
    )
}

export default Weather