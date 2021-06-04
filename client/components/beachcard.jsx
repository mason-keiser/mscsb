import React, { useEffect, useState } from 'react'
import api from './api'

const BeachCard = (props) => {
    const [w, setW] = useState();

    useEffect(() => {
        iconChanger()
    }, [w])

    useEffect(() => {
        if (props.beach.beach_name) {
            fetch(`${api.baseurl}weather?lat=${props.beach.beach_lat}&lon=${props.beach.beach_long}&units=metric&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setW(result)
                })
        }
    },[])

    const iconChanger = () => {
        const img = document.querySelectorAll('#wImg')
        for (let i = 0; i < img.length; i ++) {
            if (w) {
                if (w.weather[0].description.includes('cloud')) {
                    img[i].src = '/images/c.png'
                }
                if (w.weather[0].description.includes('rain')) {
                    img[i].src = '/images/rain.png'
                }
                if (w.weather[0].description.includes('mist')) {
                    img[i].src = '/images/cloud.png'
                }
                if (w.weather[0].description.includes('clear')) {
                    img[i].src = '/images/moon.png'
                }
                if (w.weather[0].description.includes('sunny')) {
                    img[i].src = '/images/sun.png'
                }
                else  {
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

    return (
        <div className='bco'>
            {
                (w) ? (
                <div>
                    <div className='bc' style={{background: styleTerp}}>
                        <div>{props.beach.beach_name}</div>
                        <div id='bcTemp'>{celsiusConverter(w.main.temp)}F</div>
                        <div className='fadeIn '>
                            <img src='' alt='' id='wImg' />
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