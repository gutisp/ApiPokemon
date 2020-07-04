import React from 'react';
import './button.css'

export default props => {
    return (
        <div className='continer-button'>
            <button onClick={props.page}>{props.name}</button>
        </div>
    
    )
}


