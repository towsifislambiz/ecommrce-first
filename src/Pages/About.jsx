import React from 'react'
import Subnav from '../layouts/Subnav'
import Cnav from '../layout4/Cnav'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Abimg from '../assets/Abimg.png'
import Acard from '../Components/Acard'
import { LuHouse } from "react-icons/lu"
import { BiDollarCircle } from "react-icons/bi"
import { FaShopify } from "react-icons/fa"
import { FaSackDollar } from "react-icons/fa6"
import Aprofile from '../Components/Aprofile'
import Apimg1 from '../assets/Apimg1.png'
import Apimg2 from '../assets/Apimg2.png'
import Apimg3 from '../assets/Apimg3.png'
import Contact from '../layouts/Contact'
import Footer from '../layouts/Footer'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Subnav />
      <Cnav />

      <section className='relative mb-20 min-h-[650px]'>
        <Container>

          <p className='text-sm mb-10 cursor-pointer'>
            <span className='text-black/50'>
              <Link to="/">Home</Link>
            </span>
            <span className='mx-2 text-black/50'>/</span>
            About
          </p>

          <h1 className='text-4xl font-semibold'>
            Our Story
          </h1>

          <p className='mt-6 mb-4 max-w-xl'>
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace...
          </p>

          <div className='absolute top-0 right-0 w-1/2 h-[650px] bg-[#EB7EA8] rounded'>
            <Image className='w-full h-full object-cover' src={Abimg} />
          </div>

        </Container>
      </section>

      {/* cards */}
      <section className='mb-20'>
        <Container>
          <div className='flex justify-between'>
            <Acard Icon={<LuHouse />} num='10.5k' Text='Active sellers' />
            <Acard Icon={<BiDollarCircle />} num='33k' Text='Monthly sales' />
            <Acard Icon={<FaShopify />} num='10.5k' Text='Products' />
            <Acard Icon={<FaSackDollar />} num='10.5k' Text='Revenue' />
          </div>
        </Container>
      </section>

      {/* profiles */}
      <section className='mb-20'>
        <Container>
          <div className='flex justify-between'>
            <Aprofile src1={Apimg1} Title='Tom Cruise' Text='Founder' />
            <Aprofile src1={Apimg2} Title='Emma Watson' Text='Director' />
            <Aprofile src1={Apimg3} Title='Will Smith' Text='Designer' />
          </div>
        </Container>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}

export default About