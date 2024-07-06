import React, { useEffect, useState } from "react";

export function RocketList() {
    let [rockets, updateRockets] = useState([]);
  
    useEffect(() => {
      fetch("https://api.spacexdata.com/v3/rockets")
        .then((response) => {
          return response.json();
        })
        .then((resultConverted) => {
          console.log(resultConverted); 
          updateRockets(resultConverted)
        })
        .catch((error) => {
          console.log(error);
        });
     
    }, []);
  
    return (
      <ul>
       {rockets.map((nombre) => {
          return <li> {nombre.rocket_name}
               </li>

          
          })
       }
      </ul>
    );
  }
