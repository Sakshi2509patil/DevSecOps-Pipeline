import React from "react"
import Sidebar from "./components/Sidebar"
import Player from "./components/Player"
import Display from "./components/Display"
import PlayerContextProvider from "./context/PlayerContext"

function App() {
  return (
    <PlayerContextProvider>
      <div className="flex flex-col min-h-screen bg-black">
        {/* Top area: Sidebar + Display */}
        <div className="flex flex-1">
          {/* Sidebar with fixed width - hidden on mobile, shown on lg+ */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <Sidebar />
          </div>
          
          {/* Main Display area takes remaining space */}
          <div className="flex-1 bg-[#121212] rounded-lg lg:ml-2 mr-2 mt-2 overflow-y-auto">
            <Display />
          </div>
        </div>
        
        {/* Bottom Player */}
        <div className="h-[10%] mt-2">
          <Player />
        </div>
      </div>
    </PlayerContextProvider>
  )
}

export default App
