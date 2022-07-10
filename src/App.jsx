import './App.css';
import VendingMachine from './components/VendingMachine';

export const productsMap = {
  'organic_raw': {
    name: 'organic_raw',
    price: 2.00
  },
  'caramel': {
    name: 'caramel',
    price: 2.50
  },
  'hazelnut': {
    name: 'hazelnut',
    price: 3.10
  },
};

function App() {
  // products
  const initialProducts = [
    // row 1
    [productsMap.organic_raw, productsMap.organic_raw, productsMap.organic_raw, productsMap.organic_raw],
    [productsMap.caramel, productsMap.caramel, productsMap.caramel],
    [productsMap.hazelnut, productsMap.hazelnut, productsMap.hazelnut, productsMap.hazelnut, productsMap.hazelnut, productsMap.hazelnut],

    // row 2
    [productsMap.caramel, productsMap.caramel, productsMap.caramel],
    [productsMap.hazelnut, productsMap.hazelnut, productsMap.hazelnut, productsMap.hazelnut],
    [productsMap.organic_raw, productsMap.organic_raw],

    // row 3
    [productsMap.hazelnut, productsMap.hazelnut, productsMap.hazelnut, productsMap.hazelnut],
    [productsMap.caramel, productsMap.caramel, productsMap.caramel],
    [productsMap.organic_raw, productsMap.organic_raw, productsMap.organic_raw],
  ];

  return (
    <div className="App">
      <div className="App-container">
        <VendingMachine initialProducts={initialProducts} />
      </div>
    </div>
  )
}

export default App
