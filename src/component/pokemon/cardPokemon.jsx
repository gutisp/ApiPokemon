import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardPokemon.css'

import Cart from '../cart/cart'


export default props => {
    const [item, setItem,] = useState([])
    const [qtd, setQtd] = useState(1)
    const [total, setTotal] = useState(0)
    const [mostrar, setMostrar] = useState('')


    let i = 0
    let list = ''
    if (props.searchName[0].name === '') {
        list = props.pokemon
    } else {
        list = props.searchName
    }

    const pokemons = list.map(todo => {


        let preco = props.precos[i]
        i++
        const url = list.length !== 1 ? ((todo.url).substr(26)).split("").filter(n => (Number(n) || parseInt(n) === 0)).join("") : todo.url
        const purchase = () => {
            setQtd(qtd => qtd + 1)
            setItem([...item, { nome: todo.name, url: url, id: qtd, preco: preco }])
            setTotal(total => total + preco)
        }

        return (
            <div key={todo.name} className="card m-1">
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${url}.png`} className="card-img-top" alt={todo.name} />
                <div className="card-body">


                    <h5 className="card-title">{todo.name}</h5>
                    <p className="card-text">R$ {preco}</p>
                    <button className="btn btn-primary" onClick={purchase} >Adicionar</button>
                </div>
            </div>
        )
    });
    function remover(numero) {
        var i = item.findIndex(x => x.id === numero.id);
        var itens = [...item]
        itens.splice(i, 1)
        setItem(itens)
        setTotal(total => total - item[i].preco)
    }


const fechar = () => {
    setMostrar('')
    setItem([])
    setTotal(0)
}
const finalizar = () => {
    setMostrar(
        'mostrar'
    )
}

return (

    <div className="row">
        <div className="col-xl-9 col-lg-9 col-md-8 poker">
            {pokemons}
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4">
            <Cart cart={item} total={total} fechar={fechar} modal={mostrar} finalizar={finalizar} remover={remover} />
        </div>
    </div>

)

}
