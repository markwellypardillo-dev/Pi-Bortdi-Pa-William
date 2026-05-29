import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Message() {
  const [time, setTime] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const birthDate = new Date(1960, 4, 29); // May 29, 1960

    const updateCounter = () => {
      const now = new Date();
      let years = now.getFullYear() - birthDate.getFullYear();
      let months = now.getMonth() - birthDate.getMonth();
      let days = now.getDate() - birthDate.getDate();
      let hours = now.getHours() - birthDate.getHours();
      let minutes = now.getMinutes() - birthDate.getMinutes();
      let seconds = now.getSeconds() - birthDate.getSeconds();

      if (seconds < 0) { minutes--; seconds += 60; }
      if (minutes < 0) { hours--; minutes += 60; }
      if (hours < 0) { days--; hours += 24; }
      if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) { years--; months += 12; }

      setTime({ years, months, days, hours, minutes, seconds });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10 bg-white/10 backdrop-blur-lg border border-white/30 rounded-[3rem] p-8 md:p-16 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white text-6xl block mb-6 font-script">“</span>
          <p className="font-script text-3xl md:text-4xl leading-relaxed text-white drop-shadow-md">
            Sixty-six years of wisdom, strength, and boundless love. Thank you for being the steadfast anchor of our family, guiding us with patience and inspiring us with your life's journey. May this coming year bring you health, abundant joy, and all the peace you so deeply deserve.
          </p>
          <p className="mt-8 mb-16 text-brand-blue-text font-script font-bold text-4xl drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            Love, Mark
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-12 border-t border-white/30"
        >
          <p className="font-chunky tracking-widest uppercase text-white/90 mb-8 text-xl drop-shadow-sm">Time Lived</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white shadow-lg text-brand-blue-dark transform hover:-translate-y-1 transition-transform">
              <span className="text-2xl sm:text-4xl font-chunky tabular-nums">{time.years}</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase text-brand-blue-light mt-1">Years</span>
            </div>
            <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white shadow-lg text-brand-blue-dark transform hover:-translate-y-1 transition-transform">
              <span className="text-2xl sm:text-4xl font-chunky tabular-nums">{time.months}</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase text-brand-blue-light mt-1">Months</span>
            </div>
            <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white shadow-lg text-brand-blue-dark transform hover:-translate-y-1 transition-transform">
              <span className="text-2xl sm:text-4xl font-chunky tabular-nums">{time.days}</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase text-brand-blue-light mt-1">Days</span>
            </div>
            <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white shadow-lg text-brand-blue-dark transform hover:-translate-y-1 transition-transform">
              <span className="text-2xl sm:text-4xl font-chunky tabular-nums">{time.hours}</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase text-brand-blue-light mt-1">Hours</span>
            </div>
            <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white shadow-lg text-brand-blue-dark transform hover:-translate-y-1 transition-transform">
              <span className="text-2xl sm:text-4xl font-chunky tabular-nums">{time.minutes}</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase text-brand-blue-light mt-1">Mins</span>
            </div>
            <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white shadow-lg text-brand-blue-dark transform hover:-translate-y-1 transition-transform">
              <span className="text-2xl sm:text-4xl font-chunky tabular-nums">{time.seconds}</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase text-brand-blue-light mt-1">Secs</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
