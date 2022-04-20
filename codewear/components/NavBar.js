import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from 'react-icons/ai';
const NavBar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center   py-2 shadow-md ">
      <div className="log mx-3">
       <Link href={'/'} className ='cursor-pointer'><Image src={"/image.webp"} height="40" width={"200"} style='top:2px !important;' /></Link> 
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-4 font-bold md:text-lg p-2">
          <Link href={'/tshirts'}><a><li>Tshirt</li></a></Link>
          <Link href={'/hoodies'}><a><li>Hoodies</li></a></Link>
          <Link href={'/stickers'}><a><li>Stickers</li></a></Link>
          <Link href={'/mugs'}><a><li>Mugs</li></a></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-2 mx-5">
      <AiOutlineShoppingCart className=" text-xl md:text-2xl " />
      </div>
    </div>
  );
};

export default NavBar;
