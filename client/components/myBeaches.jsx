import React from 'react';
import Menu from './menu';

const MyBeaches = (props) => {
    let userTert = (!props.user[0]) ? `${props.user.user_first_name}'s` : `${props.user[0].user_first_name}'s` 

    return (
        <div>
            <Menu path={props.match.path} nightMode={props.nightMode} user={props.user} setNightMode={props.setNightMode}/>
            <h2 className='sTitle'>{userTert} Beaches</h2>
        </div>
    )
}

export default MyBeaches