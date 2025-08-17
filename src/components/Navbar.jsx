import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
      {/* Top Navigation Bar */}
      <div className="w-full flex justify-between items-center font-semibold px-6 py-4 bg-transparent">
        {/* Left Side - Navigation Arrows */}
        <div className="flex items-center gap-2">
          <img onClick={()=>navigate(-1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer opacity-50" src={assets.arrow_left} alt="left" />
          <img onClick={()=>navigate(+1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt="right" />
        </div>
                
        {/* Right Side - User Actions */}
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black text-white py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            S
          </p>
        </div>
      </div>
            
      {/* Filter Categories */}
      <div className="flex items-center gap-2 mt-4 px-6">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">
          Music
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">
          Podcasts
        </p>
      </div>
    </>
  )
}

export default Navbar
