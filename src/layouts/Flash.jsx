import React from 'react'
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

const Flash = () => {
  return (
    <section className='mt-[140px] mb-20'>
            <Container>
<div className='w-full border-b border-black/30'>
    <div className='relative'>
    <Button2 Text='Today’s'/>


<div className='mt-6 flex justify-between mb-10'>
<Heading Text='Flash Sales'/>
<Cross/>
<Countdown className=' absolute top-[50px] left-[300px]' targetDate='2026-5-14'/> 
</div>
</div>

<div className='flex justify-between flex-wrap mb-15'>
<Card src1={Fcard1} Text='HAVIT HV-G92 Gamepad' value1='$120' value2='$160' src2={Fs5} num='(88)'/>
<Card src1={Fcard2} Text='AK-900 Wired Keyboard' value1='$960' value2='$1160' src2={F4s} num='(75)'/>
<Card src1={Fcard3} Text='IPS LCD Gaming Monitor' value1='$370' value2='$400' src2={Fs5} num='(99)'/>
<Card src1={Fcard4} Text='HAVIT HV-G92 Gamepad' value1='$375' value2='$400' src2={F45s} num='(99)'/>
</div>

<div className='flex justify-center mb-[76px]'>
    <Button Text='View All Products'/>
</div>
</div>
      </Container>
    </section>
  
  
  )
}

export default Flash
