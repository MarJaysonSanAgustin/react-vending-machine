import { useState } from "react"

const coinsMap = {
  '10¢': 0.10,
  '20¢': 0.20,
  '50¢': 0.50,
  '$1': 1,
  '$2': 2,
};

const useEnterCoins = () => {
  const [enteredCoins, setEnteredCoins] = useState(0);

  return { coinsMap, enteredCoins, setEnteredCoins }
}

export default useEnterCoins;
