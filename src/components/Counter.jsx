import React, { useState } from "react";

export function Contador() {
  const [cuenta, fijarCuenta] = useState(0);

  function aumentarCuenta() {
    fijarCuenta(cuenta + 1);
  }

  function disminuirCuenta() {
    fijarCuenta(cuenta - 1);
  }

  return (
    <div>
      <p>{cuenta}</p>
      <button onClick={aumentarCuenta}>+1</button>
      <button onClick={disminuirCuenta}>-1</button> 
    </div>
  );
}
