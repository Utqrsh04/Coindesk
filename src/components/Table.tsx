import React, { FC } from "react";
import { useHistory } from "react-router";
import "./Table.css";
interface Props {
  coins: any;
}

const Table: FC<Props> = ({ coins }) => {
  const history = useHistory();
  return (
    <div className="container">
      <h2 className="heading">Coins </h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1 font-extrabold">Rank</div>
          <div className="col col-2 font-extrabold ">Symbol</div>
          <div className="col col-3 font-extrabold ">Name</div>
          <div className="col col-4 font-extrabold">Price($)</div>
          <div className="col col-5 font-extrabold">Price Change(%)</div>
          <div className="col col-6 font-extrabold">Market Cap</div>
          <div className="col col-7 font-extrabold">Volume</div>
        </li>

        {coins.length === 0 && <p className="text-center">No Coin Found</p>}
        {coins.map((coin: any, index: number) => (
          <li
            className="table-row "
            key={index}
            onClick={() => history.push(`/${coin.id}`)}
          >
            <div className="col col-1" data-label="Rank">
              {coin.market_cap_rank}
            </div>
            <div className="col col-2" data-label="Symbol">
              {coin.symbol}
            </div>
            <div
              className="col col-3  flex items-center justify-centers"
              data-label="Name"
            >
              <img src={coin.image} alt={coin.name} className="w-5 h-5 mr-2" />
              {coin.name}
            </div>
            <div className="col col-4" data-label="Price">
              {coin.current_price.toLocaleString()}
            </div>
            <div className="col col-5" data-label="Change">
              {coin.price_change_percentage_1h_in_currency.toFixed(3) > 0 ? (
                <div className=" flex items-center justify-center font-medium">
                  <p style={{ color: "#21c303" }}>
                    {coin.price_change_percentage_1h_in_currency.toFixed(3)}%
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-center font-medium  ">
                  <p style={{ color: "#FF0800" }}>
                    {coin.price_change_percentage_1h_in_currency.toFixed(3)}%
                  </p>
                </div>
              )}
            </div>
            <div className="col col-6" data-label="Market Cap">
              {coin.market_cap.toLocaleString()}
            </div>
            <div className="col col-7" data-label="Volume">
              {coin.total_volume.toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;

// {
//   "id": "bitcoin",
//   "symbol": "btc",
//   "name": "Bitcoin",
//   "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
//   "current_price": 54522,
//   "market_cap": 1023612157179,
//   "market_cap_rank": 1,
//   "fully_diluted_valuation": 1141082952170,
//   "total_volume": 35400685161,
//   "high_24h": 56056,
//   "low_24h": 53807,
//   "price_change_24h": 339.33,
//   "price_change_percentage_24h": 0.62627,
//   "market_cap_change_24h": 7268488397,
//   "market_cap_change_percentage_24h": 0.71516,
//   "circulating_supply": 18838118,
//   "total_supply": 21000000,
//   "max_supply": 21000000,
//   "ath": 64805,
//   "ath_change_percentage": -15.86307,
//   "ath_date": "2021-04-14T11:54:46.763Z",
//   "atl": 67.81,
//   "atl_change_percentage": 80309.24078,
//   "atl_date": "2013-07-06T00:00:00.000Z",
//   "roi": null,
//   "last_updated": "2021-10-08T16:40:15.577Z",
//   "price_change_percentage_1h_in_currency": 0.610066420410642,
//   "price_change_percentage_24h_in_currency": 0.626273108557589
// }
