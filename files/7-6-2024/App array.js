import React from 'react';
import { useState } from 'react';
 
function On() {
    const [name, setstate] = useState({
        name: "aswitha",
        place: 'Hyderabad',
        age:20
    });
 
    const handler = () => {
        setstate({
           
            name: "kumar",
            place: "madhapur",
            age:30
        });
    };
 
    return (
        <>
            <h3>click event</h3>
           <table border={2}>
                <tr>
                    <td>name</td>
                    <td>place</td>
                    <td>age</td>
                </tr>
               <tr>
                <td>{name.name}</td>
                <td>{name.place}</td>
                <td>{name.age}</td>
               </tr>
            </table>
            <button onClick={handler}>click me</button>
        </>
    );
}
export default On;