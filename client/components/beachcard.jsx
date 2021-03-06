import React, { useEffect, useState } from 'react'
import api from './api'
import { useHistory } from 'react-router-dom'

const BeachCard = (props) => {
    const [w, setW] = useState();
    const history = useHistory()

    useEffect(() => {
        iconChanger()
    }, [w])

    useEffect(() => {
        if (props.beach.beach_name) {
            fetch(`${api.baseurl}weather?lat=${props.beach.beach_lat}&lon=${props.beach.beach_long}&units=metric&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setW(result)
                    iconChanger()
                })
        }
    },[])

    const d = new Date();
    const hours = d.getHours()

    const iconChanger = () => {
        const img = document.querySelectorAll('#wImg')
        for (let i = 0; i < img.length; i ++) {
            if (w) {
                if (img[i].classList.contains('cloud')) {
                    img[i].src = '/images/c.png'
                } else if (img[i].classList.contains('rain')) {
                    img[i].src = '/images/rain.png'
                } else if (img[i].classList.contains('mist')) {
                    img[i].src = '/images/cloud.png'
                } else if (img[i].classList.contains('clear')) {
                    if (hours <= 3 || hours >= 20) {
                        img[i].src = '/images/moon.png'
                    } else {
                        img[i].src = '/images/sun.png'
                    }
                } else if (img[i].classList.contains('sunny')) {
                    img[i].src = '/images/sun.png'
                } else {
                    img[i].src = '/images/c.png'
                }
            } 
        }
    }

    const celsiusConverter = (val) => {
        let valNum = parseFloat(val);
        return Math.round((valNum * 1.8) + 32) + '°' ;
    }

    const styleTerp = (props.nm) ? '#0e0e0e' : 'white'

    const onWeatherClick = () => {
        let weth = {
            lat: props.beach.beach_lat,
            lng: props.beach.beach_long,
            name: props.beach.beach_name
        }
        props.setMInfo(weth)
        history.push("/weather")
      };

    return (
        <div className='bco'>
            {
                (w) ? (
                <div>
                    <div className='bc' onClick={() => onWeatherClick()} style={{background: styleTerp}}>
                        <div>{props.beach.beach_name}</div>
                        <div id='bcTemp'>{celsiusConverter(w.main.temp)}F</div>
                        <div className='fadeIn '>
                            <img src='' alt='' className={w.weather[0].description} id='wImg' />
                        </div>
                    </div>
                </div>
                )
                : (
                    <div>
                        <h3 className='errTit'>Loading Beaches</h3>
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                ) 
            }
        </div>
    )
}

export default BeachCard