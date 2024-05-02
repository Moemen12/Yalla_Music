import React, { useState, useRef } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import Swap from "../../components/swap/Swap";
import { FaRegCirclePause } from "react-icons/fa6";
import { MdOutlineNotStarted } from "react-icons/md";

const StartedMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [previousVolume, setPreviousVolume] = useState(1);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      setIsPlaying(!isPlaying);
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handlePlaybackSpeedChange = (speed: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
      //   setPlaybackRate(speed);
    }
  };

  const handleVolumeChange = (value: number) => {
    if (audioRef.current && !isMuted) {
      audioRef.current.volume = value;
      setVolume(value);
    }
  };

  const handleProgressChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value * duration;
      setCurrentTime(value * duration);
    }
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      if (!isMuted) {
        setPreviousVolume(volume);
        setVolume(0);
        audioRef.current.volume = 0;
      } else {
        setVolume(previousVolume);
        audioRef.current.volume = previousVolume;
      }
    }
  };

  return (
    <div className="audio-displayer px-2 sm:px-0 h-40">
      <div className="sm:w-[70%] w-full mx-auto flex gap-8 h-full">
        <audio
          ref={audioRef}
          src="/assets/musics/sweethearts.mp3"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />
        <Swap
          onIconSize={"2.5rem"}
          onIconColor="#fff"
          offIconColor="#fff"
          offIconSize={"2.5rem"}
          iconOn={MdOutlineNotStarted}
          default={true}
          iconOff={FaRegCirclePause}
          onToggleOff={handlePlayPause}
          onToggleOn={handlePlayPause}
        />
        <div className="flex flex-col justify-center flex-1">
          <div className="flex items-center justify-between">
            <label htmlFor="audio" className="text-white text-base sm:text-xl">
              Sweethearts - TrackTribe
            </label>
            <span className="text-white text-base hidden sm:inline-block">{`${formatTime(
              currentTime
            )}/${formatTime(duration)}`}</span>
          </div>
          <div className="flex gap-8 items-center">
            <input
              className="w-full h-[7px]"
              id="audio"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={currentTime / duration || 0}
              onChange={(e) => handleProgressChange(parseFloat(e.target.value))}
            />
            <div className="flex items-center gap-4">
              <Swap
                onIconSize={"1.5rem"}
                onIconColor="#fff"
                offIconColor="#fff"
                offIconSize={"1.5rem"}
                iconOff={isMuted ? FaVolumeMute : FaVolumeUp}
                iconOn={isMuted ? FaVolumeMute : FaVolumeUp}
                default={!isMuted}
                onToggleOff={handleToggleMute}
                onToggleOn={handleToggleMute}
                className="hidden sm:flex"
              />
              <input
                type="range"
                min="0"
                max="1"
                className="hidden sm:block"
                step="0.01"
                value={volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartedMusic;
