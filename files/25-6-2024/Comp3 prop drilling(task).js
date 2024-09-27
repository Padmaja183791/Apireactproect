import React from "react"
import './style.css';
export default function Comp3({data}){
 

    return(
      <>
      {data.map((x)=><h1 className='aw'>{x}</h1>)}
      
          
</>


)
}
