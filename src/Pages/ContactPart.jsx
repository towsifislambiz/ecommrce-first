import React from 'react'
import Subnav from '../layouts/Subnav'
import Cnav from '../layout4/Cnav'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Cimg1 from '../assets/Cimg1.png'
import Cimg2 from '../assets/Cimg2.png'
import Button from '../Components/Button'
import Footer from '../layouts/Footer'
import { Link } from 'react-router-dom'

const ContactPart = () => {
  return (
    <div>
      <div className='mb-10'>
        <Subnav />
      </div>

      <Cnav />

      <section>
        <Container>

          {/* breadcrumb */}
          <p className='font-pop font-normal text-sm text-black mb-20 cursor-pointer'>
            <span className='text-black/50'>
              <Link to="/">Home</Link>
            </span>
            <span className='mx-2 text-black/50 text-xs'>/</span>
            Contact
          </p>

          <div className='flex justify-between mb-20'>

            {/* LEFT SIDE */}
            <div className='w-4/12'>

              <div className='rounded shadow-xl p-8'>

                {/* Call */}
                <div>
                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-c1 rounded-full flex justify-center items-center'>
                      <Image className='w-6 h-6' src={Cimg1} />
                    </div>
                    <h5 className='font-pop font-medium text-base text-black ml-4'>
                      Call To Us
                    </h5>
                  </div>

                  <p className='mt-6 text-base text-black'>
                    We are available 24/7, 7 days a week.
                  </p>
                  <p className='mt-2 text-base text-black'>
                    Phone: +8801611112222
                  </p>
                </div>

                <div className='h-px bg-black/30 my-8'></div>

                {/* Email */}
                <div>
                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-c1 rounded-full flex justify-center items-center'>
                      <Image className='w-6 h-6' src={Cimg2} />
                    </div>
                    <h5 className='font-pop font-medium text-base text-black ml-4'>
                      Write To Us
                    </h5>
                  </div>

                  <p className='mt-6 text-base text-black'>
                    Fill out our form and we will contact you within 24 hours.
                  </p>
                  <p className='mt-2 text-base text-black'>
                    Emails: customer@exclusive.com
                  </p>
                  <p className='mt-2 mb-4 text-base text-black'>
                    Emails: support@exclusive.com
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className='w-8/12'>

              <div className='rounded shadow-xl p-8'>

                {/* inputs */}
                <div className='flex gap-4'>

                  <input
                    type="text"
                    placeholder="Your Name"
                    className='w-full h-12 bg-[#F5F5F5] px-4 outline-none'
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className='w-full h-12 bg-[#F5F5F5] px-4 outline-none'
                  />

                  <input
                    type="text"
                    placeholder="Your Phone"
                    className='w-full h-12 bg-[#F5F5F5] px-4 outline-none'
                  />

                </div>

                {/* message */}
                <textarea
                  placeholder='Your Message'
                  className='w-full h-40 mt-6 bg-[#F5F5F5] p-4 outline-none'
                />

                {/* button */}
                <div className='mt-6'>
                  <Button
                    className='bg-c1 text-white px-6 py-3 hover:bg-transparent hover:text-c1 border border-transparent hover:border-c1 duration-300'
                    Text='Send Message'
                  />
                </div>

              </div>

            </div>

          </div>

        </Container>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPart