import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';

export default function Hero() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '50';
    document.body.appendChild(canvas);
    
    const myConfetti = confetti.create(canvas, { resize: true, useWorker: false });
    
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 50 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      myConfetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ffffff', '#60a5fa', '#1d4ed8']
      });
      myConfetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ffffff', '#60a5fa', '#1d4ed8']
      });
    }, 250);

    return () => {
      clearInterval(interval);
      myConfetti.reset();
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
      }
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen flex flex-col overflow-hidden px-4 md:px-12 py-20 bg-cover bg-no-repeat bg-[position:25%_center] md:bg-center"
      style={{
        backgroundImage: 'url(https://i.postimg.cc/sXjy74mY/Happy-Birthday.png)',
      }}
    >
      {/* Darker overlay on mobile for text readability, subtle on desktop */}
      <div className="absolute inset-0 bg-black/40 md:bg-blue-900/10 z-0"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        className="relative z-10 flex flex-col justify-end md:justify-center items-center md:items-end text-center md:text-right h-full flex-1 w-full max-w-7xl mx-auto pb-32 md:pb-0 pt-16 md:pt-20 lg:pt-32 px-2 md:pr-12"
      >
        <h1 className="font-script text-4xl sm:text-5xl md:text-7xl text-white -rotate-2 mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          Happy 66th Birthday
        </h1>
        
        <div className="relative">
          <div className="absolute -top-6 sm:-top-8 -right-4 sm:-right-8 text-5xl md:text-7xl z-20 drop-shadow-lg -rotate-12 opacity-90 text-white">🥸</div>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[1.1] md:leading-[1.0] tracking-wider mb-4 md:mb-6 flex flex-col items-center md:items-end pt-4 w-full">
            <span className="text-3d-bubbly inline-block pb-2">PAPA</span>
            <span className="text-3d-bubbly inline-block pb-2">WILLIAM</span>
          </h2>
        </div>
        
        <h3 className="font-script text-3xl sm:text-4xl md:text-6xl text-white mt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
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
