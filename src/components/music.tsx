import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const unlockedRef = useRef(false);

  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  // 🔓 unlock audio (gesture thật)
  const unlockAudio = async () => {
    const audio = audioRef.current;
    if (!audio || unlockedRef.current) return;

    try {
      audio.volume = 0.8;
      await audio.play();

      unlockedRef.current = true;
      setPlaying(true);
      setReady(true);

      document.removeEventListener("pointerdown", unlockAudio);
      document.removeEventListener("touchend", unlockAudio);
    } catch (e) {
      // iOS sẽ block nếu gesture chưa hợp lệ
    }
  };

  // 🎧 play / pause từ button
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    // nếu chưa unlock → coi click là gesture
    if (!unlockedRef.current) {
      await unlockAudio();
      return;
    }

    if (audio.paused) {
      await audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    // bắt gesture toàn màn hình
    document.addEventListener("pointerdown", unlockAudio);
    document.addEventListener("touchend", unlockAudio);

    return () => {
      document.removeEventListener("pointerdown", unlockAudio);
      document.removeEventListener("touchend", unlockAudio);
    };
  }, []);

  return (
    <>
      {/* AUDIO */}
      <audio
        ref={audioRef}
        src="/music/background.mp3" // 🔁 đổi link tại đây
        preload="auto"
        playsInline
        loop
      />

      {/* OVERLAY lần đầu (tuỳ chọn, có thể bỏ) */}
      {!ready && <div className="fixed inset-0 z-40 bg-black/30 pointer-events-none" />}

      {/* PLAY / PAUSE BUTTON */}
      <button
        onPointerDown={togglePlay}
        className="
          fixed top-6 right-6 z-50
          w-12 h-12 rounded-full
          bg-white/90 backdrop-blur
          flex items-center justify-center
        "
      >
        <img src="https://assets.cinelove.me/assets/audio-6.png" className={`bg-black w-7 h-7 rounded-full ${playing ? "animate-spin-slow" : ""}`} />
      </button>
      {!ready && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/40 text-white
            text-sm
          "
        >
          Tap anywhere to enable sound
        </div>
      )}
    </>
  );
}
