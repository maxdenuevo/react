//Letra mayúscula y .jsx
import React from "react";

export function Button() {

    function responderAlEventoClick(){
        alert("El usuario dio click");
    }
    function pasoPorArriba(){
        console.log("porfa no!");
    }

    return <button onClick={responderAlEventoClick}> Click me! </button>;
}

