import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Wcard from '../components/Wcard'
import Bimg2 from '../assets/Bimg2.png'
import Bimg3 from '../assets/Bimg3.png'
import Wimg1 from '../assets/Wimg1.png'
import Wimg2 from '../assets/Wimg2.png'


const Wishlist = () => {
  return (
    <section className='mt-20 mb-20'>
        <Container>
            <div className='flex justify-between items-center'>
                <h4 className='font-pop font-normal text-xl text-black'>Wishlist (4)</h4>
                <Button className='bg-white text-black border border-black/50 hover:bg-black hover:border-transparent hover:text-white' Text='Move All To Bag'/>
            </div>


             <div className='mt-15 flex justify-between '>
                    <Wcard src1={Bimg2} Text='Gucci duffle bag' value1='$960' value2='$1160'/>
                    <Wcard src1={Bimg3} Text='RGB liquid CPU Cooler' value1='$1960'/>
                    <Wcard src1={Wimg1} Text='GP11 Shooter USB Gamepad' value1='$550' />
                    <Wcard src1={Wimg2} Text='Quilted Satin Jacket' value1='$750' />
                </div>
        </Container>
    </section>
  )
}

export default Wishlist
