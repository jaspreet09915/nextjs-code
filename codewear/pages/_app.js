import "../styles/globals.css";
import { useRouter } from 'next/router'
import { useState , useEffect  } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
//shopping cart -> addToCart , removeToCart , checkout , clear Cart , subtotalOfItem that are included in shopping cart

//   clearCart , saveCart , addToCart , removeFromCart

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const router = useRouter();
  // console.log(subTotal)
  useEffect(() => {
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      // console.log(error);
      localStorage.clear();      
    }
  }, []);
  
  
  // saving the cart in local storage
  const saveCart = (myCart)=>{
    localStorage.setItem("cart",JSON.stringify(myCart))
    let subt = 0;
    let key = Object.keys(myCart)
    for(let i=0; i<key.length; i++){
      // console.log(key)
      subt += myCart[key[i]]["price"] * myCart[key[i]].qty;  
    }
    setSubTotal(subt)
  }
  const addToCart =(itemCode, qty, price, name, size, varient)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty; 
    }
    else{
      newCart[itemCode] = {qty:1, price , name, size, varient}
    }
    setCart(newCart)
    // console.log(newCart)
    saveCart(newCart)
  }
  
  const clearCart = ()=>{
    // console.log("cleaning")
    setCart({})
    saveCart({})
  }
  const removeFromCart = (itemCode, qty, price, name, size, varient)=>{
    let newCart = JSON.parse(JSON.stringify(cart));
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty; 
    }
    // console.log(newCart[itemCode])
    if(newCart[itemCode]["qty"]<=0){ // fields are inclosed in double quote
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }
  
  
  const buyNow = (itemCode, qty, price, name, size, varient)=>{
    console.log(itemCode)
    let newCart = {itemCode: {qty:1, price , name, size, varient}};
    setCart(newCart)
    saveCart(newCart)
    // console.log(newCart)
    router.push('/checkout')
  }
  return (
    <>
      <NavBar  cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}  />
      <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
