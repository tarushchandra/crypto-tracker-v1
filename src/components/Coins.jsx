import React from "react";
import { Coin } from "./Coin";

export const Coins = ({ totalCoins, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="main-coin-container">
      {totalCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            img={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            volume={coin.total_volume}
            low={coin.low_24h}
            high={coin.high_24h}
            capRank={coin.market_cap_rank}
            priceChangePerDay={coin.price_change_24h}
            percentPriceChangePerDay={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};
