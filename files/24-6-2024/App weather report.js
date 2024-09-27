import { useState } from 'react'
import axios from 'axios'
export default function App() {
  const [state, setState]=useState([])
  function handler(){
  axios.get('https://api.openweathermap.org/data/2.5/weather?q=anantapur&appid=55a0ebcb240d607f077934dec3f7822a')
.then((res)=>{
 //console.log(res)
  //console.log(res.base.stations.main)
 setState(res.data.main)
})
  }  
  return (
    <>
    <h1>anantapur Temperature</h1>
{state.temp-273.15}
<button onClick={handler}>get value</button>
 
    </>
  )
}
