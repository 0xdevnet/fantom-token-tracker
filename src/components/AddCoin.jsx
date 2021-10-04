import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/watchListContext";
import { Link } from "react-router-dom";

const AddCoin = () => {
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(WatchListContext);
  const availableCoins = [
    // "bitcoin",
    // "ethereum",
    // "ripple",
    // "tether",
    // "bitcoin-cash",
    // "litecoin",
    // "eos",
    // "okb",
    // "tezos",
    // "cardano",
    "fantom",
    "fantom-oasis",
    "spookyswap",
    "spiritswap",
    "anyswap",
    "aave",
    "tomb",
    // "chainlink",
    "sushi",
    "yearn-finance",
    "wrapped-fantom",
  ];

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-primary dropdown-toggle"
        type="button"
      >
        Add Coin
      </button>
      <Link to={'/explorer'}  className="btn btn-primary ml-2">Explorer</Link>
      <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
        {availableCoins.map((el) => {
          return (
            <a
              onClick={() => handleClick(el)}
              href="#"
              className="dropdown-item"
            >
              {el}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AddCoin;
