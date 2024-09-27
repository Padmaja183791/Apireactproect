import React, { useState } from 'react'
export default function App(){
    
    const person=[
       {
        name:'aswitha',
        place:'delhi'
       },
       {
        name:'bharath',
        place:'vizag'
       },
       {
        name:'anitha',
        place:'mumbai'
       }]
    
    return(
        <>
          
          {person.map((x)=>
        <li>{x.name},{x.place}</li>)}
    


    
    
        </>
    )
}