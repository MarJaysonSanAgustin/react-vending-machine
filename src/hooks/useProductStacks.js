import { useState } from 'react';

const useProductStacks = () => {
  const [productStacks, setProductStacks] = useState([]);

  return { productStacks, setProductStacks }
}

export default useProductStacks;
