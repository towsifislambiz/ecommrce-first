import React, { useEffect, useState } from 'react'
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
import { Link } from 'react-router-dom'

const Product = () => {

  let [alldata , SetAlldata]=useState([])

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => SetAlldata(data))
    .catch(err => console.log(err))
}, [])


  return (
    <section className='mb-[140px]'>
<Container>
  <Button2 className='text-c1 text-base' Text='This Month'/>

<div className='flex justify-between items-center mt-5 mb-15'>
<Heading Text='Best Selling Products'/>
<Link to="/ProductPage">
<Button
  className="bg-c1 text-white border border-transparent hover:bg-transparent hover:border-c1 hover:text-c1"
  Text="View All "
/>
</Link>
</div>


<div className='flex flex-wrap gap-x-7.5'>
{
  alldata.map((item , index) => (

    index>4  && index<9 &&

    <Card
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
</Container>
    </section>
  )
}

export default Product
