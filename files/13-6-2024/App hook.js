import React, { useState } from "react";
import { useEffect } from "react";
export default function App(){
  const[state, setState]=useState(0)
  useEffect(()=>{
    console.log("Component mounted...")
  })
  const handler=()=>{
    setState(state+1)

  }

  
  return(
    <>
  <h1>useEffect</h1>
  <h2>{state}</h2>
  <button onClick={handler}>update</button>
  
        </>
      

      )
}
