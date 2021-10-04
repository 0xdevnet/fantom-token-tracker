import React from "react";
import ExplorerItem from "./ExplorerItem";
import { WatchListContext } from "../context/watchListContext";

const ExplorerPage = () => {
  const { watchList } = React.useContext(WatchListContext);
  console.log("watchList?", watchList)
  return (
    <div className="explorer">
      {
        watchList.map(x => <ExplorerItem name={x}/>)
      }
    </div>
  );
};

export default ExplorerPage;
