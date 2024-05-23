import React from 'react';
import Products from '../components/Products';

const Men = ({ items }) => {
	const pageData = {
		title: 'MEN’S EYEGLASSES',
		items,
	};
	return <Products pageData={pageData} />;
};

export default Men;
