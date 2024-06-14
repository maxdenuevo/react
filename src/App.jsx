import { useState } from 'react'
import './App.css'
import { Title } from '../src/components/Title'
import { Button } from './components/Button'
import  { TextoLibre } from './components/TextoLibre'

function App() {
  return (
    <div>
    <Title nombre= "Max" apellido= "Ihnen"></Title>
    <Button></Button>
    <Contador></Contador>
    <TextoLibre></TextoLibre>
    </div>
  );
}

export default App
