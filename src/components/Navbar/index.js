import React from 'react';
import logo from '../../Images/1389344_95-removebg-preview.png';
import '../../styles/App.css';
import "@fontsource/montserrat";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link } from 'react-router-dom';
// import Menu from '../Menu';

const Navbar =(props)=>{
    return(
        <div style={{display:'flex' , justifyContent:'space-between' , paddingTop:'10px',backgroundColor:'white'}}>
           <div>
            <img src={logo} alt='logo' style={{height:'60px',marginLeft:'25px'}}></img>
           </div>
           <div className='Nav'>
            <ul style={{ listStyle:'none' ,display:'flex'}}>
                <li >
                    <Link className='nav-items' to="/">Home</Link>
                </li>
                <li >
                    <Link className='nav-items' to='/order'>Order</Link>
                </li>
                <li >
                    <button  className='nav-items'><PermIdentityOutlinedIcon /></button>
                </li>
                <li >
                    <Link className='nav-items' onClick={props.cartItems} to='/cart'><ShoppingCartTwoToneIcon/></Link>
                </li>
            </ul>
            <div>
            </div>
           </div>
        </div>
    )
}

 export default Navbar;