import React from 'react';
import './Products.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Products = ({ pageData }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { title, items } = pageData;

	return (
		<div>
			<h1 className="products-title">{title}</h1>
			<section>
				{items.map((item) => {
					return (
						<div
							key={item.id}
							className="products-item"
						>
							<img src={item.imageUrl} />
							<p>{item.name}</p>
							<div>${item.price}</div>

							<Stack
								direction="row"
								spacing={2}
								sx={{ justifyContent: 'center' }}
							>
								<Button
									style={{ color: 'black' }}
									onClick={() => {
										navigate(`/product/${item.id}`);
									}}
								>
									Details
								</Button>
								<Button
									variant="contained"
									style={{ color: 'black' }}
									// variant="contained"
									onClick={() => {
										dispatch({
											type: 'ADD_TO_CART',
											payload: {
												id: item.id,
											},
										});
									}}
								>
									Add To Cart
								</Button>
							</Stack>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default Products;
