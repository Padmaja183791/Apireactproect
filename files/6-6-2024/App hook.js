import React from 'react'
import { useState } from 'react'
function App(){
    //let uid="Mouritech"
    const person={
        name:'padmaja',
        place:'uk',
        age:24

    }
    //using arrays
    const students=['ASWITHA','ashitha','ashok']
  //const [state, setState]=useState("uid")
  //const [name,setState]=useState(person)
  const [state, setState]=useState(students)
  return( 
  <>
  <h1>React</h1>
  <h2>useState</h2>
  {/*<h1>{state.name}</h1>*/}
  <h3>{state[2]}</h3>

   
        </>
    )
}
export default App