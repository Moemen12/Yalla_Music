import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const Player: React.FC = () => {
  return (
    <AudioPlayer
      className="!bg-main-back !shadow-none play-audio sm:!px-12"
      src="/assets/musics/sweethearts.mp3"
      onPlay={(e) => console.log("onPlay")}
      showFilledVolume
    />
  );
};

export default Player;
