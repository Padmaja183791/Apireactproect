import React from "react";
import { useState } from "react";
function App(){
const[state, setState]=useState(["a","b","c"])
const handler=()=>{
    
    setState(["s","t","y"])
    
    
}
    return(
        <>
        <h1>click event</h1>
        <h2>{state}</h2>
        <button onClick={handler}>clickme</button>
       
             
        
        </>
    )
}
export default App