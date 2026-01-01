import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.8;
    audio.loop = true;

    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        // Autoplay bị chặn (iOS / Chrome mobile)
        setPlaying(false);
      });
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      await audio.play();
      setPlaying(true);
    }
  };

  return (
    <div className="fixed top">
      {/* AUDIO */}
      <audio ref={audioRef} src="https://assets.cinelove.me/mp3/6314d887-8f65-408f-b870-a2dea3dc0ce8.mp3" loop preload="auto" />

      {/* BUTTON */}
      <button
        onClick={togglePlay}
        className="
          fixed top-6 right-6 z-50
          w-12 h-12 rounded-full
          bg-white/90 backdrop-blur
          shadow-lg
          flex items-center justify-center
          hover:scale-105 transition
          text-black
        "
      >
        <img src="https://assets.cinelove.me/assets/audio-6.png" className={`bg-black rounded-full w-7 h-7 ${playing ? "animate-spin-slow" : ""}`} />
      </button>
    </div>
  );
}
