import React from "react";
import { useState } from "react";
export default function App(){
  const[state,setState]=useState([])
  fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
    
      .then(json => setState(json))
      return(
        <>
        <h2>Hello</h2>
        {state.map((val)=><li>{val.title}</li>)}
        </>
      )
}
