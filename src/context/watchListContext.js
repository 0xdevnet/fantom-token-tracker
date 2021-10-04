import React, { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  console.log();
  const [watchList, setWatchList] = useState(
    localStorage.getItem("watchList")?.split(",") || [
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
    ]
  );

  useEffect(() => {
    localStorage.setItem("watchList", watchList);
  }, [watchList]);

  const deleteCoin = (coin) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== coin;
      })
    );
  };

  const addCoin = (coin) => {
    if (watchList.indexOf(coin) === -1) {
      setWatchList([...watchList, coin]);
    }
  };

  return (
    <WatchListContext.Provider value={{ watchList, deleteCoin, addCoin }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
