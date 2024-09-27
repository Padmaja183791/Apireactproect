import React from "react";
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import pic1 from'./images/download.jpg'
import pic2 from'./images/pexels-7875953.jpg'
import pic3 from'./images/pg.png.jpg'
import pic4 from'./images/ap.png'
import pic5 from'./images/ass.png'
import pic6 from'./images/aaa.avif'
 
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <nav class="navbar navbar-expand-md bg-warning">
         <a class="navbar-brand" href="#"><img src={pic1} alt="./"/></a>

               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>h
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="#">Home</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link" href="#">Link</a>
                   </li>
                   <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Dropdown
                     </a>
                     <ul class="dropdown-menu">
                       <li><a class="dropdown-item" href="about html">HTML</a></li>
                       <li><a class="dropdown-item" href="about css">CSS</a></li>
                       <li><hr class="dropdown-divider"/></li>
                       <li><a class="dropdown-item" href="about java script">Bootstrap</a></li>
                       <li><a class="dropdown-item" href="about java script">React</a></li>
                     </ul>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                   </li>
                 </ul>
                 <div class ="container-fluid">
                 <div class="row">
                 <form class="d-flex" role="search">
                   <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                   <button class="btn btn-outline-success" type="submit">Search</button>
                 </form>
               </div>
             </div>
</div>
           </nav>
  
  
           <div class="container-fluid">
             <div class="row bg-dark">
             <div class="col-md-12 " >
           <div id="carouselExample" class="carousel slide">
             <div class="carousel-inner">
               <div class="carousel-item active">
               <img src={pic2} alt='./' class="d-block w-100" />

               </div>
               <div class="carousel-item">
               <img src={pic3} alt='./' class="d-block w-100" />

               </div>
               <div class="carousel-item">
               <img src={pic3} alt='./' class="d-block w-100" />


               </div>
             </div>
             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Previous</span>
             </button>
             <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Next</span>
             </button>
           </div>
           </div>
           </div>
      
            
            
             <div class="row p-4 bg-primary">
                 <div class="col-md-4 " >
                     <div class="card p-4">
                     <img src={pic4} alt='./' class="d-block w-100" />

                         <div class="card-body bg-warning">
                           <h5 class="card-title">General English</h5>
                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <a href="#" class="btn btn-dark">more</a>
                         </div>
                     </div></div>
                         <div class="col-md-4">
                             <div class="card p-4">
                             <img src={pic5} alt='./' class="d-block w-100" />

                                 <div class="card-body bg-warning">
                                   <h5 class="card-title">Classic English</h5>
                                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" class="btn btn-dark">more</a>
                                 </div></div>
                                 </div>
                                 <div class="col-md-4">
                                     <div class="card p-4">
                                     <img src={pic6} alt='./' class="d-block w-100" />

                                         <div class="card-body bg-warning">
                                           <h5 class="card-title">Bussiness English</h5>
                                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                           <a href="#" class="btn btn-dark">more</a>
                                         </div></div>
                                         </div>
                       </div>
                 </div>
        
     
     <div class="row bg-danger">
       <div class="col-md-12">
      
       <div class="card-body">
         <h5 class="card-title p-4">Mouritech</h5>
         <p class="card-text p-4 text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iure, deserunt perferendis dolorem excepturi officiis fugiat facilis, at beatae aut maxime tempora totam ipsam cum cupiditate hic nam quidem voluptate..</p>
       </div>
       </div>
     </div>
  
       
    
    
  </>
 
 
)

