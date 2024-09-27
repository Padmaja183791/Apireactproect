import React from 'react'
import"../node_modules/bootstrap/dist/css/bootstrap.css"
import"../node_modules/bootstrap/dist/js/bootstrap.js"
function App(props){
    return(
        <>
        <div class="card">
            <img src={props.pic1} alt="..."/>
            </div>
            <div className='card-body'>
                <h1>price {props.price}</h1>

            </div>
        
        </>
    )

    
}
export default App