import React from 'react'
import pic3 from'./images/pg.png.jpg'
import pic4 from'./images/ap.png'

 
export default function Comp2(){
  return(
    <>
  
           
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
               <img src={pic4} alt='./' class="d-block w-100" />


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
      
            
            
            </>
            )
            }