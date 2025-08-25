import React, { useRef, useState } from "react";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Botão fixo no canto inferior direito */}
      <IconButton
        onClick={togglePlay}
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#1976d2",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          "&:hover": {
            backgroundColor: "#115293",
          },
          zIndex: 1000,
        }}
      >
        {isPlaying ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
      </IconButton>

      {/* Elemento de áudio escondido */}
      <audio ref={audioRef} src="/sworn.mp3" loop />
    </>
  );
};

export default MusicPlayer;
