import { FC , memo } from 'react';
import {IoLogoStencil} from 'react-icons/io5'

interface Props{};

const Header : FC<Props> = (props) => {
  return (
    <header className=" bg-yellow-300 flex justify-between px-2 sm:px-7 py-4">
      <div className=" flex mx-2 sm:mx-14 space-x-3 items-center">
      <IoLogoStencil className=" animate-spin w-7 h-7 "/>
      <h1 className=" text-2xl font-semibold">CryptoDesk</h1>
      </div>
      <div className="w-auto">
          <input type="text" name="search" 
          placeholder="Coin" className=" rounded-full w-32 text-black h-8 p-5 " />
      </div>
    </header>
  );
}

Header.defaultProps = {} ;

export default memo(Header);