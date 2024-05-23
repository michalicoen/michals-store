import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


const handleDelete = () => {
  
};
const Cart = ({items, cartItemsCount}) => {
  console.log(items, cartItemsCount)
  const totalPrice = items.reduce((acc, item) => {
    return acc += (item.price * cartItemsCount[item.id]);
  }, 0);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id } });
  };

  const handleDecrement = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  if (!items.length) {
    return <h1>Your Cart Is Empty!</h1>
  }

	return (
		<div className="shopping-cart">
			<h1>MY CART </h1>
			<hr  className='hr'/>
			<div className='sartProduct'>

				{items.map(item => {
					return (
            
              
						<div className="product1" key={item.id}>
                <div>
            <IconButton aria-label="delete" onClick={handleDelete}style={{ color: 'black',top:"50px" }}>
            <DeleteIcon />
            </IconButton>
              </div>
							 <img src={item.imageUrl}/>
							<div className="product">
								<p>{item.name}</p>
								<p>${item.price}</p>
								<div className="cart-total">
                  <Button  onClick={() => handleDecrement(item.id)}style={{ color: 'black' }}>-</Button>
                  <span>{cartItemsCount[item.id]}</span>
                  <Button  onClick={() => handleIncrement(item.id)}style={{ color: 'black' }}>+</Button>
                    
                </div>
								
							</div>
							
						</div>
        
					);
				})}
			</div>
      <hr/>
      <p>Total: {totalPrice.toLocaleString()}$</p>
      <Button 	variant="outlined"
									style={{ color: 'black' }}>
        <Link to="/checkout">Checkout</Link>
      </Button>
		</div>
	);
};

export default Cart;
