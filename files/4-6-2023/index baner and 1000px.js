import ReactDOM from 'react-dom/client';
// component
import'./style.css'
import Comp1 from './Comp1.js'
import Comp2 from './Comp2.js'
import Comp3 from './Comp3.js'
import Comp4 from './Comp4.js'
import Comp5 from './Comp5.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div  className="container">
 
  <div className="banner">
<Comp1/>
</div>

<div className="navbar">
<Comp2/>
</div>  

<div className="content">

<div className="left1">
<Comp3/>
</div>

<div className="right1">
<Comp4/>
</div>

</div>

<div className="footer">
<Comp5/>
</div>


</div>
);
 
 
