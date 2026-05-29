import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const images = [
  "https://i.postimg.cc/DwfjPbhs/Papa1.png",
  "https://i.postimg.cc/CxMPsf0k/Papa2.png",
  "https://i.postimg.cc/YC2nzm76/Papa3.png",
  "https://i.postimg.cc/0y5W0Jvp/Papa4.png",
  "https://i.postimg.cc/MZbm3KdD/Papa5.jpg",
  "https://i.postimg.cc/L84C3ZSy/Papa6.jpg"
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedImage]);

  return (
    <>
      <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="font-script text-5xl md:text-6xl text-white mb-4 drop-shadow-md">A Lifetime of Memories</h3>
          <div className="w-24 h-1 bg-white/40 rounded-full mx-auto"></div>
        </motion.div>

        {/* Polaroid Scrapbook Gallery */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 pt-10">
          {[
            { src: images[0], caption: "Treasured Moments", rotation: "-rotate-3" },
            { src: images[1], caption: "Always Smiling", rotation: "rotate-2" },
            { src: images[2], caption: "Family First", rotation: "-rotate-6" },
            { src: images[3], caption: "Golden Years", rotation: "rotate-3" },
            { src: images[4], caption: "Dapper Dad", rotation: "-rotate-2" },
            { src: images[5], caption: "Unforgettable Memories", rotation: "rotate-6" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', bounce: 0.4 }}
              className={`relative bg-[#fdfdfd] p-3 md:p-4 pb-16 md:pb-20 shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] cursor-pointer group transition-all duration-300 hover:scale-105 hover:z-30 hover:-rotate-1 ${item.rotation} max-w-[280px] md:max-w-[320px] w-full`}
              onClick={() => setSelectedImage(item.src)}
            >
              {/* Scotch Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 md:w-24 h-6 md:h-8 bg-white/60 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-white/50 -rotate-2 z-20"></div>
              
              <div className="w-full h-[280px] md:h-[320px] overflow-hidden bg-gray-100 shadow-[inset_0_1px_4px_rgba(0,0,0,0.2)] relative">
                <img src={item.src} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                {/* Subtle vintage overlay */}
                <div className="absolute inset-0 bg-orange-800/10 mix-blend-overlay pointer-events-none transition-opacity group-hover:opacity-0"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-blue-text/90 p-4 md:p-8 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 text-white hover:text-brand-blue-light transition-colors z-50 bg-white/10 p-2 rounded-full border border-white/20"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Gallery Fullscreen"
              className="max-w-full max-h-[90vh] object-contain shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-2xl border-4 border-white"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
