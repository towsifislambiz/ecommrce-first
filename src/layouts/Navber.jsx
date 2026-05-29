import React from 'react'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Logo from '../assets/Logo.png'
import Listitem1 from '../Components/Listitem1'
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom'


const Navber = () => {
  return (
    <nav className='mt-10 pb-4 border-b border-black/30'>
      <Container>
        <div className='flex justify-between items-center'>

              <div>
                <Image src={Logo} alt='logo image'/>
              </div>

        <div>
            <ul className='flex gap-x-12'>
<Link to="/"><Listitem1 Text='Home'/></Link>
<Link to="/ContactPart"><Listitem1 Text='Contact'/></Link>
<Link to="/About"><Listitem1 Text='About'/></Link>
<Link to="/SignUp"><Listitem1 Text='Sign Up'/></Link>



            </ul>
        </div>


        <div className='flex items-center'>
              <div className="relative w-[250px] mr-6">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full h-[40px] rounded-md bg-gray-100 pl-4 pr-10 text-sm outline-none"
      />
      <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-xl cursor-pointer" />
    </div>



<span className="text-2xl cursor-pointer mr-4">
<Link to="/Wish">
  <FaRegHeart className="hover:animate-icon-shake" />
</Link>
</span>

<span className="text-2xl cursor-pointer">
  <BsCart3 className="hover:animate-icon-shake" />
</span>
        </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navber
