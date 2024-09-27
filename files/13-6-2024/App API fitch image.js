import React from "react";
import { useState } from "react";
export default function App(){
  const[state,setState]=useState([])
  fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
    
      .then(json => setState(json))
      return(
        <>
        <h2>Hello</h2>
        <table border={3}>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>photos</td>
            
          </tr>
        {state.map((val)=><tr><td>{val.id}</td><td>{val.title}</td><td><img src={val.url}alt=""/></td></tr>)}
        </table>
        </>
      

      )
}
