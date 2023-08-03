import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/coffee.svg";
// import {Button} from "@mui/material";
import shopNow from "../../Images/share.png";
const Home = () => {
  return (
    <div style={{display:'flex' , justifyContent:'space-between'}}>
      <div>
        <img src={logo} alt="" style={{marginLeft:'70px',marginTop:'70px', width:'500px' ,height:'550px'}}></img>
      </div>
      <div className="content">
        <h1 className="heading">Starbucks Veranda Blenda</h1>
        <p style={{color:'#4d2f28'}}>
          Welcome to a world of rich aromas, bold flavors, and unparalleled
          craftsmanship - a world where coffee takes center stage and every cup
          tells a unique story. At Starbucks, we're not just passionate about
          coffee; we're devoted to creating extraordinary moments that elevate
          your everyday experiences. For over four decades, our journey has been
          one of discovery, innovation, and dedication to the art of coffee.
        </p>
        <p>
        From sourcing the finest beans from remote corners of the globe to
          expertly roasting them to perfection, we take pride in every step of
          the process. Each sip is a testament to our unwavering commitment to
          quality, sustainability, and the people who make it all possible.
        </p>
      <div>
        
       <Link to="/order"> <button className="purchase" >Order Now<img src={shopNow} alt="" style={{ marginLeft:'5px', height:'20px', width:'20px'}}></img></button></Link>
      </div>
      </div>
    </div>
  );
};

export default Home;
