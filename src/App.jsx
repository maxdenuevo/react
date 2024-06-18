import { useState } from 'react'
import './App.css'
import { Title } from '../src/components/Title'
import { Button } from './components/Button'
import  { TextoLibre } from './components/TextoLibre'
import  { Contador } from './components/Counter'
import { ListPokemon } from './components/Pokemon'
import { RocketList } from './components/SpaceX'
import { characterList } from './components/Characters'


function App() {
  return (
    <div>
    <Title nombre= "Max" apellido= "Ihnen"></Title>
    <h3>Listen to the button:</h3>
    <Button></Button>
    <h3>clicker counter:</h3>
    <Contador></Contador>
    <h3>Copy text out of the text box</h3>
    <TextoLibre></TextoLibre>
    <h3>fetch from Pokémon API</h3>
    <ListPokemon></ListPokemon>
    <h3>fetch from SpaceX API</h3>
    <RocketList></RocketList>
    </div>
  );
}

export default App
