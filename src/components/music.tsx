import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const playerRef = useRef<any>(null);
  const startedRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("yt-player", {
        videoId: "E-cMdqI4ZTc",
        playerVars: {
          autoplay: 1, // ❗ không autoplay
          loop: 1,
          playlist: "E-cMdqI4ZTc",
          controls: 0,
          modestbranding: 1,
        },
        events: {
          onStateChange: (e: any) => {
            if (e.data === (window as any).YT.PlayerState.PLAYING) {
              setPlaying(true);
            }
            if (e.data === (window as any).YT.PlayerState.PAUSED) {
              setPlaying(false);
            }
          },
        },
      });
    };

    const startOnGesture = () => {
      if (startedRef.current) return;
      if (!playerRef.current) return;

      playerRef.current.playVideo();
      startedRef.current = true;
      setPlaying(true);

      // cleanup
      window.removeEventListener("scroll", startOnGesture);
      window.removeEventListener("click", startOnGesture);
      window.removeEventListener("touchstart", startOnGesture);
      window.removeEventListener("keydown", startOnGesture);
    };

    // BẮT USER GESTURE
    window.addEventListener("scroll", startOnGesture, { passive: true });
    window.addEventListener("click", startOnGesture);
    window.addEventListener("touchstart", startOnGesture);
    window.addEventListener("keydown", startOnGesture);

    return () => {
      window.removeEventListener("scroll", startOnGesture);
      window.removeEventListener("click", startOnGesture);
      window.removeEventListener("touchstart", startOnGesture);
      window.removeEventListener("keydown", startOnGesture);
    };
  }, []);

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (playing) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <>
      {/* YouTube player ẩn */}
      <div id="yt-player" className="hidden" />

      {/* Nút điều khiển */}
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
    </>
  );
}
