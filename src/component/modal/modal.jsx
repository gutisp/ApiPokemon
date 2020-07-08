import React from 'react'
import './modal.css'
export default props => {
    return(
        <div className='modal-container'>
            <div>
                <button className='fechar'>X</button>
               <h1>Parabéns</h1>
                <h3>Compra efetuada com sucesso!</h3>
            </div>
        </div>
    )
}