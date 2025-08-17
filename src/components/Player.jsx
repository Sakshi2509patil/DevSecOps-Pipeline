import React, { useContext } from 'react'
import {assets, songsData} from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

function Player() {
  const {seekBar, seekBg, playerStatus, play, pause, track,time,previous,next,seekSong} = useContext(PlayerContext);
  
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[10%] bg-black flex justify-between items-center text-white px-4 z-10">
      {/* Left Section - Now Playing */}
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12 h-12 rounded" src={track.image} alt="" />
        <div>
          <p className="text-sm font-semibold">{track.name}</p>
          <p className="text-xs text-gray-400">{track.desc.slice(0,12)}</p>
        </div>
      </div>

      {/* Center Section - Player Controls */}
      <div className="flex flex-col items-center gap-1 m-auto">
        {/* Control Buttons */}
        <div className="flex items-center gap-4">
          <img className="w-4 h-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
          <img onClick={previous} className="w-4 h-4 cursor-pointer" src={assets.prev_icon} alt="" />
          {playerStatus ? 
            <img onClick={pause} className="w-8 h-8 cursor-pointer" src={assets.pause_icon} alt="" /> :
            <img onClick={play} className="w-8 h-8 cursor-pointer" src={assets.play_icon} alt="" />
          }
          <img onClick={next} className="w-4 h-4 cursor-pointer" src={assets.next_icon} alt="" />
          <img className="w-4 h-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
                
        {/* Progress Bar */}
        <div className="flex items-center gap-2 text-xs">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full h-1 cursor-pointer">
            <div ref={seekBar} className="bg-green-800 h-1 rounded-full" style={{width: '30%'}}></div>
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>

      {/* Right Section - Volume & Options */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4 cursor-pointer" src={assets.plays_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded">
          <div className="bg-green-800 h-1 rounded" style={{width: '60%'}}></div>
        </div>
        <img className="w-4 cursor-pointer" src={assets.mini_player_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  )
}

export default Player