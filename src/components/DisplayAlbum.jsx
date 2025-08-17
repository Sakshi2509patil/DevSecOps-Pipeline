import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const {id} = useParams();
    const albumData = albumsData[id];
    const {playWithId}=useContext(PlayerContext)
    
    return (
        <>
            <Navbar/>
            
            {/* Album Header Section */}
            {/* <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end px-6" style={{background: `linear-gradient(${albumData?.bgColor}, #121212)`}}> */}
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end px-6 ">
                <img className="w-48 h-48 rounded shadow-2xl" src={albumData?.image} alt="" />
                <div className="flex flex-col text-white pb-8">
                    <p className="text-sm font-medium">Playlist</p>
                    <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData?.name}</h2>
                    <h4 className="text-gray-200 mb-6">{albumData?.desc}</h4>
                    <p className="flex items-center gap-2 text-sm">
                        <img className="w-6 h-6" src={assets.spotify_logo} alt="" />
                        <b className="text-white">Spotify</b>
                        <span className="text-gray-300">• 1,345,678 likes</span>
                        <span className="text-gray-300">• <b>50 songs</b></span>
                        <span className="text-gray-300">about 2 hr 30 min</span>
                    </p>
                </div>
            </div>

            {/* Songs List Header */}
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] px-6">
                <p className="flex items-center gap-4">
                    <b className="mr-4">#</b>
                    <b>Title</b>
                </p>
                <p className="hidden sm:block">Album</p>
                <p className="hidden sm:block">Date Added</p>
                <img className="m-auto w-4" src={assets.clock_icon} alt="" />
            </div>
            
            <hr className="border-gray-600 mx-6 mb-6" />
            
            {/* Songs List */}
            <div className="px-6 pb-20">
                {
                    songsData.map((item, index) => (
                        <div onClick={()=>playWithId(item.id)} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer rounded">
                            <p className="text-white flex items-center gap-4">
                                <b className="mr-4 text-[#a7a7a7] w-4 text-center">{index + 1}</b>
                                <img className="inline w-10 h-10 mr-5 rounded" src={item.image} alt="" />
                                <span className="text-white font-medium">{item.name}</span>
                            </p>
                            <p className="text-[15px] hidden sm:block">{albumData.name}</p>
                            <p className="text-[15px] hidden sm:block">5 days ago</p>
                            <p className="text-[15px] text-center">{item.duration}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default DisplayAlbum