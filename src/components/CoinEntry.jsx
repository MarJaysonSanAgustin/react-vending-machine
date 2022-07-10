import React from "react";
import useEnterCoins from "../hooks/useEnterCoins";
import CoinButton from "./CoinButton";

function CoinEntry () {
  const { coinsMap, enteredCoins, setEnteredCoins } = useEnterCoins();

  const handleCoinButtonClick = (coinKey) => {
    const value = coinsMap[coinKey];
    setEnteredCoins((previousCoins) => {
      console.log(previousCoins)
      return previousCoins + value
    })
  }

  const CoinButtons = Object.keys(coinsMap).map((coinKey, idx) => (<CoinButton key={idx} coinKey={coinKey} coinButtonClick={handleCoinButtonClick} />))

  return (
    <div className="coin-display">
      <div className="total-coins-container">
        <p>${enteredCoins.toFixed(2)}</p>
      </div>
      <div className="coin-entry">
        {CoinButtons}
      </div>
    </div>
  );
}

export default CoinEntry;
