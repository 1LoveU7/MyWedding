import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const playerRef = useRef<any>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("yt-player", {
        videoId: "E-cMdqI4ZTc",
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: "E-cMdqI4ZTc",
          controls: 0,
          mute: 0,
        },
        events: {
          onReady: (e: any) => {
            e.target.playVideo();
            setPlaying(true);
          },
        },
      });
    };
  }, []);

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (playing) {
      playerRef.current.pauseVideo();
      setPlaying(false);
    } else {
      playerRef.current.playVideo();
      setPlaying(true);
    }
  };

  return (
    <>
      <div id="yt-player" className="hidden" />
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
      {/* <button onClick={togglePlay}>▶ / ⏸</button> */}
    </>
  );
}
