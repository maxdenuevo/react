import React, { useEffect, useState } from "react";

export function ListPokemon() {
  let [Pokemon, updatePokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        return response.json();
      })
      .then((resultConverted) => {
        console.log(resultConverted.results); 
        updatePokemon(resultConverted.results)
      })
      .catch((error) => {
        console.log(error);
       
      });

  }, []);

  return (
    <ul>
     {Pokemon.map((pokemon) => {
        return <li> {pokemon.name} </li>
        })
     }
    </ul>
  );
}
