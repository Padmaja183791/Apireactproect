import React from 'react';
import { useState } from 'react';
import aw from'./images/a1.jpg'
import aw1 from './images/ap.png'
 
function App() {
    let z={
        pic:<img src={aw}alt=""/>
    }
    let as={
        pic1:<img src={aw1}alt=""/>
    }
    const[state,setState]=useState(z.pic)
    const handler=()=>{
        setState(as.pic1)
    }
        return(

    <>
    <h2>{state}</h2>
            <button onClick={handler}>click me</button>
        </>
    );
}
export default App;