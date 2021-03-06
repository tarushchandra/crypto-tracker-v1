import React from "react";

export const Pagination = ({ totalCoins, coinsPerPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="page-number-container">
      {pageNumbers.map((number) => (
        <li key={number} className="page-number-item">
          <a
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(number);
            }}
            href="!#"
          >
            {number}
          </a>
        </li>
      ))}
    </div>
  );
};
