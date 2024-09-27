import React, { useState } from 'react'
export default function App() {
  const person = {
    fname: 'Akila',
    lname:'arun'
  }
  const [state, setState] = useState(person)
  const update = () => {
    setState({...state,fname:'sunil'})

  

  }
  return (
    <>
     
      <h3>firstname is {state.fname}
      and last name is {state.lname}</h3>
      <button onClick={update}>Update</button>
    </>
  )
}