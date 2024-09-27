import ReactDOM from 'react-dom/client'
//defing a variable
let name=prompt("enter your name")
const place=prompt("enter your place")
var email=prompt("enter your email")
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    
    <>
    <table border='2px' style={{borderColor:"green"}}>
        <tr style ={{color:'red'}}>
        <tr>
    <th>name</th>
    <th>place</th>
    <th>email</th>
</tr>
<tr>
<td>{name}</td>
<td>{place}</td>
<td>{email}</td>
</tr>
</tr>
    </table>
</>
)