import React, { useState } from 'react'
export default function App() {
  const person = {
    fname: 'Akila',
    lname:'arun'
  }
  const [state, setState] = useState(person)
  const update = () => {
    (state.fname=='Akila'? setState({fname:'arun'}):setState({fname:'akila'}))

  

  }
  return (
    <>
     
      <h3>firstname is {state.fname}</h3>
      <button onClick={update}>Update</button>
    </>
  )
}