import React, { useState } from 'react'
import pic from './images/images.jpg'
import './style.css';
export default function App() {
  const [state,setState]=useState('pic')
  function r(){
    if(state==='pic'){
    setState('pic1')
    }else{
      setState('pic')  
    }
  }
  return (
    <>
      <img src={pic} alt='' className={state}/>
      <br/>
      <button onClick={r}>rotate</button>
    </>
  )
}
