import React, { useEffect, useRef } from 'react'
import DisplayHome from './DisplayHome'
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split('/').pop() : "";
  const bgColor = isAlbum && albumsData[Number(albumId)] ? albumsData[Number(albumId)].bgColor : "#121212";
  
  useEffect(() => {
    if (displayRef.current) {
      if (isAlbum) {
        displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
      } else {
        displayRef.current.style.background = '#121212';
      }
    }
  }, [isAlbum, bgColor]);
  
  return (
    <div ref={displayRef} className='w-full px-6 pt-4 rounded text-white overflow-auto'>
      <Routes>
        <Route path='/' element={<DisplayHome/>} />  
        <Route path='/album/:id' element={<DisplayAlbum/>} />   
      </Routes>
    </div>
  )
}

export default Display

