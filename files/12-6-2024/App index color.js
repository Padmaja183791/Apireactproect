import React, { useState } from 'react'
 
export default function App() {
  const person={
    fname:'ashok',
    lname:'kumar',
    age:23
  }
 const[state,setState]= useState(person)
 const update=()=>{
  setState({fname:'Arun',lname:'Naddi'})
 }
  return (
    <>
    <h3>First Name is <span className='txt'>{state.fname}</span> Last Name is <span className='txt' >{state.lname}</span></h3>
    <button onClick={update}>update</button>
     
    </>
  )
}