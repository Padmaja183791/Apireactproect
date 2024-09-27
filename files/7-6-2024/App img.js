import React from 'react';
import { useState } from 'react';
import aw from'./images/a1.jpg'
import aw1 from './images/ap.png'
 
function App() {
    const[state,setState]=useState(<img src={aw}alt=""/>)
    const handler=()=>{
        setState(<img src={aw1}alt=""/>)
    }
        return(

        
    
    <>
            
            <h2>{state}</h2>
            <button onClick={handler}>click me</button>
        </>
    );
}
export default App;