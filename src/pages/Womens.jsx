import React from 'react';
import Products from '../components/Products';

const Womens = ({ items }) => {
	const pageData = {
		title: 'WOMEN’S EYEGLASSES',
		items,
	};
	return <Products pageData={pageData} />;
};

export default Womens;
