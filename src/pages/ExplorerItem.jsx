import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HistoryChart from "../components/HistoryChart";
import CoinData from "../components/CoinData";
import coinGecko from "../apis/coinGecko";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function ExplorerItem(props) {
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, detail] = await Promise.all([
        coinGecko.get(`/coins/${props.name}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        coinGecko.get(`/coins/${props.name}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        coinGecko.get(`/coins/${props.name}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
        coinGecko.get("/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: props.name,
          },
        }),
      ]);
      console.log(day);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // const notify = () => toast("Wow so easy!");

  const renderData = () => {
    if (isLoading) {
      return <div></div>;
    }
    return (
      <div to={`/coins/${props.name}`} className="explorer-item">
        <HistoryChart data={coinData} />
        {/* <button onClick={notify}>Notify!</button>
        <ToastContainer /> */}
        <Link to={`/coins/${props.name}`}>
          <CoinData data={coinData.detail} />
        </Link>
      </div>
    );
  };

  return renderData();
}

export default ExplorerItem;
