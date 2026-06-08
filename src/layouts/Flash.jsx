import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import Button2 from '../Components/Button2'
import Heading from '../Components/Heading'
import Countdown from '../Components/Countdown'
import Cross from '../Components/Cross'
import Card from '../Components/Card'
import Fcard1 from '../assets/Fcard1.png'
import Fcard2 from '../assets/Fcard2.png'
import Fcard3 from '../assets/Fcard3.png'
import Fcard4 from '../assets/Fcard4.png'
import Fs5 from '../assets/Fs5.png'
import F4s from '../assets/F4s.png'
import F45s from '../assets/F45s.png'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'

const Flash = () => {
  let [alldata , SetAlldata]=useState([])

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => SetAlldata(data))
    .catch(err => console.log(err))
}, [])


  return (
    <section className='mt-[140px] mb-20'>
            <Container>
<div className='w-full border-b border-black/30'>
    <div className='relative'>
    <Button2 className='text-c1 text-base' Text='Today’s'/>


<div className='mt-6 flex justify-between mb-10'>
<Heading Text='Flash Sales'/>
<Cross/>
<Countdown className=' absolute top-[50px] left-[300px]' targetDate='2026-5-28'/> 
</div>
</div>

<div className='flex justify-between flex-wrap mb-15'>
{
  alldata.map((item , index) => (

    index<4 &&

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

<div className='flex justify-center mb-[76px]'>
<Link to="/ProductPage"><Button
  className="bg-c1 text-white border border-transparent hover:bg-transparent hover:border-c1 hover:text-c1"
  Text="View All Products"
/></Link>
</div>
</div>
      </Container>
    </section>
  
  
  )
}

export default Flash
