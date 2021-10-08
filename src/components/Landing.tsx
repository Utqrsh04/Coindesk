import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect, Route, Switch} from "react-router";
import Coin from "./Coin";
import "./Landing.css";
import SearchBar from "./SearchBar";
import Table from "./Table";

const Landing = () => {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C"
      )
      .then((res: any) => {
        setCoins(res.data);
      })
      .catch((error: any) => console.error(error));
  }, []);

  const filterCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  console.log("Data ", filterCoins);

  return (
    <>
      <header className="header">
        <a href="./" className="header__logo">
          CoinDesk
        </a>
        <ul className="header__nav">
          <SearchBar setSearch={setSearch} />
        </ul>
      </header>

      <section className="w-full min-h-screen px-10 table_container bg-black text-yellow-100 absolute pt-28 ">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Table coins={filterCoins} />
          </Route>
          <Route exact path="/:coinName">
            <Coin />
          </Route>
        </Switch>
      </section>
    </>
  );
};

export default Landing;
