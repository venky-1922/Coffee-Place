import React,{useState} from 'react'
import './index.css'
const ItemCard =(props)=>{
    const [text1,setText]=useState('Add Item');
    const cart=()=>{
        setText("added");
        props.cart();

        document.querySelector(`.${props.name}`).disabled=true;
        document.querySelector(`.${props.name}`).style.color="white";
        document.querySelector(`.${props.name}`).style.backgroundColor="grey";
    }
    return(
        <div className="item">
            <div  className="first-part" >
                <img src={props.image} alt="" style={{width:'96px', height:'96px',marginTop:'10px', marginRight:'15px'}}></img>
                <p style={{height:'100px', width:'200px',marginTop:'10px'}}><h3 style={{fontWeight:'bold',}}>{props.name}</h3>{props.text}</p>
            </div>
            <div className='second-part'>
                <p style={{position:'absolute',marginRight:'250px', marginTop:'5px'}}>₹{props.price}</p>
                <button className={`add ${props.name}`} style={{borderRadius:'34px',marginLeft:'100px', backgroundColor:'#455a64', color:'white'}} onClick={cart}>{text1}</button>
            </div>
        </div>
    )
}
export default ItemCard;