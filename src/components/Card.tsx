import { FC, memo } from "react";

interface Props {}

const Card: FC<Props> = (props) => {
  return (
    <div className=" text-center mx-5 my-2 p-4 rounded-b-3xl border-b border-l border-r border-black ">
      <div className=" w-10 h-10 mx-auto ">
        <img
          src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          alt=""
        />
      </div>
      <div className="font-medium text-lg">
        <h1 className=" text-gray-200 ">Bitcoin</h1>
        <p className=" text-green-500 ">BTC</p>
      </div>
      <p className="text-gray-200">$60K</p>
      <p className="text-gray-200">Market Cap : $142,131,123,123</p>
      <p className="text-gray-200">Volume (24H): $142,131,123,123</p>
    </div>
  );
};

Card.defaultProps = {};

export default memo(Card);
