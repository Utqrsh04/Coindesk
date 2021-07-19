import axios from "axios";
import { FC, memo, useEffect, useState } from "react";
import Card from "./Card";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [coin, setCoin] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C"
      )
      .then((res) => {
        setCoin(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="  flex min-w-full justify-center items-center flex-wrap mt-7 ">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
