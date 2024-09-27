import ReactDOM from 'react-dom/client'
import pic from'./images/a1.jpg'
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    
    <>
  <h1>inserting images from src folder</h1>
  <img src={pic} alt=""width="200px"/>
</>
)