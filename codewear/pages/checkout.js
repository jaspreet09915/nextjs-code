import React from "react";
// Delivery details -> name , email , address , phone , city , state , PinCode
// Review card Items -> sno , name , min , value of item , add at last subtotal
import {
 
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import {BsFillBagCheckFill} from "react-icons/bs";
 
import Link from 'next/link'
const Checkout = ({cart , addToCart , removeFromCart , subTotal}) => {
  return (
    <div className="container px-2 sm:m-auto">
      <h1 className="font-bold text-3xl text-center my-8">Checkout</h1>
      <h2 className="font-semibold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
      <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" rows={3} cols='30' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200   text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
      </div>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="relative">
            <label htmlFor="Phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="relative">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="relative">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              Sate
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="relative">
            <label htmlFor="pinCode" className="leading-7 text-sm text-gray-600">
              PinCode
            </label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <h2 className="font-semibold text-xl" >2. Review Cart Items</h2>
      <div
        className="  sideCart   bg-pink-100 p-6 m-2   "
      >
     
        <ol className="list-decimal">
          {Object.keys(cart).length == 0 && <div className="mt-4 font-semibold">Your Cart is Empty!</div>}
        { Object.keys(cart).map((k)=>{return<li key={k} >
             <div className="item flex my-5">
              <div className="  font-semibold">
               {cart[k].name}({cart[k].size}/{cart[k].varient})
              </div>
              <div className=" flex items-center justify-center  font-semibold w-1/3 text-lg">
                <AiFillMinusCircle onClick={()=>{removeFromCart( k , 1, cart[k].price, cart[k].name, cart[k].size, cart[k].varient)}} className="text-pink-500 cursor-pointer" />
                <span className="mx-2">{cart[k].qty}</span>
                <AiFillPlusCircle onClick={()=>{addToCart( k , 1, cart[k].price, cart[k].name, cart[k].size, cart[k].varient)}} className="text-pink-500 cursor-pointer" />
              </div>
            </div> 
          </li>})}
        </ol>
          <span className="total font-bold">Subtotal: ₹{subTotal}</span>
      </div>
      <div className="mx-4 my-4">
      <Link href={'/checkout'}><button className=" flex  mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded-lg text-sm"><BsFillBagCheckFill className="m-1"/>Pay ₹{subTotal}</button></Link>
      </div>
    </div>
  );
};

export default Checkout;
