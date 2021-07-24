import axios from "axios";
import { FC, memo, useEffect, useState } from "react";
import { BiStats } from "react-icons/bi";
import Card from "./Card";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C"
      )
      .then((res) => {
        setCoins(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e:any) => {
    setSearch(e.target.value);
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen ">
      <header className=" bg-yellow-300 flex justify-between px-2 sm:px-7 py-4">
        <div className=" flex mx-2 sm:mx-14 space-x-3 items-center">
          <BiStats className=" animate-pulse w-8 h-8 " />
          <h1 className=" text-2xl font-semibold">Cryptodesk</h1>
        </div>
        <div className="w-auto flex rounded-lg items-center sm:mx-10 ">
          <input
            
            onChange={handleChange}
            placeholder="Search Coin"
            className=" rounded-lg w-32  h-8 p-5 "
          />
        </div>
      </header>
      <div className=" flex min-w-full justify-center items-center flex-wrap mt-7 ">
        {filterCoins.map((coin) => {
          return (
            <Card
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
      <footer className=" bg-gray-500 flex items-center justify-center h-10 ">
     <a href="https://github.com/Utqrsh04/CryptoDesk" target="_blank" rel="noreferrer" className=" font-bold text-black hover:text-gray-900">Github Repo</a>
      </footer>

    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
