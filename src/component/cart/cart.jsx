import React from 'react'
import './cart.css'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default props => {



    const compra = props.cart.map(item => {
        return (
            <div key={item.id} className='card-cart'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url}.png`} />
                <label>{item.nome}</label>
                <label className='label-preco'>{item.preco}</label>
            </div>
        )
    })
    const oi = () => {
        document.getElementById('root').innerHTML = `
        <div class="final">
		    <h1>Parabéns</h1>
		    <p>Compra realizada!</p>
	    </div>`
    }

    return (
        <div className='container-cart'>
            <div className='cart'>
                <h1>Carrinho</h1>
                {compra}
            </div>
            <div className='total'>
                <label>Total</label>
                <label className='valor-total'>{props.total}</label>
            </div>
            <div className='finalizar' onClick={oi} >

                <label> Finalizar</label>
                <FontAwesomeIcon icon={faCartPlus} />
            </div>
        </div>
    )
}