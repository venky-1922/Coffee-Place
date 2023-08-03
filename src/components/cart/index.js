import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';
import './index.css';

const Servings = (props) => {
  const { className, decreasePrice, increasePrice } = props;
  const [servings, setServings] = useState(1);

  const decreaseServings = () => {
    setServings((prevServings) => {
      const newServings = prevServings > 0 ? prevServings - 1 : prevServings;
      decreasePrice(className,newServings);
      return newServings;
    });
  };

  const increaseServings = () => {
    setServings((prevServings) => {
      const newServings = prevServings + 1;
      increasePrice(className, newServings);
      return newServings;
    });
  };

  return (
    <div className={`servings ${className}`}>
      <button className='buttons' onClick={decreaseServings}>-</button>
      <p>{servings}</p>
      <button className='buttons' onClick={increaseServings}>+</button>
    </div>
  );
};

const Cart = (props) => {
  const { items } = props;
  const [items1, setItems] = useState(items);

 

  const changePrice = (x, newServings) => {
    const find = items.find((obj) => obj.SNO === x);
    if (find) {
      const newPrice = newServings * find.price;
      const updatedArray = items1.map((item) => {
        if (item.SNO === x) {
          return { ...item, price: newPrice };
        }
        return item;
      });

      setItems(updatedArray);
    }
  };

  const calculateTotal = () => {
    return items1.reduce((total, item) => total + parseInt(item.price), 0);
  };

  const total = calculateTotal();

  return (
    <div className='cart'>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Number of servings</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items1.map((item) => (
              <TableRow key={item.SNO}>
                <TableCell>{item.SNO}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Servings decreasePrice={changePrice} increasePrice={changePrice} className={item.SNO} items1={items1} />
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell />
              <TableCell sx={{ fontWeight: 'bold', fontSize: '15px' }}>Total:</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '15px' }}>{total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Cart;
