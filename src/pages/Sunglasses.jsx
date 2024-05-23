import React from 'react'
// import './Sunglasses.css';
// import sunglasses_w1 from '../assets/women1.jpg';
// import sunglasses_w2 from '../assets/women2.jpg';
// import sunglasses_w3 from '../assets/women3.jpg';
// import sunglasses_w4 from '../assets/women4.jpg';
// import sunglasses_w5 from '../assets/women5.jpg';
// import sunglasses_w6 from '../assets/women6.jpg';
import Products from '../components/Products';

// const pageData = {
//   title: "SUNGLASSES",
//   items: [
//     {
//       id: "1",
//       name: "Ray Ban",
//       price: "300",
//       imageUrl: sunglasses_w1,
//     },
//     {
//       id: "2",
//       name: "Ray Ban",
//       price: "300",
//       imageUrl:sunglasses_w2,
//     },
//     {
//       id: "3",
//       name: "Ray Ban",
//       price: "300",
//       imageUrl: sunglasses_w3,
//     },
//     {
//       id: "4",
//       name: "Ray Ban",
//       price: "300",
//       imageUrl: sunglasses_w4,
//     },
//     {
//       id: "5",
//       name: "Ray Ban",
//       price: "300",
//       imageUrl: sunglasses_w5,
//     },
//     {
//       id: "6",
//       name: "Ray Ban",
//       price: "300",
//       imageUrl: sunglasses_w6,
//     },
//   ]
// };

const Sunglasses = ({items}) => {
  const pageData={
    title:"SUNGLASSES",
    items,
  }
  return <Products pageData={pageData} />
  
}

export default Sunglasses;
