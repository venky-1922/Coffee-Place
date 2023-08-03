import React from 'react';
import ItemCard from '../itemCard';
import Img1 from '../../Images/coffeeItem.svg';
import './index.css';
// import { useState } from 'react';

const Order=(props)=>{
    const cartItems= (x,y)=>{
        // setText("Added");
        props.cartItems(x,y);
    }
    // const[text1,setText]=useState('Add Item');
    const Items=[
        {image:`${Img1}`, text:"We blend mocha sauce and Frappuccino® chips with Frappuccino", price:100, name:"A"},
        {image:`${Img1}`, text:"We blend mocha sauce and Frappuccino® chips with Frappuccino", price:200, name:"B"},
        {image:`${Img1}`, text:"We blend mocha sauce and Frappuccino® chips with Frappuccino", price:300, name:"C"},
        {image:`${Img1}`, text:"We blend mocha sauce and Frappuccino® chips with Frappuccino", price:400, name:"D"},
        {image:`${Img1}`, text:"We blend mocha sauce and Frappuccino® chips with Frappuccino", price:500, name:"E"},
        {image:`${Img1}`, text:"We blend mocha sauce and Frappuccino® chips with Frappuccino", price:600, name:"F"},
        {image:`${Img1}`, text:"We blend mocha sauce and Frappuccino® chips with Frappuccino", price:700, name:"G"}

    ]
    const listItems=Items.map(item=>
        <ItemCard image={item.image} text={item.text} price={item.price} name={item.name}  cart={()=>cartItems(item.name,item.price)}/>
    )
    return(
        <div className='order'>
            {listItems}
        </div>
    )
}
export default Order;