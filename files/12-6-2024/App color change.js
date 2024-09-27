import React from "react";
import { useState } from "react";
import './index.css'
export default function App(){
const[style, setStyle]=useState('txt')
const update =()=>{
    setStyle('txt1')

}
    return(
        <>
      
    <h1 className={style}>Mouritech</h1>
        
        <button onClick={update}>
            update</button>
       
        </>
    )
}
