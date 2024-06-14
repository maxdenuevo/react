import React, { useEffect, useState } from "react";

export function ListadoPersonajes () {

    let [personajes, actualizarPersonajes] = useState([]);

    useEffect (() =>{
        fetch()

    }, []    );

    return (
    <ul>
        <li>Personaje 1</li>
        <li>Personaje 2</li>
        <li>Personaje 3</li>
    </ul>
    );
}