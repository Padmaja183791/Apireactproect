import React from 'react'
import './style.css';
import About from './components/About'
import Services from './components/Service'
import Contact from './components/Contact'

import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
export default function App(){
return(
  <>
  <h1> Main page</h1>
  <BrowserRouter>
  <Link to="/" className='ap'>Home</Link>
  <Link to="/about" className='ap'>About</Link>
  <Link to="/services" className='ap'>Services</Link>
  <Link to="/contact" className='ap'>Contact</Link>
  
  <Routes>
  <Route path='/'  element={<h1>Home</h1>}></Route>
  <Route path='/about' element={<About />}></Route>
  <Route path='/contact us'element={<Services/>}></Route>
  <Route path='/services'element={<Contact/>}></Route>
  
 
  </Routes>
  </BrowserRouter>
  </>
)
}
