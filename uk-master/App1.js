import React from 'react';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import ArtworkList from './ArtworkList';
import ArtworkDetail from './ArtworkDetail';
import "./styles.css"
const App = () => {
  return (
    <BrowserRouter>
      <div className='Container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-light" id="nav">
          <div className="container-fluid">
            <Link className="navbar-brand" to="ArtworkList/" id="logo">
             
              <span className='app-title'>React API </span>
            </Link>
 
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
 
                <li className="nav-item">
                  <Link className="nav-link" to="/ArtworkList"  >
                               Gallery
                  </Link>
                </li>
 
               </ul>
             </div>
          </div>
        </nav>
 
 
 
        <Routes>
          <Route path="/" element={<ArtworkList />} style={{ textDecoration: 'none' }} />
          <Route path="/ArtworkList" element={<ArtworkList />} />
          <Route path="/artwork/:id" element={<ArtworkDetail />} />
        </Routes>
 
 
 
      </div>
    </BrowserRouter>
  );
};
 
export default App;
 
 
