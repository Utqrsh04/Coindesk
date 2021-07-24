import { FC, memo } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


interface Props {
  key: number;
  name: string;
  price: string;
  symbol: string;
  marketcap: string;
  volume: string;
  image: string;
  priceChange: number;
}

const Card: FC<Props> = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className=" text-center drop-shadow-2xl shadow-xl mx-4 my-4 rounded-b-3xl border-b border-l border-r box-border border-black bg-white bg-opacity-0 ">
      <div className=" px-8 pb-2 text-sm">
        <div className="  mx-auto ">
          <img className="w-10 h-10 mx-auto  hover:rotate-12 transform " src={image} alt={name} />
        </div>
        <div className="justify-center items-center space-x-2 flex text-lg">
          <h1 className=" text-gray-200 text-xl font-bold ">{name}</h1>
          <p className=" text-gray-300 text-xs ">{symbol.toUpperCase()}</p>
        </div>
        <p className="text-gray-200 ">${price.toLocaleString()}</p>
        <p className="text-gray-200">
          Market Cap : ${marketcap.toLocaleString()}
        </p>
        <p className="text-gray-200">
          Volume (24H) : ${volume.toLocaleString()}
        </p>
      </div>
      {priceChange > 0 ? (
        <div
          className=" flex items-center rounded-b-2xl 
        justify-center w-full text-black h-10"
          style={{ backgroundColor: "#39FF14" }}
        >
          <IoIosArrowUp className=" text-lg mr-2  " />
          <p>{priceChange.toFixed(3)}%</p>
        </div>
      ) : (
        <div
          className=" h-10 flex items-center rounded-b-2xl 
        justify-center w-full text-white "
          style={{ backgroundColor: "#FF0800" }}
        >
          <IoIosArrowDown className=" text-lg mr-2  " />
          <p>{priceChange.toFixed(3)}%</p>
        </div>
      )}
    </div>
  );
};

Card.defaultProps = {};

export default memo(Card);
