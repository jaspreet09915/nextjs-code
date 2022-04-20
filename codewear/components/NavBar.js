import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from 'react-icons/ai';
const NavBar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2">
      <div className="log mx-3">
        <Image src={"/image.webp"} height="40" width={"200"} />
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-3 font-bold md:text-xl">
          <Link href={'/'}><a><li>Tshirt</li></a></Link>
          <Link href={'/'}><a><li>Hoodies</li></a></Link>
          <Link href={'/'}><a><li>Stickers</li></a></Link>
          <Link href={'/'}><a><li>Mugs</li></a></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-2 mx-6">
      <AiOutlineShoppingCart className=" text-xl md:text-3xl " />
      </div>
    </div>
  );
};

export default NavBar;
