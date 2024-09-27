import ReactDOM from 'react-dom';
import './style.css'
 let name=prompt("Enter Your Name")
let weight=prompt("Enter You Weight")
let height=prompt("Enter Your Height")
let age=prompt("Enter Your age")
let h1=height*height
 let ms
 let bmi=weight/h1
if(bmi<=18.5)
    {
        ms="UnderWeight"
    }
    else if(bmi>=18.5 && bmi<=25)
    {
        ms="Normal"
    }
    else if(bmi>=25 && bmi<=30)
    {
        ms="OverWeight"
    }
    else
    {
        ms="Obesity"
    }
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<table border = {10} align = "center" >
    <tr id="as">
        <td>name</td>
        <td>height</td>
        <td>weight</td>
        <td>age</td>
        <td>value</td>
    </tr>
  <tr id="aw">
        <td >{name}</td>
        <td >{height}</td>
        <td >{weight}</td>
        <td >{age}</td>
        <td>{ms}</td>
    </tr>
   </table>
  </>
)
