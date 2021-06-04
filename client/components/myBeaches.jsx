import React from 'react';
import Menu from './menu';
import BeachCard from './beachcard';

const MyBeaches = (props) => {
    let userTert = (props.user.user_first_name) ? `${props.user.user_first_name}'s` : `${props.user[0].user_first_name}'s` 

    const items = (props.myBeaches) 
    ?  (props.myBeaches.map((beach, index) => {
            return(
                <div className='m-auto'  key={index}>
                    <div className='singPost'>
                        <BeachCard
                            beach={beach}
                            nm={props.nightMode}
                            setMInfo={props.setMInfo}
                        />
                    </div>
                </div>
            );
        })
    )
    : (
        <div className='dd'>
            <h3 className='errTit'>No Saved Beaches</h3>
            <h4 className='subTit'>Visit Map Page and select a beach to add one to your list</h4>
            <div className="snippet" data-title=".dot-pulse">
                <div className="stage">
                    <div className="dot-pulse"></div>
                </div>
            </div>
        </div>
    ) 


    return (
        <div>
            <Menu setMyBeaches={props.setMyBeaches} path={props.match.path} nightMode={props.nightMode} user={props.user} setNightMode={props.setNightMode}/>
            <h2 className='sTitle mb-4'>{userTert} Beaches</h2>
            <div id='bCont' className='row-cols-lg-3'>
                {items}
            </div>
        </div>
    )
}

export default MyBeaches