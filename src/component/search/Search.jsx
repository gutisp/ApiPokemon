import React from 'react';
import './Search.css'
export default props => {
    return (
        <div className='container-search'>
            <input type="text" onChange={props.onChange}/>
            <button onClick={props.onClick}>Search</button>
        </div>
    
    )
}


