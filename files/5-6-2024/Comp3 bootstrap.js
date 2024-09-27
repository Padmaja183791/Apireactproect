import React from "react"
import pic4 from'./images/np1.png'
import pic5 from'./images/aaa.avif'
export default function Comp3(){
    return(
        <>


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
                
      </div>





</>


)
}
