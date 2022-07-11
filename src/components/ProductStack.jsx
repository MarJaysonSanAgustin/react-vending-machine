import React, { useEffect } from "react";
import Product from "./Product";
import emptyImage from '../assets/images/empty.png';
import useEnterCoins from "../hooks/useEnterCoins";

function ProductStack ({ products }) {
  const { enteredCoins } = useEnterCoins();

  useEffect(() => console.log(enteredCoins), [enteredCoins]) // handle coin entry rejection

  const Products = products.map((product, idx) => <Product key={idx} product={product} />);

  const isAllowedToSelect = Products.length > 0
    ? enteredCoins.toFixed(2) === products[0].price.toFixed(2)
    : false;

  const handleSelect = () => {
    console.log(enteredCoins.toFixed(2));
    console.log(products[0].price.toFixed(2));
    console.log('isAllowed:', isAllowedToSelect)
  }

  return (
    <div className="product-stack-container">
      <p className="quantity">
        { Products.length ? `Quantity: ${products.length}` : 'Empty' }
      </p>
      <div className="products">
        {
          Products.length ? Products
          : <img src={emptyImage} alt="empty" className="product-image" />
        }
      </div>
      <div className="select-container-disabled" onClick={handleSelect}>
        <span>SELECT</span>
      </div>
      
    </div>
  );
}

export default ProductStack;
