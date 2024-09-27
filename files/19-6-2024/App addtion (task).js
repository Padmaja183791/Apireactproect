import React from 'react';
import { useState } from 'react';

export default function App(){
  const [add,setAdd]=useState(0)
  const[minus,setMinus]=useState(100)

const addtion=()=>{
  setAdd(add+1)
}
  const deletion=()=>{
    setMinus(minus-1)
  }

  
  return(
    <>
    
          <button onClick={addtion}>add</button>{add}

          <button onClick={deletion}>decrement</button>{minus}
        
        
  
    </>
   
  )
}
