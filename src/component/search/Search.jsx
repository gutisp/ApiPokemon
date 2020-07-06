import React from 'react';
import './Search.css'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => {
    return (

        <div className="input-group mb-3 mt-3 search">
            <input type="text" className="form-control" placeholder='Qual Pokemon deseja?' aria-describedby="basic-addon2" onChange={props.onChange}/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={props.onClick}><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        </div>

    )
}

