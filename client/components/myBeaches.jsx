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
                        />
                    </div>
                </div>
            );
        })
    )
    : null


    return (
        <div>
            <Menu setMyBeaches={props.setMyBeaches} path={props.match.path} nightMode={props.nightMode} user={props.user} setNightMode={props.setNightMode}/>
            <h2 className='sTitle'>{userTert} Beaches</h2>
            <div className='row-cols-lg-3'>
                {items}
            </div>
        </div>
    )
}

export default MyBeaches