import React, { Component } from 'react';
import axios from 'axios';

import CardPokemon from './cardPokemon'
import Button from '../button/button'
import Search from '../search/Search'
import If from '../../operacao/if'



export default class App extends Component {
    constructor() {
        super()
        this.state = {
            pesquisado: [{
                name: '',
                url: 0,
                hidden: false
            }],
            pokemon: [],
            offset: 0,
            name_typed: '',
            precos: []

        }
        this.nextPage = this.nextPage.bind(this)
        this.reflesh = this.reflesh.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
        this.voltar = this.voltar.bind(this)
    }

    async componentDidMount() {

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
        let preco = []
        for (let i = 0; i < (res.data['results']).length; i++) {
            preco.push(Math.floor(Math.random() * (100 - 10)) + 10)
        }

        this.setState({
            pokemon: res.data['results'],
            precos: preco
        })


    }

    async previousPage() {
        await this.setState({
            offset: this.state.offset - 20
        })
        this.reflesh()
    }
    async nextPage() {
        await this.setState({
            offset: this.state.offset + 20
        })
        this.reflesh()
    }
    async reflesh() {
        const { offset } = this.state
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
        this.setState({
            pokemon: res.data['results']
        })
    }
    async onChange(e) {
        await this.setState({
            name_typed: e.target.value
        })

    }
    async onClick() {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.name_typed}`)
        this.setState({
            pesquisado: [{ name: res.data.name, url: res.data.id, hidden: true }]
        })

    }
    async voltar() {
        
       await this.setState({
            pesquisado: [{ name: '', url: 0, hidden: false }]
        })
    }

    render() {
        const { pesquisado, name_typed, preco, precos, pokemon, offset } = this.state
        console.log(offset)
        return (
            <div>
                <Search onClick={this.onClick} onChange={this.onChange} value={name_typed} />
                <CardPokemon pokemon={pokemon} precos={precos} searchName={pesquisado} preco={preco} />
                {pesquisado[0].hidden ? <Button name='voltar' page={this.voltar} /> :
                    <div>
                        <Button name='proxima' page={this.nextPage} />
                        <Button name='anterior' page={this.previousPage} />
                    </div>
                }
            </div>
        );

    }
}


