import React from 'react'
import Container from '../Components/Container'
import Button2 from '../Components/Button2'
import Heading from '../Components/Heading'
import Button from '../Components/Button'
import Card from '../Components/Card'
import Bimg1 from '../assets/Bimg1.png'
import Bimg2 from '../assets/Bimg2.png'
import Bimg3 from '../assets/Bimg3.png'
import Bimg4 from '../assets/Bimg4.png'
import Fs5 from '../assets/Fs5.png'
import F4s from '../assets/F4s.png'
import F45s from '../assets/F45s.png'

const Product = () => {
  return (
    <section className='mb-[140px]'>
<Container>
  <Button2 className='text-c1 text-base' Text='This Month'/>

<div className='flex justify-between items-center mt-5 mb-15'>
<Heading Text='Best Selling Products'/>
<Button
  className="bg-c1 text-white border border-transparent hover:bg-transparent hover:border-c1 hover:text-c1"
  Text="View All "
/>
</div>


<div className='flex justify-between'>
    <Card src1={Bimg1} Text='The north coat' value1='$260' value2='$360' src2={Fs5} num='(65)'/>
    <Card src1={Bimg2} Text='Gucci duffle bag' value1='$960' value2='$1160' src2={F45s} num='(65)'/>
    <Card src1={Bimg3} Text='RGB liquid CPU Cooler' value1='$160' value2='$170' src2={F45s} num='(65)'/>
    <Card src1={Bimg4} Text='The north coat' value1='$360'  src2={Fs5} num='(65)'/>
</div>
</Container>
    </section>
  )
}

export default Product
