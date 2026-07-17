import React, { useEffect, useState } from 'react'
import Subnav from '../layouts/Subnav'
import WnavClone from "../Layout2/WnavClone"
import Container from '../Components/Container'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import Image from '../Components/Image'
import Button from '../Components/Button'
import Footer from  '../layouts/Footer'
import { Increment, Decrement } from "../slices/CardSlice";
import { ClearBuyNow } from "../slices/BuyNowSlice";
import { useDispatch, useSelector } from 'react-redux'
import { activeuser } from '../slices/BreadcrumbSlice'
import { RxSlash } from 'react-icons/rx'
import { getNumericPrice, getItemImage } from '../utils/priceHelpers'
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const auth = getAuth();
  const navigate = useNavigate();
    const [showAuthPopup, setShowAuthPopup] = useState(false)
   const [Total, SetTotal] = useState("")
 
 let dispatch=useDispatch()
    let Data=useSelector(state=>state.Cart.value)

    useEffect(() => {
      dispatch(activeuser("Cart"));
    }, []);
    const history = useSelector((state) => state.breadcrumb.history);

 useEffect(() => {
  let total = 0;

  Data.forEach((item) => {
    total += item.Quantity * getNumericPrice(item.price);
  });

  SetTotal(total.toFixed(2));
}, [Data]);
  
 const handleCheckout = () => {
  if (auth.currentUser) {
    // User Login আছে
    navigate("/checkout");
  } else {
    // Login নেই
    setShowAuthPopup(true);
  }
};

  
  return (

    <div>
      <Subnav/>
      <div className='mb-20'>
        <WnavClone/>
      </div>


    <section>
        <Container>
             <p className="flex items-center text-sm mb-10" >
               {history.map((item, index) => (
                 <React.Fragment key={`${item}-${index}`}>
                   {index > 0 && (
                     <span className="mx-2">
                       <RxSlash/>
                     </span>
                   )}
             
                   {index === history.length - 1 ? (
                     <span>{item}</span>
                   ) : (
                     <Link
                       to={item === "Home" ? "/" : `/${item}`}
                       onClick={() => dispatch(activeuser(item))}
                     >
                       <span className="text-black/50">{item}</span>
                     </Link>
                   )}
                 </React.Fragment>
               ))}
             </p>

<div className="flex items-center gap-4 mb-10">
            <div className="w-25 h-25 rounded-full bg-black/50 text-4xl flex justify-center items-center">
              🛍️
            </div>

            <div>
              <h2 className="text-4xl font-bold text-black mb-2 font-pop">
                Your Cart
              </h2>

              <p className=" text-2xl text-gray-500 font-semibold font-pop">
                {Data.length} items in your cart
              
              </p>
            </div>
          </div>
{/* Header */}
<div className="bg-white shadow-md rounded-xl px-8 py-5 mb-6">
  <div className="grid grid-cols-4 items-center">
    <p className="font-pop font-semibold text-black uppercase">
      Product
    </p>

    <p className="font-pop font-semibold text-black text-center uppercase">
      Price
    </p>

    <p className="font-pop font-semibold text-black text-center uppercase">
      Quantity
    </p>

    <p className="font-pop font-semibold text-black text-right uppercase">
      Subtotal
    </p>
  </div>
</div>

{/* Products */}
{
  Data.map((item) => {
    return (
      <div
        key={item.id ?? item.title}
        className="bg-white rounded-xl shadow-md p-6 mb-5 hover:shadow-xl duration-300"
      >
        <div className="grid grid-cols-4 items-center">

          {/* Product */}
          <div className="flex items-center gap-5">
            <div className="w-24 h-24 bg-[#F5F5F5] rounded-lg flex justify-center items-center overflow-hidden">
              <Image
                src={getItemImage(item)}
                className="w-full h-full object-contain p-2"
              />
            </div>

            <div>
              <h2 className="font-pop font-medium text-lg text-black">
                {item.title}
              </h2>

              <p className="text-green-600 text-sm mt-1">
                In Stock
              </p>
            </div>
          </div>

          {/* Price */}
          <div className="text-center">
            <p className="font-pop font-semibold text-xl text-black">
              ${getNumericPrice(item.price).toFixed(2)}
            </p>
          </div>

          {/* Quantity */}
          <div className="flex justify-center">
            <div className="flex items-center border rounded-lg overflow-hidden">

             <button
  onClick={() => dispatch(Decrement(item))}
  className="px-4 py-2 hover:bg-gray-200 text-xl"
>
  -
</button>

<span className="px-6 font-semibold">
  {item.Quantity}
</span>

<button
  onClick={() => dispatch(Increment(item))}
  className="px-4 py-2 hover:bg-gray-200 text-xl"
>
  +
</button>

            </div>
          </div>

          {/* Subtotal */}
          <div className="text-right">
            <p className="font-pop font-bold text-xl text-black">
              $
              {(
                getNumericPrice(item.price) *
                item.Quantity
              ).toFixed(2)}
            </p>
          </div>

        </div>
      </div>
    );
  })
}

    <div className='flex justify-between mb-20'>
       <Link to="/">
        <button className='font-pop bg-black font-medium text-base text-white border border-transparent py-4 px-12 cursor-pointer hover:bg-transparent hover:text-black hover:border-black/50 rounded duration-300'>Return To Shop</button>
       </Link>

        <button className='font-pop bg-black font-medium text-base text-white border border-transparent py-4 px-12 cursor-pointer hover:bg-transparent hover:text-black hover:border-black/50 rounded duration-300'>Update Cart</button>
    </div>
        </Container>
    </section>

    <section className='mb-35'>
        <Container>
            <div className='flex justify-between w-full'>
                <div className='w-8/12'>
          <div className='flex'>
                  <input type="text"  placeholder='Coupon Code' className='w-87.5 h-14 border border-black rounded placeholder:text-base placeholder:font-pop placeholder:font-normal placeholder:text-black/50 placeholder:py-4 placeholder:pl-4 pl-2'  />

                <div className='ml-4'>
                    <Button className='bg-c1 border border-transparent text-white hover:bg-transparent hover:border-c1 hover:text-c1' Text="Apply Coupon "/>
                </div>
          </div>
                </div>
                <div className='w-4/12 '>
                <div className='w-full border border-black'>
<div className='mt-6 mx-6 mb-4'>
    <p className='font-pop font-medium text-xl text-black mb-6'>Cart Total</p>

    <div className='flex justify-between border-b border-black/40 mb-4'>
        <p className='font-pop font-normal text-base text-black '>Subtotal:</p>
        <p className='font-pop font-bold text-xl text-black mb-4 '>${Total}</p>
    </div>

    <div className='flex justify-between border-b border-black/40 mb-4'>
        <p className='font-pop font-normal text-base text-black '>Shipping:</p>
        <p className='font-pop font-normal text-xl text-black mb-4'>Free</p>
    </div>

    <div className='flex justify-between  mb-4'>
        <p className='font-pop font-normal text-base text-black '>Total:</p>
        <p className='font-pop font-bold text-xl text-black mb-4 '>
          ${Total}
        </p>
    </div>
</div>

<div className='flex justify-center mb-8'>

<button
  onClick={handleCheckout}
  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#F43F5E] to-[#FB7185] text-white font-semibold text-lg hover:scale-105 duration-300"
>
  Proceed to Checkout
</button>
</div>


{
  showAuthPopup && (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-[999]">

      <div className="relative w-[430px] rounded-3xl border border-white/10 bg-[#111827] shadow-[0_0_60px_rgba(236,72,153,.15)] overflow-hidden">

        {/* Top Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl"></div>

        <div className="relative p-8">

          {/* Close */}
          <button
            onClick={() => setShowAuthPopup(false)}
            className="absolute right-5 top-5 text-gray-400 hover:text-white text-2xl duration-300"
          >
            ✕
          </button>

          {/* Lock Icon */}
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-violet-600 flex justify-center items-center text-4xl shadow-lg">
            🔒
          </div>

          <h2 className="text-white text-3xl font-bold text-center mt-6">
            Authentication Required
          </h2>

          <p className="text-gray-400 text-center mt-4 leading-7">
            Please login or create an account
            before proceeding to checkout.
          </p>

          {/* Login */}
          <Link to="/Login">
            <button
              onClick={() => setShowAuthPopup(false)}
              className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold text-lg hover:scale-105 duration-300"
            >
              Login
            </button>
          </Link>

          {/* Signup */}
          <Link to="/SignUp">
            <button
              onClick={() => setShowAuthPopup(false)}
              className="w-full mt-4 py-4 rounded-2xl border border-gray-600 text-white font-semibold hover:bg-white/10 duration-300"
            >
              Create Account
            </button>
          </Link>

          {/* Continue Shopping */}
          <button
            onClick={() => {
              setShowAuthPopup(false)
              setCartopen(false)
            }}
            className="w-full mt-5 text-gray-400 hover:text-white duration-300"
          >
            Continue Shopping
          </button>

        </div>

      </div>

    </div>
  )
}
                </div>
                </div>
            </div>
        </Container>
    </section>

<Footer/>
    
    </div>






  )
}

export default Cart
