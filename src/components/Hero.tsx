import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';

export default function Hero() {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ffffff', '#60a5fa', '#1d4ed8']
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ffffff', '#60a5fa', '#1d4ed8']
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex flex-col overflow-hidden px-4 md:px-12 py-20"
      style={{
        backgroundImage: 'url(https://i.postimg.cc/sXjy74mY/Happy-Birthday.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-blue-900/10 z-0"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        className="relative z-10 flex flex-col justify-center items-end text-right h-full flex-1 w-full max-w-7xl mx-auto pt-20 lg:pt-32 pr-2 md:pr-12"
      >
        <h1 className="font-script text-5xl md:text-7xl text-white -rotate-2 mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          Happy 66th Birthday
        </h1>
        
        <div className="relative">
          <div className="absolute -top-6 -right-6 text-6xl z-20 drop-shadow-lg -rotate-12 opacity-90 text-white">🥸</div>
          <h2 className="text-3d-bubbly text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-wider mb-6 flex flex-col items-end pt-4">
            <span>PAPA</span>
            <span>WILLIAM</span>
          </h2>
        </div>
        
        <h3 className="font-script text-4xl md:text-6xl text-white mt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          You are our hero!
        </h3>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="animate-bounce w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
