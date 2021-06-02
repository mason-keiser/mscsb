import React from 'react'

const BeachCard = (props) => {

    return (
        <div>
            <div className='bc'>
                <div>{props.beach.beach_name}</div>
                <div>73°F</div>
                <div>sunny img</div>
            </div>
            
        </div>
    )
}

export default BeachCard