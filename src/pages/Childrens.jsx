import React from 'react';
// import kids7 from '../assets/kids7.jpg';
// import kids8 from '../assets/kids8.jpg';
// import kids3 from '../assets/kids3.jpg';
// import kids4 from '../assets/kids4.jpg';
// import kids5 from '../assets/kids5.jpg';
// import kids6 from '../assets/kids6.jpg';
import Products from '../components/Products';

// const pageDataOld = {
// 	items: [
// 		{
// 			id: '119',
// 			name: 'Ray Ban',
// 			price: '299',
// 			imageUrl: kids7,
// 		},
// 		{
// 			id: '118',
// 			name: 'Ray Ban',
// 			price: '299',
// 			imageUrl: kids8,
// 		},
// 		{
// 			id: '110',
// 			name: 'Ray Ban',
// 			price: '299',
// 			imageUrl: kids3,
// 		},
// 		{
// 			id: '115',
// 			name: 'Ray Ban',
// 			price: '299',
// 			imageUrl: kids4,
// 		},
// 		{
// 			id: '117',
// 			name: 'Ray Ban',
// 			price: '299',
// 			imageUrl: kids5,
// 		},
// 		{
// 			id: '112',
// 			name: 'Ray Ban',
// 			price: '199',
// 			imageUrl: kids6,
// 		},
// 	],
// };

const Children = ({items}) => {
  const pageData = {
    title:"CHILDRENS'S EYEGLASSES",
    items,
  }
	return <Products pageData={pageData} />;
};

export default Children;
