import React, { useState } from "react";
import { useEffect } from "react";
export default function App(){
  const[state, setState]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    //.then(json=>console.log(json))
    .then(json=>setState(json))
  })

  
  return(
    <>
  <h1>hello</h1>
 {state.map((item)=><li>{item.title}</li>)}
        </>
      

      )
}
