// import logo from './logo.svg';
import '../src/styles/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Order from './components/Order';
import Cart from './components/cart';

// import Menu from './components/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';


function App() {
  

  // let [totalItemsCost,setItemsCost]=useState(0);
  let [items,setItems]=useState([]);
  let [n,setN]=useState(1);
  const cartItems=(x,y)=>{
    if(x&&y)
    {
      const found=items.find(obj=>{
        return obj.name===x;
      })
      if(!found){
        // setItemsCost(x=>x+parseInt(y));
        // console.log(totalItemsCost);
        setItems(x1=>[...x1,{SNO:`${n}`, name:`${x}`, price:`${y}`}]);
        setN(n+1);
        // console.log(items);
        // console.log(n);
      }
    }
  }

  return (
    <Router basename='/Coffee-Place'>
       <div className="App">
        <Navbar cartItems={cartItems}/>
       <Routes>
          <Route exact path="/order" element={ <Order cartItems={cartItems}  />}>
          </Route>
           <Route exact path="/cart" element={<Cart items={items} />}
           ></Route>
          <Route exact path="/Coffee-Place" element={<Home/> }> 
           </Route>
          </Routes>
          </div>
    </Router>
  );
}

export default App;
