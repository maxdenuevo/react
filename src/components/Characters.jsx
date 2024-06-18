import React, { useEffect, useState } from "react";

export function characterList() {
  let [characters, updateCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((resultConverted) => {
        console.log(resultConverted.results); //Objeto con la respuesta
        updateCharacters(resultConverted.results)
      })
      .catch((error) => {
        console.log(error);
        //cuando exista un error
      });

  }, []);

  return (
    <ul>
     {characters.map((character) => {
        return <li> <img src={character.image} alt={character.name} />
             </li>

        })
     }
    </ul>
  );
}
