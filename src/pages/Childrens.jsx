import React from 'react';
import Products from '../components/Products';

const Children = ({ items }) => {
  const pageData = {
    title: "CHILDRENS'S EYEGLASSES",
    items,
  }
  return <Products pageData={pageData} />;
};

export default Children;
