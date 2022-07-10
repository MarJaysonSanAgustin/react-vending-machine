import React from "react";
import ProductStack from './ProductStack';

function ProductWindow ({ productStacks }) {
  const ProducStacks = productStacks.map((productStack, idx) => (<div key={idx} className="col">
    <ProductStack products={productStack}/>
  </div>));

  return (
    <div className="grid">
      {ProducStacks}
    </div>
  );
}

export default ProductWindow;
