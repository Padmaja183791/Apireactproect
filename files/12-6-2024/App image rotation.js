import React, { useState } from 'react';
import './style.css'; // Import your CSS file for styling
import pic from './images/images.jpg'
function App() {
  const [rotation, setState] = useState(0);
 
  const rotate = () => {
    setState(rotation + 90);
  };
 
  const wise = () => {
    setState(rotation - 180);
  };
 
  return (
    <div className="App">
      <div className="image-container" style={{ transform: `rotate(${rotation}deg)` }}>
        <img src={pic} alt="Rotatable" />
      </div>
      <div>
        <button onClick={rotate}> Clockwise</button>
        <button onClick={wise}> </button>
      </div>
    </div>
  );
}
 
export default App;
 