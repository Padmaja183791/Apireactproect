import React, { useState, useEffect } from 'react';

export default function App() {
  const [state, setState] = useState([]);
  
 useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      //.then(json=>console.log(json))
      .then(json => setState(json.results));
  }, []);

  return (
    <>
        {state.map((x)=><li>{x.name.first}</li>)}

       
    </>
  )};