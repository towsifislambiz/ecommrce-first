import React from 'react'
import Container from '../Components/Container'
import Button from '../Components/Button'
import Image from '../Components/Image'
import Google from '../assets/Google.png'
import Sbimg from '../assets/Sb-img.png'

const SBanner = () => {
  return (
    <section className='relative min-h-screen'>
      
      {/* Left Side Image */}
      <div className='absolute w-[54%] bg-[#CBE4E8] h-200 rounded flex justify-center items-center'>
        <Image className='w-full h-200' src={Sbimg}/>
      </div>

      <Container>
        {/* Added minimum height so section takes full space */}
        <div className='flex relative min-h-screen'>
          
          {/* Right Side Form */}
          <div className='absolute right-0 top-[227.5px]'>
            <div className='ml-[50px]'>
              
              <h1 className='font-inter font-medium text-4xl text-black'>
                Log in to Exclusive
              </h1>

              <p className='pl-1 pt-6 font-normal text-base font-pop text-black'>
                Enter your details below
              </p>

              <div className='flex flex-col gap-y-10 mt-12 w-95'>
          

                <input
                  type="text"
                  placeholder='Email or Phone Number'
                  className='pl-1 w-95 h-8 border-b-2 border-black/30 placeholder:text-base placeholder:text-black/40 placeholder:font-pop placeholder:font-normal'
                />

                <input
                  type="text"
                  placeholder='Password'
                  className='pl-1 w-95 h-8 border-b-2 border-black/30 placeholder:text-base placeholder:text-black/40 placeholder:font-pop placeholder:font-normal'
                />

        
              </div>

<div className='w-full flex justify-between mt-10 items-center'>
        <Button
                  Text='Log In'
                  className=' bg-c1 py-4 px-12 text-white border border-transparent hover:text-c1 hover:bg-transparent hover:border-c1 duration-300'
                />
                
              
 <span className='font-pop font-normal text-base text-[#DB4444] cursor-pointer'>Forget Password?</span>
</div>

            </div>
          </div>

        </div>
      </Container>

    </section>
  )
}

export default SBanner