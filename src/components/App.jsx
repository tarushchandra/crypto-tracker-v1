import axios from "axios";
import React, { useEffect, useState } from "react";
import { Coins } from "./Coins";
import { CoinInfo } from "./CoinInfo";
import { Pagination } from "./Pagination";
import { Search } from "./Search";

export function App() {
  const [coins, setCoins] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      });
    setLoading(false);
  }, []);

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchText.toLowerCase());
  });

  // Get Current Coins
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  return (
    <div className="coin-app">
      <Search setSearchText={setSearchText} />
      <div className="biggest-coin-container">
        <table>
          <tr>
            <th>
              <CoinInfo />
            </th>
          </tr>
          <tr>
            <td>
              <Coins
                totalCoins={currentCoins}
                loading={loading}
                filteredCoinsLength={filteredCoins.length}
                indexOfLastCoin={indexOfLastCoin}
                currentPage={currentPage}
                coinsPerPage={coinsPerPage}
              />
            </td>
          </tr>
        </table>
      </div>
      <Pagination
        totalCoins={coins.length}
        coinsPerPage={coinsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
