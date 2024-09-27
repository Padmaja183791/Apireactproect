import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
export default function App() {
  const [state, setState] = useState([])
  
 useEffect(() => {
    fetch('https://randomuser.me/api/?results=25')
      .then(res => res.json())
      .then(json => setState(json.results))
  }, [])

  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
        {state.map((x)=>(
      
              <div className="card" style={{width:'20rem'}}>
                <img src={x.picture.large} className="card-img-top" alt={x.photos} />
                <div className="card-body">
                  <h5 className='card-title'>{x.name.first}</h5>
                  <p className='card-text'>{x.gender}</p>
                 </div>
              </div>
            ))}
        
        </div>
        </div>
       
    </>
  )};