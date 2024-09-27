import React from 'react'
export default function App(){
    
    const num =['vazag','banglure','hyderabad','madhapur',]
    return(
        <>
          
    
        <table border={2}>
        <h2>city</h2>
    
    {num.map((x)=>
    <tr>
        <td>{x}</td>
    </tr>)}
    </table>
    
        </>
    )
}