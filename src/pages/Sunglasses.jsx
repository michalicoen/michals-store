import React from 'react'
import Products from '../components/Products';

const Sunglasses = ({ items }) => {
  const pageData = {
    title: "SUNGLASSES",
    items,
  }
  return <Products pageData={pageData} />

}

export default Sunglasses;
