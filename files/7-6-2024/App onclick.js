import React from "react";
function App(){
function demo(){
    alert("Hello event")
}
    return(
        <>
        <h1>click event</h1>
        <button onClick={demo}>clickme</button>
       
             
        
        </>
    )
}
export default App