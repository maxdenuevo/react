import { useState } from 'react'
import './App.css'
import { Title } from '../src/components/Title'
import { Button } from './components/Button'
import  { TextoLibre } from './components/TextoLibre'
import  { Contador } from './components/Counter'
import { ListadoPersonajes } from './components/ListadoPersonajes'


function App() {
  return (
    <div>
    <Title></Title>
    <Button></Button>
    <Contador></Contador>
    <TextoLibre></TextoLibre>
    <ListadoPersonajes></ListadoPersonajes>
    </div>
  );
}

export default App
