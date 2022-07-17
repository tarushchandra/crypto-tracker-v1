import React from "react";

export const Search = ({ setSearchText }) => {
  return (
    <div className="coin-search">
      <h3 className="coin-text">Search your Coin</h3>
      <div>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search..."
          className="coin-input"
        />
      </div>
    </div>
  );
};
