import React from 'react'
import Subnav from '../layouts/Subnav'
import WnavClone from "../Layout2/WnavClone"
import Container from '../Components/Container'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import Image from '../Components/Image'
import SmImg1 from '../assets/SmImg1.png'
import SmImg2 from '../assets/SmImg2.png'
import Button from '../Components/Button'
import Footer from  '../layouts/Footer'

const Cart = () => {
  return (
    <div>
      <Subnav/>
      <div className='mb-20'>
        <WnavClone/>
      </div>


    <section>
        <Container>
               <p className='font-pop font-normal text-sm text-black mb-26 cursor-pointer'>
      <span className='text-black/50'> <Link to="/">Home</Link> </span>
      <span className='ml-2 mr-2 text-black/50 text-xs'>/</span>
      Cart
    </p>

    <div>
        <div className='flex justify-between mb-16'>
            <p className='font-pop font-normal text-base text-black'>Product</p>
            <p className='font-pop font-normal text-base text-black'>Price</p>
            <p className='font-pop font-normal text-base text-black'>Quantity</p>
            <p className='font-pop font-normal text-base text-black'>Subtotal</p>
        </div>


   <div className='mb-6'>
         <div className='w-full shadow-xl  h-25'>
<div className="flex justify-between items-center pt-6 pl-10">
  
  {/* Product */}
  <div className="flex items-center">
    <div className="w-14 h-14">
<Image className="w-full h-full" src={SmImg1}/>
    </div>
    <p className="font-pop font-normal text-base text-black ml-5">
      LCD Monitor
    </p>
  </div>

  {/* Price */}
  <div className='mr-25'>
    <p className="font-pop font-normal text-base text-black">
      $650
    </p>
  </div>

  {/* Quantity */}
  <div className="w-20 h-11 border flex items-center justify-center mr-26">
    <p className="font-pop font-normal text-base text-black">
      01
    </p>

    <div className='ml-4'>
        <span>
            <MdKeyboardArrowUp className='text-xl cursor-pointer' />
        </span>
   

        <span>
                 <MdKeyboardArrowDown  className='text-xl cursor-pointer'/>
        </span>
    </div>
  </div>

 {/* Subtotal */}
  <div className='pr-10'>
    <p className="font-pop font-normal text-base text-black">
      $650
    </p>
  </div>

</div>
        </div>


               <div className='w-full shadow-xl bg-white h-25 mt-10'>
<div className="flex justify-between items-center pt-6 pl-10">
  
  {/* Product */}
  <div className="flex items-center">
    <div className="w-14 h-14 ">
        <Image className="w-full h-full" src={SmImg2}/>
    </div>
    <p className="font-pop font-normal text-base text-black ml-5">
      LCD Monitor
    </p>
  </div>

  {/* Price */}
  <div className='mr-25'>
    <p className="font-pop font-normal text-base text-black">
      $550
    </p>
  </div>

  {/* Quantity */}
  <div className="w-20 h-11 border flex items-center justify-center mr-26">
    <p className="font-pop font-normal text-base text-black">
      02
    </p>

    <div className='ml-4'>
        <span>
            <MdKeyboardArrowUp className='text-xl cursor-pointer' />
        </span>
   

        <span>
                 <MdKeyboardArrowDown  className='text-xl cursor-pointer'/>
        </span>
    </div>
  </div>

 {/* Subtotal */}
  <div className='pr-10'>
    <p className="font-pop font-normal text-base text-black">
      $1100
    </p>
  </div>

</div>
        </div>
   </div>


    </div>

    <div className='flex justify-between mb-20'>
        <button className='font-pop font-medium text-base text-black border border-black/50 py-4 px-12 cursor-pointer hover:bg-black hover:text-white hover:border-transparent rounded duration-300'>Return To Shop</button>

        <button className='font-pop font-medium text-base text-black border border-black/50 py-4 px-12 cursor-pointer hover:bg-black hover:text-white hover:border-transparent rounded duration-300'>Update Cart</button>
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
        <p className='font-pop font-normal text-base text-black mb-4 '>$1750</p>
    </div>

    <div className='flex justify-between border-b border-black/40 mb-4'>
        <p className='font-pop font-normal text-base text-black '>Shipping:</p>
        <p className='font-pop font-normal text-base text-black mb-4'>Free</p>
    </div>

    <div className='flex justify-between  mb-4'>
        <p className='font-pop font-normal text-base text-black '>Total:</p>
        <p className='font-pop font-normal text-base text-black '>$1750</p>
    </div>
</div>

<div className='flex justify-center mb-8'>
<Link to="/CheckOut">
     <Button className='bg-c1 border border-transparent text-white hover:bg-transparent hover:border-c1 hover:text-c1' Text="Procees to checkout"/>
</Link>
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

export default Cart
