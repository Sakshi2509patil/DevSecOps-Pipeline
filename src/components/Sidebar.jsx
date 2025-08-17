import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate=useNavigate();
  return (
    <div className="w-full lg:w-72 h-full p-2 flex flex-col gap-2 text-white bg-black">
      {/* Navigation Section */}
      <div className="bg-[#121212] h-auto lg:h-[15%] rounded flex flex-col justify-around py-4">
        <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-5 lg:pl-6 cursor-pointer py-2">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold text-sm lg:text-base">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-5 lg:pl-6 cursor-pointer py-2">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold text-sm lg:text-base">Search</p>
        </div>
      </div>

      {/* Library Section */}
      <div className="bg-[#121212] flex-1 rounded">
        <div className="p-4 lg:p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-6 lg:w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold text-sm lg:text-base">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5 cursor-pointer" src={assets.arrow_icon} alt="" />
            <img className="w-5 cursor-pointer" src={assets.plus_icon} alt="" />
          </div>
        </div>

        {/* Create Playlist Card */}
        <div className="p-4 lg:p-5 bg-[#242424] m-3 rounded font-semibold flex flex-col items-start justify-start gap-2">
          <h1 className="font-bold text-sm lg:text-base">Create your first playlist</h1>
          <p className="font-light text-xs lg:text-sm">It's easy we will help you</p>
          <button className="px-3 lg:px-4 py-1.5 bg-white text-xs lg:text-[15px] text-black rounded-full mt-2 lg:mt-4 font-bold">
            Create Playlist
          </button>
        </div>

        {/* Browse Podcasts Card */}
        <div className="p-4 lg:p-5 bg-[#242424] m-3 rounded font-semibold flex flex-col items-start justify-start gap-2 mt-3 lg:mt-4">
          <h1 className="font-bold text-sm lg:text-base">Let's find some podcasts to follow</h1>
          <p className="font-light text-xs lg:text-sm">We'll keep you updated on new episodes</p>
          <button className="px-3 lg:px-4 py-1.5 bg-white text-xs lg:text-[15px] text-black rounded-full mt-2 lg:mt-4 font-bold">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar