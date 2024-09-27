import React, { useState } from 'react'
export default function App(){
    <table barder='2'></table>
    const person=[
       {
        name:'aswitha',
        place:'delhi',
        age:'28'
       },
       {
        name:'bharath',
        place:'vizag',
        age:"30"
       },
       {
        name:'anitha',
        place:'mumbai',
        age:'37'
       },
       {
       name:'haritha',
       place:'hyderabad',
       age:'37'
       },
       
    ]
    const[data,setState]=useState(person)
    return(
        <>
          <h1>App</h1>
          <table border={2}>
            <tr>
                <th>name</th>
                <th>place</th>
                <th>age</th>
            </tr>
            {data.map((x,) => <tr><td>{x.name}</td><td>{x.place}</td><td>{x.age}</td></tr>)}

    </table>


    
    
        </>
    )
}