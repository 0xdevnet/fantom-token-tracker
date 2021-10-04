import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import ExplorerPage from "./pages/ExplorerPage";
import Header from "./components/Header";
import "./App.css";
import { WatchListContextProvider } from "./context/watchListContext";

const App = () => {
  return (
    <div className="wrapper">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={ExplorerPage} />
          <Route path="/summary" component={CoinSummaryPage} />
          <Route path="/coins/:id" component={CoinDetailPage} />
          <Route path="/explorer" component={ExplorerPage} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
