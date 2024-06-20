import React from "react";
import { Title } from '../components/Title'
import { Button } from '../components/Button'
import  { TextoLibre } from '../components/TextoLibre'
import  { Contador } from '../components/Counter'
import { ListPokemon } from '../components/Pokemon'
import { RocketList } from '../components/SpaceX'
import { Navbar } from "../components/Navbar";

export function HomePage() {
    return (
    <div>
        <Navbar />
    <h1>HomePage</h1>
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