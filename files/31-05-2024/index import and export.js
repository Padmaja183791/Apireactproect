import ReactDOM from 'react-dom/client'
import uid,{course,duration,demo}from'./mod'
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    
    <>
   <h2>Exporting and importing</h2>
   <h3>{uid}</h3>
   <h3>{course}</h3>
   <h3>{duration}</h3>
   <h3>{demo()}</h3>
</>
)