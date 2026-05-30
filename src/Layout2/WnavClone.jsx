import React from 'react'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Logo from '../assets/Logo.png'
import Listitem1 from '../Components/Listitem1'
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { LuUser } from "react-icons/lu";
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
<Link to='/'><Listitem1 Text='Home'/></Link>
<Link to='/ContactPart'><Listitem1 Text='Contact'/></Link>
<Link to='/About'><Listitem1 Text='About'/></Link>
<Link to='/SignUp'><Listitem1 Text='Sign Up'/></Link>



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




    <span className="group relative inline-block text-2xl cursor-pointer mr-5">

<Link to="/Wish">
  <FaRegHeart className="group-hover:animate-icon-shake" />
</Link>

  <span className="w-4 h-4 bg-c1 absolute -top-1 -right-1 rounded-full text-xs font-pop font-normal flex justify-center items-center text-white group-hover:animate-icon-shake">4</span>
</span>



 <span className="group relative inline-block text-2xl cursor-pointer mr-5">
 <BsCart3 className="hover:animate-icon-shake" />

  <span className="w-4 h-4 bg-c1 absolute -top-1 -right-1 rounded-full text-xs font-pop font-normal flex justify-center items-center text-white group-hover:animate-icon-shake">2</span>
</span>


<span className="text-2xl cursor-pointer">
<Link to="/Account">
 <LuUser className='hover:animate-icon-shake' />
</Link>
</span>


        </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navber
