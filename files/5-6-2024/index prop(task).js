import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'
const p1="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg"
const p2="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg"
const p3="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <App pic1={p1} price="RS:2000"/></div>
        <div className="col-md-4">
        <App pic1={p2} price="RS:4000"/></div>
        <div className="col-md-4">
        <App pic1={p3} price="RS:4000"/></div>

      </div>
    </div>

  
  </>
);
 
 
