import React, { useState} from "react";

export function TextoLibre (){
    let [texto, actualizarTexto] = useState(" ");

    function eventoActualizarTexto(evento) {
        actualizarTexto(evento.target.value);
    }

    return(
       <div>
            <p>{texto}</p>
            <input type="text" onChange={eventoActualizarTexto}/>
       </div> 

    );
}