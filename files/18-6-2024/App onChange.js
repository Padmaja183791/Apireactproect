import React from 'react'
import { useState } from 'react'
export default function App(){
  const[state,setState]=useState('hello')
  const handler=(e)=>{
    setState(e.target.value)
}
return(
  <>
  <h1>maine page</h1>
  <h3>{state}</h3>
  <input type="txt" value={state}
  onChange={handler}/>
  </>
)}
