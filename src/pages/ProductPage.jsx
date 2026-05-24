import React from 'react'
import Subnav from '../layouts/Subnav'
import Cnav from '../layout4/Cnav'
import Container from '../Components/Container'
import Listitem2 from '../Components/Listitem2'
import PPcard from '../Components/PPcard'
import Fcard1 from '../assets/Fcard1.png'
import Fcard2 from '../assets/Fcard2.png'
import Fcard3 from '../assets/Fcard3.png'
import Fcard4 from '../assets/Fcard4.png'
import Fs5 from '../assets/Fs5.png'
import F4s from '../assets/F4s.png'
import F45s from '../assets/F45s.png'
import Footer from '../layouts/Footer'

const ProductPage = () => {
  return (
    <div>
    <div className='mb-10'>
        <Subnav/>
    </div>

    <Cnav/>


    <section>
<Container>
  <p className='pb-12.5 cursor-pointer font-pop font-normal text-sm text-black/50'>home  <span className='text-xs mx-3'>/</span>  shop</p>

<div className='flex justify-between mb-7.5'>
  
  <p className='font-pop font-bold text-xl text-[#262626]'>Shop by Category</p>

<div className='flex justify-between w-40 items-center'>
  <p className='font-pop font-normal text-base text-black'>Show : </p>  
  <p className='font-pop font-normal text-base text-black pt-1 px-10 border border-[#D9D9D9] rounded-[5px] inline-block'>6</p>
</div>
</div>

<div className='w-full flex justify-between'>
<div className='w-3/12'>  
  <ul className='flex flex-col gap-y-4 mb-10'>
<Listitem2 Text='Woman’s Fashion'/>
<Listitem2 Text='Men’s Fashion'/>
<Listitem2 Text='Electronics'/>
<Listitem2 Text='Home & Lifestyle'/>
<Listitem2 Text='Medicine'/>
<Listitem2 Text='Sports & Outdoor'/>
<Listitem2 Text='Baby’s & Toys'/>
<Listitem2 Text='Groceries & Pets'/>
<Listitem2 Text='Health & Beauty'/>
</ul>

 <p className='font-pop font-bold text-xl text-[#262626] pb-4'>Shop by Color</p>

 <div className='flex flex-col gap-y-4.5'>
  <div className='flex items-center w-18.75 justify-between'>
  <div className='w-2.5 h-2.5 rounded-full bg-black'></div>
  <p className='font-pop font-normal text-base text-[#767676] cursor-pointer'>Color 1</p>
 </div>

 <div className='flex items-center w-18.75 justify-between'>
  <div className='w-2.5 h-2.5 rounded-full bg-[#FF0000]'></div>
  <p className='font-pop font-normal text-base text-[#767676] cursor-pointer'>Color 2</p>
 </div>

 <div className='flex items-center w-18.75 justify-between'>
  <div className='w-2.5 h-2.5 rounded-full bg-[#00FF38]'></div>
  <p className='font-pop font-normal text-base text-[#767676] cursor-pointer'>Color 3</p>
 </div>
 </div>
</div>


<div className='w-9/12'>
<div className='flex justify-between flex-wrap gap-y-10 mb-10'>
  <PPcard src1={Fcard1} discount='-35%' Text='AK-900 Wired Keyboard' value1='$960' value2='$1160' src2={F4s} num='(75)'/>
  <PPcard src1={Fcard2} discount='-35%' Text='IPS LCD Gaming Monitor' value1='$370' value2='$400' src2={Fs5} num='(99)'/>
  <PPcard src1={Fcard3} discount='-35%' Text='RGB liquid CPU Cooler' value1='$160' value2='$170' src2={F45s} num='(65)'/>
  <PPcard src1={Fcard1} discount='-35%' Text='RGB liquid CPU Cooler' value1='$160' value2='$170' src2={F45s} num='(65)'/>
  <PPcard src1={Fcard2} discount='-35%' Text='RGB liquid CPU Cooler' value1='$160' value2='$170' src2={F45s} num='(65)'/>
  <PPcard src1={Fcard3} discount='-35%' Text='RGB liquid CPU Cooler' value1='$160' value2='$170' src2={F45s} num='(65)'/>
  <PPcard src1={Fcard1} discount='-35%' Text='RGB liquid CPU Cooler' value1='$160' value2='$170' src2={F45s} num='(65)'/>
  <PPcard src1={Fcard2} discount='-35%' Text='RGB liquid CPU Cooler' value1='$160' value2='$170' src2={F45s} num='(65)'/>
  <PPcard src1={Fcard3} discount='-35%' Text='RGB liquid CPU Cooler' value1='$160' value2='$170' src2={F45s} num='(65)'/>
</div>

<div className='flex gap-x-2.5 mb-26'>
  <button className='bg-black text-white py-0.5 px-7 cursor-pointer'>1</button>
  <button className='bg-black text-white py-0.5 px-7 cursor-pointer'>2</button>
  <button className='bg-black text-white py-0.5 px-7 cursor-pointer'>3</button>
  <button className='bg-black text-white py-0.5 px-7 cursor-pointer'>4</button>
</div>


</div>
</div>

</Container>
    </section>

    <Footer/>


    </div>
  )
}

export default ProductPage
