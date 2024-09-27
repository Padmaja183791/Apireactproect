import React from "react";
import { useState } from "react";
export default function App(){
  const[state,setState]=useState([])
  fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
    
      .then(json => setState(json))
      return(
        <>
        <h2>Hello</h2>
        <table border={3}>
          <tr>
            <td>id</td>
            <td>title</td>
            
          </tr>
        
        {state.map((val)=><tr><td>{val.id}</td><td>{val.title}</td></tr>)}
        </table>
        </>
      

      )
}
