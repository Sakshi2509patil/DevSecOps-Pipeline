import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <div className="w-full">
      <Navbar />
      
      <div className="mb-8">
        <h1 className="mt-6 mb-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h1 className="mt-6 mb-5 font-bold text-2xl">Today's Biggest hits</h1>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DisplayHome