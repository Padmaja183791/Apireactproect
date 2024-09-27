import React from 'react';
function Comp2() {
  return <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 comp' >
 
          <h1><b>LEARN COMPLETE
            <br /><span>  WEB DEVELOPMENT  </span><br/>
            COURSE</b><br />
          </h1>
          <p className='text-light '><b>This course breaks down HTML forms into easy to understand pieces.Over the next for modules,you will learn how an HTML form works and how to use them effectively in your projects.</b>
          </p>
          <button >Know more</button>
        </div>
 
        <div className='col-md-4 comp2' >
          <div className="right">
          <p className='login'> Login now</p>
          <input type="text" placeholder="Enter email or User name"  /><br />
          <input type="password" placeholder="Password" /><br />
          <button>Login</button>
          <div>
            <p className='text'>Don't have an Account?<br />
              <a href="">Create an account </a></p>
 
 
          </div>
          </div>
        </div>
      </div>
    </div>
 
  </>
}
export default Comp2