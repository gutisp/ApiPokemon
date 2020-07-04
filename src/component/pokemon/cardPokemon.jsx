import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Cart from '../cart/cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default props => {
    const [item, setItem,] = useState([])
    const [qtd, setQtd] = useState(1)
    const [total, setTotal] = useState(0)
    let i = 0
    let list = ''
    if (props.searchName[0].name === '') {
        list = props.pokemon
    } else {
        list = props.searchName
    }

    const vamos = list.map(todo => {


        let preco = props.precos[i]
        i++
        const url = list.length !== 1 ? ((todo.url).substr(28)).split("").filter(n => (Number(n) || n === 0)).join("") : todo.url
        const purchase = () => {
            setQtd(qtd => qtd + 1)
            setItem([...item, { nome: todo.name, url: url, id: qtd, preco: preco }])
            setTotal(total => total + preco)
        }

        return (
            <>
            <div className='card' key={todo.name}>
                <label>{todo.name}</label><br />
                <div className='imgCard'>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url}.png`} alt="" />
                </div>

                <label> R$ {preco}</label><br />
                <div className='purchase'><label>Adicionar  <FontAwesomeIcon className='icons' onClick={purchase} icon={faPlusCircle} /></label></div>

            </div>

            <div className="container">
                <div className="card">
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${url}.png`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{todo.name}</h5>
                        <p className="card-text">R$ {preco}</p>
                        <a href="#" className="btn btn-primary">Adicionar</a>
                    </div>
                </div>
            </div>
            </>
    
        )


    });



    return (
        <div className='pagina'>
            <div className='container'>{vamos}
            </div>
            <Cart cart={item} total={total} />

        </div>
    )

}
