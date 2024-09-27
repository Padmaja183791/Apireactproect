import React from "react";
import'../node_modules/bootstrap/dist/css/bootstrap.css';
import'../node_modules/bootstrap/dist/js/bootstrap.js';

 import Home from "../src/API React Project/Home.js"
//  import About from "./API React Project/About.js"
//  import Home from "../src/API React Project/Home.js"
import  API from'./API React Project/About us API';
import BMIAPI from './BMIAPI React Project/BMIAPI';
import About from'./About us API React Project/About us API';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
export default function App(){
  return(
    <>
     <BrowserRouter>
     <nav className="navbar navbar-expand-lg navbar-light bg-warning">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">
              <img src={" "} className="d-block" alt="Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav ">
              <ul className="navbar-nav mx-auto p-4">
                <li className="nav-item ">
                  <Link className="nav-link" to="/Home"><b>Home</b></Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/about"><b>About</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact"><b>Contact</b></Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/CheckBMI"><b>CheckBMI</b></Link>
                </li>
               
                <li className="nav-item dropdown ">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <b>APIs</b>
                  </Link>
                  <ul className="dropdown-menu bg-warning" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/Products">Product api</Link></li>
                    <li><Link className="dropdown-item" to="/news">News API</Link></li>
                   
                    <li><Link className="dropdown-item" to="/Food">Food Recipe API</Link></li>
                    <li><Link className="dropdown-item" to="/Movies">Movie API</Link></li>
                    <li><Link className="dropdown-item" to="/Weather">Weather Api</Link></li>
                  </ul>
                </li>
             
              </ul>
             
            </div>
          </div>
        </nav>
        <Routes>
           <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/BMIAPI" element={<BMIAPI />} />
          <Route path="/API" element={<API />} />
          <Route path="/ProductsAPI" element={<ProductsAPI />} />
          <Route path='/NewsAPI' element={<News />} />
          <Route path='/WeatherAPI' element={<Weather />} />
          <Route path='/Food' element={<Food />} />
          <Route path='/Movies API' element={<Movies/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
 