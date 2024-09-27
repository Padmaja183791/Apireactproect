import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import'./style.css'
import pic from './images/exercise.png'
export default function Comp2(){
  return(
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
    <h1 className='m-3 p-2'>WORKOUT MORE<br/>
    <span style={{color:'green'}}> EXCLUSIVE </span>FOR YOU</h1>
    
    <p>Endurance, or aerobic, activities increase your breathing and heart rate. 
        They keep your heart, lungs, and circulatory system healthy and improve:<br/></p>
         <button style={{background:'green'}}>start now</button>
         </div>
         <div className='col-md-6'>
         <img src={pic} alt=''/>
         </div>    
    </div>
            </div>
         
                <div className='footer'>
                <h5 align='center'>send us a message@trinee.me</h5>
                </div>
            

            
            </>
            )
            }