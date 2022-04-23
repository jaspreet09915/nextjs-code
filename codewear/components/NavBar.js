import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import {BsFillBagCheckFill} from "react-icons/bs";
const NavBar = ({cart , addToCart , removeFromCart , clearCart, subTotal}) => {
  // console.log(cart , addToCart , removeFromCart , clearCart, subTotal)
  const ref = useRef();
  const toggleCart = () => {
    // console.log(ref.current.classList.contains('translate-x-full'))
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center   py-2 shadow-md sticky top-0 z-30 bg-white">
      <div className="log mx-3">
        <Link href={"/"} className="cursor-pointer">
          <Image
            src={"/image.webp"}
            height="40"
            width={"200"}
            style="top:2px !important;"
          />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-4 font-bold md:text-lg p-2 ">
          <Link href={"/tshirts"}>
            <a>
              <li>Tshirt</li>
            </a>
          </Link>
          <Link href={"/hoodies"}>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/stickers"}>
            <a>
              <li>Stickers</li>
            </a>
          </Link>
          <Link href={"/mugs"}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div
        onClick={toggleCart}
        className="cart absolute right-0 top-3 mx-5 cursor-pointer"
      >
        <AiOutlineShoppingCart className=" text-xl md:text-2xl " />
      </div>

      <div
        ref={ref}
        className={`w-72 h-[100vh] sideCart z-50 absolute right-0 top-0 bg-pink-100 px-8 p-10 transform transition-transform ${Object.keys(cart).length ==0 ? "translate-x-full" : "translate-x-0"}  `}
      >
        <h2 className="font-bold text-center text-xl">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute right-2 top-5 cursor-pointer text-2xl text-pink-500"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal">
          {Object.keys(cart).length == 0 && <div className="mt-4 font-semibold">Your Cart is Empty!</div>}
        { Object.keys(cart).map((k)=>{return<li key={k}>
             <div className="item flex my-5">
              <div className="w-2/3  font-semibold">
               {cart[k].name}
              </div>
              <div className=" flex items-center justify-center  font-semibold w-1/3 text-lg">
                <AiFillMinusCircle onClick={()=>{removeFromCart( k , 1, cart[k].price, cart[k].name, cart[k].size, cart[k].varient)}} className="text-pink-500 cursor-pointer" />
                <span className="mx-2">{cart[k].qty}</span>
                <AiFillPlusCircle onClick={()=>{addToCart( k , 1, cart[k].price, cart[k].name, cart[k].size, cart[k].varient)}} className="text-pink-500 cursor-pointer" />
              </div>
            </div> 
          </li>})}
        </ol>
        <div className="total font-bold my-3">Subtotal: ₹{subTotal}</div>
        <div className="flex">
        <Link href={'/checkout'}><button className=" flex  mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded-lg text-sm"><BsFillBagCheckFill className="m-1"/>Check out</button></Link>
        <button onClick={clearCart} className=" flex  mr-2  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded-lg text-sm"> Clear Cart</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
