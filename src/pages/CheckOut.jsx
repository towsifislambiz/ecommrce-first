import React, { useState } from 'react'
import Subnav from '../layouts/Subnav'
import WnavClone from "../Layout2/WnavClone"
import Container from '../Components/Container'
import { Link } from 'react-router-dom'
import Image from '../Components/Image'
import SmImg1 from '../assets/SmImg1.png'
import SmImg2 from '../assets/SmImg2.png'
import Bkash from "../assets/Bkash.png"
import Mastercard from "../assets/Mastercard.png"
import Nagad from "../assets/Nagad.png"
import Visa from "../assets/Visa.png"
import Button from "../Components/Button"
import Footer from "../layouts/Footer"

const CheckOut = () => {
const [paymentMethod, setPaymentMethod] = useState("bank");

  return (
    <div>
      <Subnav/>
      <WnavClone/>

      <section className='mb-35'>
        <Container>
    <p className='font-pop font-normal text-sm text-black mb-20 cursor-pointer mt-20'>
      <span className='text-black/50'> <Link to="/">Home</Link> </span>
          <span className='ml-2 mr-2 text-black/50 text-xs'>/</span>
        <span className='text-black/50'> <Link to="/Account">Account</Link> </span>
            <span className='ml-2 mr-2 text-black/50 text-xs'>/</span>
          <span className='text-black/50'> <Link to="/ProductPage">Product</Link> </span>
                <span className='ml-2 mr-2 text-black/50 text-xs'>/</span>
              <span className='text-black/50'> <Link to="/Cart">View Cart</Link> </span>
      <span className='ml-2 mr-2 text-black/50 text-xs'>/</span>
      CheckOut
    </p>

<h1 className='font-pop  font-medium text-3xl text-black '>Billing Details</h1>


<div className='mt-12'>
    <div className='w-full flex justify-between'>
    <div className='w-6/12 '>
    <div className='flex flex-col gap-y-8'>
        <div>
            <p className='font-pop font-normal text-base text-black/40'>First Name <span className='text-c1/40'>*</span></p>
            <input type="text" className='w-130 h-12.5 bg-[#F5F5F5] rounded text-lg font-pop mt-2' />
        </div>

        <div>
            <p className='font-pop font-normal text-base text-black/40'>Company Name</p>
            <input type="text" className='w-130 h-12.5 bg-[#F5F5F5] rounded text-lg font-pop mt-2' />
        </div>

        <div>
            <p className='font-pop font-normal text-base text-black/40'>Street Address <span className='text-c1/40'>*</span></p>
            <input type="text" className='w-130 h-12.5 bg-[#F5F5F5] rounded text-lg font-pop mt-2' />
        </div>

        <div>
            <p className='font-pop font-normal text-base text-black/40'>Apartment, floor, etc. (optional)</p>
            <input type="text" className='w-130 h-12.5 bg-[#F5F5F5] rounded text-lg font-pop mt-2' />
        </div>

        <div>
            <p className='font-pop font-normal text-base text-black/40'>Town/City <span className='text-c1/40'>*</span></p>
            <input type="text" className='w-130 h-12.5 bg-[#F5F5F5] rounded text-lg font-pop mt-2' />
        </div>

        <div>
            <p className='font-pop font-normal text-base text-black/40'>Phone Number <span className='text-c1/40'>*</span></p>
            <input type="text" className='w-130 h-12.5 bg-[#F5F5F5] rounded text-lg font-pop mt-2' />
        </div>
        <div>
            <p className='font-pop font-normal text-base text-black/40'>Email Address<span className='text-c1/40'>*</span></p>
            <input type="text" className='w-130 h-12.5 bg-[#F5F5F5] rounded text-lg font-pop mt-2' />
        </div>
    </div>

    <div className='flex items-center mt-6'>
     <input
  type="checkbox"
  className="w-6 h-6 accent-c1"
/>
<p className='ml-4 font-pop text-base font-normal text-black'>Save this information for faster check-out next time</p>
    </div>
    </div>
    <div className='w-6/12 '>
    <div>
       <div className='w-125'>
         <div className='flex items-center'>
           <div className='w-13.5 h-13.5'>
             <Image className="w-full h-full" src={SmImg2}/>
           </div>
            <p className='font-pop font-normal text-base text-black ml-6'> LCD Monitor</p>
             <p className='font-pop font-normal text-base text-black ml-52.5'> $650</p>
        </div>
         <div className='flex items-center mt-8'>
           <div className='w-13.5 h-13.5'>
             <Image className="w-full h-full" src={SmImg1}/>
           </div>
            <p className='font-pop font-normal text-base text-black ml-6'> H1 Gamepad</p>
             <p className='font-pop font-normal text-base text-black ml-52.5'> $1100</p>
        </div>

        <div className='w-106.5 flex justify-between items-center mt-8 border-b-2 border-black/30 pb-4'>
            <p className='font-pop font-normal text-base text-black'>Subtotal:</p>
            <p className='font-pop font-normal text-base text-black'>$1750</p>
        </div>
        <div className='w-106.5 flex justify-between items-center mt-8 border-b-2 border-black/30 pb-4'>
            <p className='font-pop font-normal text-base text-black'>Shipping:</p>
            <p className='font-pop font-normal text-base text-black'>Free</p>
        </div>
        <div className='w-106.5 flex justify-between items-center mt-4 '>
            <p className='font-pop font-normal text-base text-black'>Total:</p>
            <p className='font-pop font-normal text-base text-black'>$1750</p>
        </div>

<div className='w-106.5 flex mt-8 mb-8'>
<div className='w-6/12 '>
<div>
    <div className='flex items-center'>
  <input
    type="radio"
    name="payment"
    value="bank"
    checked={paymentMethod === "bank"}
    onChange={(e) => setPaymentMethod(e.target.value)}
    className="w-6 h-6 accent-black"
  />
  <p className='font-pop font-normal text-base text-black ml-4'>
    Bank
  </p>
</div>

<div className='flex items-center mt-8'>
  <input
    type="radio"
    name="payment"
    value="cash"
    checked={paymentMethod === "cash"}
    onChange={(e) => setPaymentMethod(e.target.value)}
    className="w-6 h-6 accent-black"
  />
  <p className='font-pop font-normal text-base text-black ml-4'>
    Cash on delivery
  </p>
</div>
</div>
</div>
<div className='w-6/12 '>
<div className='flex justify-between'>
  <div className='w-10.5 h-7 '>
    <Image className="w-full h-full cursor-pointer"  src={Bkash}/>
  </div>
  <div className='w-10.5 h-7 '>
    <Image className="w-full h-full cursor-pointer " src={Visa}/>
  </div>
  <div className='w-10.5 h-7 '>
    <Image className="w-full h-full cursor-pointer" src={Mastercard}/>
  </div>
  <div className='w-10.5 h-7 '>
    <Image className="w-full h-full cursor-pointer" src={Nagad}/>
  </div>
 
</div>
</div>
</div>

<div className='w-137.5'>
       <div className='flex'>
                  <input type="text"  placeholder='Coupon Code' className='w-75 h-14 border border-black rounded placeholder:text-base placeholder:font-pop placeholder:font-normal placeholder:text-black/50 placeholder:py-4 placeholder:pl-4 pl-2'  />

                <div className='ml-4'>
                    <Button className='bg-c1 border border-transparent text-white hover:bg-transparent hover:border-c1 hover:text-c1' Text="Apply Coupon "/>
                </div>
          </div>

           <Button className='bg-c1 border mt-8 border-transparent text-white hover:bg-transparent hover:border-c1 hover:text-c1' Text="Place Order "/>
</div>

       </div>
    </div>
    </div>
</div>
</div>
        </Container>
      </section>


      <Footer/>
    </div>
  )
}

export default CheckOut
