import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';


const Product = ({ getItemById }) => {
	const dispatch = useDispatch();


	const { id } = useParams();

	const item = getItemById(id);

	if (!item) {
		return <div>Product not found!</div>;
	}

	return (
		<div className="Product">
			<div className="img">
				<img src={item.imageUrl} alt={item.name} />
				<div className="details">
					<h1 className="product-name">{item.name}</h1>
					<p>${item.price}</p>
					<p>{item.description}</p>


					<Button
						variant="contained" style={{ color: 'white', backgroundColor: 'black' }}
						onClick={() => {
							dispatch({
								type: 'ADD_TO_CART',
								payload: {
									id,
								},
							});
						}}
					>
						Add To Cart
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Product;
