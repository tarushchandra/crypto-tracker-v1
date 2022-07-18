import React from "react";
import { formatCurrency } from "./formatCurrency";
import { formatNumber } from "./formatNumber";

export function Coin({
  img,
  name,
  symbol,
  price,
  volume,
  low,
  high,
  capRank,
  priceChangePerDay,
  percentPriceChangePerDay,
}) {
  return (
    <div className="coin-container">
      <div className="coin">
        <div className="coin-img item">
          <img src={img} alt="coin-img" />
        </div>
        <div className="coin-name item">
          <h1>{name}</h1>
        </div>
        <div className="coin-symbol item">
          <p>{symbol}</p>
        </div>
        <div className="coin-price item">
          <p>{formatCurrency(price)}</p>
        </div>
        <div className="coin-volume item">
          <p>{formatNumber(volume)}</p>
        </div>
        <div className="coin-low item">
          <p>{formatCurrency(low)}</p>
        </div>
        <div className="coin-high item">
          <p>{formatCurrency(high)}</p>
        </div>
        <div className="coin-cap item">
          <p>{formatNumber(capRank)}</p>
        </div>
        <div className="coin-price-change item">
          <p>{formatCurrency(priceChangePerDay)}</p>
        </div>
        <div className="coin-price-change-percent item">
          <p>
            {percentPriceChangePerDay < 0 ? (
              <p className="coin-red">
                {formatNumber(percentPriceChangePerDay.toFixed(2))}%
              </p>
            ) : (
              <p className="coin-green">
                {formatNumber(percentPriceChangePerDay.toFixed(2))}%
              </p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
