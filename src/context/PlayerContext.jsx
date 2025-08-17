import { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playerStatus, setPlayerStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    });

    const play = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setPlayerStatus(true);
        }
    }

    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setPlayerStatus(false);
        }
    }

    const playWithId = async(id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayerStatus(true);
    }

    const previous=async()=>{
        if(track.id>0){
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play();
            setPlayerStatus(true);
        }
    }


    const next=async()=>{
        if(track.id<songsData.length-1){
            await setTrack(songsData[track.id+1]);
            await audioRef.current.play();
            setPlayerStatus(true);
        }
    }

    const seekSong=async(e)=>{
         audioRef.current.currentTime=((e.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration)
    }

    // Update audio source when track changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = track.file;
            if (playerStatus) {
                audioRef.current.play();
            }
        }
    }, [track]);

    // Add time update functionality
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const updateTime = () => {
                if (audio.duration && !isNaN(audio.duration)) {
                    setTime({
                        currentTime: {
                            second: Math.floor(audio.currentTime % 60),
                            minute: Math.floor(audio.currentTime / 60)
                        },
                        totalTime: {
                            second: Math.floor(audio.duration % 60),
                            minute: Math.floor(audio.duration / 60)
                        }
                    });

                    // Update seek bar
                    if (seekBar.current && seekBg.current) {
                        seekBar.current.style.width = (audio.currentTime / audio.duration) * 100 + "%";
                    }
                }
            };

            const handleLoadedMetadata = () => {
                updateTime();
            };

            audio.addEventListener('timeupdate', updateTime);
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);

            return () => {
                audio.removeEventListener('timeupdate', updateTime);
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            };
        }
    }, []);

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playerStatus,
        setPlayerStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            <audio ref={audioRef} preload="auto"></audio>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;

