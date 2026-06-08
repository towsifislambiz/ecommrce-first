import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import Button2 from '../Components/Button2'
import Heading from '../Components/Heading'
import Cross from '../Components/Cross'
import Card2 from '../Components/Card2'
import Pimg1 from '../assets/Pimg1.png'
import Pimg2 from '../assets/Pimg2.png'
import Pimg3 from '../assets/Pimg3.png'
import Pimg4 from '../assets/Pimg4.png'
import Fs5 from '../assets/Fs5.png'
import F4s from '../assets/F4s.png'
import F45s from '../assets/F45s.png'
import Fs3 from '../assets/Fs3.png'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'

const Product2 = () => {
  let [alldata , SetAlldata]=useState([])

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => SetAlldata(data))
    .catch(err => console.log(err))
}, [])

  return (
  <section className='mb-[168px]'>
    <Container>
 <Button2 className='text-c1 text-base' Text='Our Products'/>
<div className='flex justify-between mt-5 mb-15'>
    <Heading Text='Explore Our Products'/> 
    <Cross/>
</div>

<div className='flex gap-x-7.5 flex-wrap gap-y-15 mb-15'>

  {
  alldata.map((item , index) => (

    index>9  && index<18 &&

    <Card2
      key={item.id}
      src1={item.image}
      Text={item.title}
      value1={`$${item.price}`}
      value2="$160"
      src2={Fs5}
      num="(88)"
    />
  ))
}
    
 
</div> 

<div className='flex justify-center'> 
<Link to="/ProductPage">
<Button
  className="bg-c1 text-white border border-transparent hover:bg-transparent hover:border-c1 hover:text-c1"
  Text="View All Products"
/></Link>
</div>

    </Container>
  </section>
  )
}

export default Product2
