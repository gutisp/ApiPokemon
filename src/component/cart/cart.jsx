import React from 'react'
import './cart.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default props => {



    const compra = props.cart.map(item => {
        return (
            <div key={item.id} className='card-cart border-bottom border-secondary'>

                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url}.png`} alt="pokemons comprados"/>
                <label>{item.nome}</label>
                <label className='label-preco right'>{item.preco}</label>
                
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
        <div className="card cart">
            <h5 className="card-header">Carrinho</h5>
            <div className="card-bod border-bottom border-secondary">
                {compra}

            </div>
            <div className="card-footer text-muted">
                <div className='total'>
                    <label>Total</label>
                    <label className='right'>{props.total}</label>


                </div>
            </div>
            <div className="card-footer text-muted bg-success " onClick={oi}>
                <label className='text-dark font-weight-bold'> Finalizar</label>
                <FontAwesomeIcon className='icon-cart text-dark right' icon={faShoppingCart}/> 
            </div>
        </div>
    )
}