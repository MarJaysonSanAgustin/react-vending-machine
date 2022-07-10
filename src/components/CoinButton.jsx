import React from "react";

function CoinButton ({ coinKey, coinButtonClick }) {
  const handleCoinButtonClick = () => {
    coinButtonClick(coinKey)
  }
  return (
    <div className="coin-button" onClick={handleCoinButtonClick} >{coinKey}</div>
  )
}

export default CoinButton;
