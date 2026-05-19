import React from 'react'
import Container from '../components/Container'
import Button2 from '../components/Button2'
import Heading from '../components/Heading'
import Cross from '../components/Cross'
import Card2 from '../components/Card2'
import Pimg1 from '../assets/Pimg1.png'
import Pimg2 from '../assets/Pimg2.png'
import Pimg3 from '../assets/Pimg3.png'
import Pimg4 from '../assets/Pimg4.png'
import Fs5 from '../assets/Fs5.png'
import F4s from '../assets/F4s.png'
import F45s from '../assets/F45s.png'
import Fs3 from '../assets/Fs3.png'
import Button from '../components/Button'

const Product2 = () => {
  return (
  <section className='mb-[168px]'>
    <Container>
 <Button2 className='text-c1 text-base' Text='Our Products'/>
<div className='flex justify-between mt-5 mb-15'>
    <Heading Text='Explore Our Products'/> 
    <Cross/>
</div>

<div className='flex justify-between flex-wrap gap-y-15 mb-15'>
    <Card2 src1={Pimg1} Text='Breed Dry Dog Food' value1='$100' src2={Fs3} num='(35)'/>
    <Card2 src1={Pimg2} Text='CANON EOS DSLR Camera' value1='$360' src2={F4s} num='(95)'/>
    <Card2 src1={Pimg3} Text='ASUS FHD Gaming Laptop' value1='$700' src2={Fs5} num='(325)'/>
    <Card2 src1={Pimg4} Text='Curology Product Set ' value1='$500' src2={F4s} num='(145)'/>

    <Card2 src1={Pimg1} Text='Breed Dry Dog Food' value1='$100' src2={Fs3} num='(35)'/>
   <Card2 src1={Pimg2} Text='CANON EOS DSLR Camera' value1='$360' src2={F4s} num='(95)'/>
    <Card2 src1={Pimg3} Text='ASUS FHD Gaming Laptop' value1='$700' src2={Fs5} num='(325)'/>
    <Card2 src1={Pimg4} Text='Curology Product Set ' value1='$500' src2={F4s} num='(145)'/>
</div> 

<div className='flex justify-center'> 
<Button
  className="bg-c1 text-white border border-transparent hover:bg-transparent hover:border-c1 hover:text-c1"
  Text="View All Products"
/>
</div>

    </Container>
  </section>
  )
}

export default Product2
