import React from "react";
import caramelImage from '../assets/images/caramel.png';
import hazelnutImage from '../assets/images/hazelnut.png';
import organicRawImage from '../assets/images/organic_raw.png';

const productImageMap = {
  'caramel': caramelImage,
  'hazelnut': hazelnutImage,
  'organic_raw': organicRawImage,
}

function Product ({ product }) {
  return (
    <img src={productImageMap[product.name]} alt="caramel" className="product-image" />
  );
}

export default Product;
