import React, { Component } from 'react';
import './App.css';


import ListPokemon from './component/pokemon/listPokemon'


export default class App extends Component {

  render() {
    
    return (
      <div>
        <ListPokemon />
      </div>
    );
  }
}


