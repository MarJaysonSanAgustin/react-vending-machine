import React, { useEffect } from 'react';
import useProductStacks from '../hooks/useProductStacks';
import ProductWindow from './ProductWindow';
import CoinEntry from './CoinEntry';

function VendingMachine ({ initialProducts }) {
  const { productStacks, setProductStacks } = useProductStacks();

  useEffect(() => {
    setProductStacks(initialProducts);
  }, []);
  
  return (
    <div className='vending-machine-container'>
      <p className='title'>Vegan Chocolate Bars</p>
      <div className='vending-machine'>
        <ProductWindow productStacks={productStacks} />
        <CoinEntry />
      </div>
    </div>
  )
}

export default VendingMachine;
