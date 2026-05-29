import { useState, useRef, useEffect } from 'react';
import { Music } from 'lucide-react';
import { motion } from 'motion/react';
import birthdayAudio from '../assets/birthday.mp3';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.error("Audio playback error:", error);
              setIsPlaying(false);
            });
        }
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src={birthdayAudio} type="audio/mpeg" />
        <source src="https://upload.wikimedia.org/wikipedia/commons/transcoded/3/39/Happy_Birthday_To_You_-_piano_version.ogg/Happy_Birthday_To_You_-_piano_version.ogg.mp3" type="audio/mpeg" />
      </audio>
      
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={togglePlay}
        className={`fixed bottom-6 right-6 z-[9999] cursor-pointer flex items-center gap-3 px-4 py-3 rounded-full backdrop-blur-md shadow-xl transition-all duration-300 pointer-events-auto ${
          isPlaying 
            ? 'bg-white text-brand-blue-dark shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:bg-gray-100' 
            : 'bg-white/20 border border-white/40 text-white hover:bg-white/40'
        }`}
      >
        {isPlaying ? (
          <>
            <div className="flex gap-[3px] items-end h-4 max-w-[16px] w-full justify-center">
              <motion.span animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-[#4ea5ff] block rounded-full"></motion.span>
              <motion.span animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1 bg-[#1254a8] block rounded-full"></motion.span>
              <motion.span animate={{ height: [4, 10, 4] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-[#1e6ed5] block rounded-full"></motion.span>
            </div>
            <span className="text-sm font-bold font-sans pr-1">Playing</span>
          </>
        ) : (
          <>
            <Music size={18} strokeWidth={2.5} />
            <span className="text-sm font-bold font-sans pr-1">Play Music</span>
          </>
        )}
      </motion.button>
    </>
  );
}
