import ReactDOM from 'react-dom/client'
import pic from'./images/a1.jpg'
const clr={
  color:'red'
  
}
const p={
  width:"250px",
  border:'3px solid red'
}

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    
    <>
  <h1 style={clr}>first method using obj</h1>
  <h2 style={{color:'green'}}>one more method</h2>
  <img src={pic} alt="" style={p}/>
  <br/>
  <img src={"logo192.png"} alr=""/>
</>
)