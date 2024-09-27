import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
export default function App(){
  const cal=0
  const [state,setState]=useState(cal)
  function aw(){
    setState(state-1)
  }
  function as(){
    setState(state+1)
  }
  return(
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <button onClick={aw} className='bgn bgn-sucess'><span>-</span></button>
          <input placeholder={state} className='text-center'/>
          <button onClick={as} className='bg-primary'><span>+</span></button>
        </div>
        <div className='col-md-4'></div>
      </div>
    </div>
    </>
   
  )
}
