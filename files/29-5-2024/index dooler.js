import ReactDOM from 'react-dom/client'
let dooler=prompt("enter the dooler amount")
let rupees=dooler*83.72
const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
    <h1 style={{color:'red'}}>convertion of dooler to rupee</h1>
    <h1 style={{color:'pink'}}>enter value{dooler}</h1>
    <h1 style={{color:'green'}}>convertion to rupee</h1>
    <h3>{dooler}</h3>
    <h3>{rupees}</h3>
    </>
)