import { FC , memo } from 'react';
import {IoLogoStencil} from 'react-icons/io5'

interface Props{};

const Header : FC<Props> = (props) => {
  return (
    <header className=" bg-yellow-300 flex justify-between px-7 
    w-screen py-4">
      <div className=" flex mx-14 space-x-3 items-center">
      <IoLogoStencil className=" animate-spin w-7 h-7 "/>
      <h1 className=" text-2xl font-semibold">CryptoDesk</h1>
      </div>
      <div className="py-2 mx-7 rounded-full  ">
          <input type="search" name="search" id="" className=" h-8 rounded-full
          bg-blue-400" />
      </div>
    </header>
  );
}

Header.defaultProps = {} ;

export default memo(Header);