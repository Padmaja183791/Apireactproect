import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Data from './info.json';
const w={
    width:"auto",
    height:"400px"
}
 
 
export default function App() {
  return (
    <>
    <div className="container ">
      <div className="row">
   
        {Data.map((x) => <>
          <div className="col-md-4 ">
            <div className="card " >
              <img src={x.pic} className="card-img-center " alt="" style={w}  />
              <div className="card-body">
                <h5 className="card-title text-center">{x.place}</h5>
           
               
              </div>
            </div>
          </div>
       
        </>
    )}
      </div>
      </div>
      </>
  );
}
 