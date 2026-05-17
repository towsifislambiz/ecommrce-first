import React from 'react'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Logo from '../assets/Logo.png'
import Listitem1 from '../Components/Listitem1'
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";


const Navber = () => {
  return (
    <nav className='mt-9.5 pb-4 mb-19 border-b border-black/30'>
      <Container>
        <div className='flex justify-between items-center'>

              <div>
                <Image src={Logo} alt='logo image'/>
              </div>

        <div>
            <ul className='flex gap-x-12'>
<Listitem1 Text='Home'/>
<Listitem1 Text='Contact'/>
<Listitem1 Text='About'/>
<Listitem1 Text='Sign Up'/>
            </ul>
        </div>


        <div className='flex items-center'>
              <div className="relative w-[250px]">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full h-[40px] rounded-md bg-gray-100 pl-4 pr-10 text-sm outline-none"
      />
      <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-xl cursor-pointer" />
    </div>




        </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navber
