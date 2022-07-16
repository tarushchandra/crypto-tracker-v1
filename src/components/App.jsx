import axios from "axios";
import React, { useEffect, useState } from "react";
import { Coin } from "./Coin";

export function App() {
  const [coins, setCoins] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      });
  }, []);

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchText.toLowerCase());
  });

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h3 className="coin-text">Search your Coin</h3>
        <div>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search..."
            className="coin-input"
          />
        </div>
      </div>
      <div className="biggest-coin-container">
        <div className="coin-info">
          <p className="info-crypto">Cryptocurrency</p>
          <p className="info-symbol">Symbol</p>
          <p className="info-LTP">LTP</p>
          <p className="info-vol">Volume</p>
          <p className="info-low">Low</p>
          <p className="info-high">High</p>
          <p className="info-rank">Rank</p>
          <p className="info-price-change">Price Change</p>
        </div>
        <div className="main-coin-container">
          {filteredCoins.map((coin) => {
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
      </div>
    </div>
  );
}
