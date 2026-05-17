import React from 'react'
import Container from '../Components/Container'
import Button from '../Components/Button'
import Image from '../Components/Image'
import Google from '../assets/Google.png'
import SbImg from '../assets/Sb-img.png'

const SBannner = () => {
  return (
    <section className='relative min-h-screen'>
      
      {/* Left Side Image */}
      <div className='absolute w-[54%] bg-[#CBE4E8] h-200 rounded flex justify-center items-center'>
        <Image src={SbImg}/>
      </div>

      <Container>
        {/* Added minimum height so section takes full space */}
        <div className='flex relative min-h-screen'>
          
          {/* Right Side Form */}
          <div className='absolute right-0 top-31.25'>
            <div className='ml-[50px]'>
              
              <h1 className='font-inter font-medium text-4xl text-black'>
                Create an account
              </h1>

              <p className='pl-1 pt-6 font-normal text-base font-pop text-black'>
                Enter your details below
              </p>

              <div className='flex flex-col gap-y-10 mt-12 w-73'>
                <input
                  type="text"
                  placeholder='Name'
                  className='pl-1 w-73 h-8 border-b-2 border-black/30 placeholder:text-base placeholder:text-black/40 placeholder:font-pop placeholder:font-normal'
                />

                <input
                  type="text"
                  placeholder='Email or Phone Number'
                  className='pl-1 w-73 h-8 border-b-2 border-black/30 placeholder:text-base placeholder:text-black/40 placeholder:font-pop placeholder:font-normal'
                />

                <input
                  type="text"
                  placeholder='Password'
                  className='pl-1 w-73 h-8 border-b-2 border-black/30 placeholder:text-base placeholder:text-black/40 placeholder:font-pop placeholder:font-normal'
                />

                <Button
                  Text='Create Account'
                  className='mt-4 bg-c1 w-full text-white border border-transparent hover:text-c1 hover:bg-transparent hover:border-c1 duration-300'
                />
              </div>

              <button className='flex justify-center w-73 mt-8 border rounded border-black/40 py-3 cursor-pointer'>
                <Image className='w-6 h-6 mr-4' src={Google}/>
                Sign up with Google
              </button>

              <p className='font-pop font-normal text-sm text-black/70 text-center mt-8.5'>
                Already have account?
                <span className='border-b border-black/40 cursor-pointer ml-4'>
                  Log in
                </span>
              </p>

            </div>
          </div>

        </div>
      </Container>

    </section>
  )
}

export default SBannner