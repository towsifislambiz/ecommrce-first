import React from 'react'
import Subnav from '../layouts/Subnav'
import Wnavber from '../layout2/Wnavber'
import Wishlist from '../layout2/Wishlist'
import JustYou from '../layout2/JustYou'
import Footer from '../layouts/Footer'
const Wish = () => {
  return (
    <div className='mt-20 '>
      <Subnav/>
      <Wnavber/>
      <Wishlist />
      <JustYou/>
      <Footer/>
    </div>
  )
}

export default Wish
