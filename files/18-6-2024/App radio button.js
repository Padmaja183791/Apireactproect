
import React from 'react'
import { useState } from 'react'
export default function App() {
  const[state, setState]=useState()
  const handler=(e)=>{
    setState(e.target.value)
  }
  return (
  <>
  <h1>Select Pizza Size</h1>
  <form onChange={handler}>
  <input type='radio' value='regular' name='ap' />regular
  <input type='radio'value='class' name='ap' />class
  <input type='radio' value='Small' name='ap'/>Small
  </form>
 <h1>YOU SELECTED <span style={{color:'blue'}}>{state}</span></h1>
 
  </>
  )
}