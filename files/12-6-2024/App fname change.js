import React, { useState } from 'react'
export default function App() {
  const person = {
    fname: 'Akila'
  }
  const [state, setState] = useState(person)
  const update = () => {
    if (state.fname == 'Akila') {
      setState({ fname: 'Arun' })
    }
    else if (state.fname == 'Arun') {
      setState({ fname: 'Akila' })
    }
 
  }
 
  return (
    <>
     
      <h3>firstname is {state.fname}</h3>
      <button onClick={update}>Update</button>
    </>
  )
}