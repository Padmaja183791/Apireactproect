import React from "react";
import ReactDOM from 'react-dom/client';
import pic from './images/flower.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <div className="container-fluid">
 <div class="row">
 <div className="bg-light col-md-6">
 A better alternative for those using this type of frameworks is to use a
  framework-specific package instead of the Bootstrap JavaScript.
   Here are some of the most popular options
 
  </div>
 
 <div className="bg-danger col-md-6">
  <p> A better alternative for those using this type of frameworks is to use a 
    framework-specific package instead of the Bootstrap JavaScript. 
    Here are some of the most popular options </p></div>  </div>  
 
  <div class="row">
<div className="bg-danger col-md-4">
  <h2> HEADING </h2>
  <p> A better alternative for those using this type of frameworks is to use
     a framework-specific package instead of the Bootstrap JavaScript.
     Here are some of the most popular options </p>
</div>
 
<div className="bg-success col-md-4">
  <h2> HEADING </h2>
  <p> A better alternative for those using this type of frameworks is
     to use a framework-specific package instead of the Bootstrap JavaScript.
     Here are some of the most popular options </p>
</div>
 
<div className="bg-pramary col-md-4">
 <img src={pic} alt="" className="img-fluid"/>  </div> </div>
 
 <div class="row">
 <div className="footer col-md-12 bg-warning">
   <h4> COPY rights </h4>
 </div> </div>
 
 </div>
  </>
)
 
 