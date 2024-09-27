
import { useState } from "react";
import ReactDOM from "react-dom/client";
import pic from './images/mp.png'

 export default function App () {
  const [state, setState] = useState([])

  const handler = (e) => {
    setState(e.target.value)
  }

  return (
    <form>
      <img src={pic}alt="" width={state}/>
      <h2>you are select  <span style={{color:'blue'}}></span>{state} couse </h2>
      <select value={state} onChange={handler}>
        <option value>400px</option>
        <option value>300px</option>
        <option value>100px</option>
      </select>
    </form>
  )
}


              

