import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3.4 seconds to let the entire cinematic sequence play out beautifully
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          // Cinematic shutter exit: collapses height upwards
          exit={{ 
            clipPath: "inset(0 0 100% 0)", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          style={{ clipPath: "inset(0 0 0% 0)" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-evoke-navy shadow-2xl overflow-hidden"
        >
          {/* Subtle background ambient pulse */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1.2 }}
            transition={{ delay: 0.8, duration: 2.5, ease: "easeOut" }}
            className="absolute z-0 w-[60vw] h-[60vw] rounded-full bg-evoke-teal blur-[120px] pointer-events-none"
          />

          {/* 1. The Falling Golden Droplet */}
          <motion.div
            initial={{ y: "-60vh", scaleY: 3, opacity: 0 }}
            animate={{ y: "-20px", scaleY: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            className="absolute w-1 h-12 bg-evoke-gold rounded-full z-20 blur-[1px]"
          />

          {/* 2. The Splash Ring */}
          <motion.div
            initial={{ scale: 0, opacity: 0, borderWidth: "8px" }}
            animate={{ scale: [0, 1.5, 3], opacity: [0, 1, 0], borderWidth: ["8px", "2px", "0px"] }}
            transition={{ delay: 0.55, duration: 1.2, ease: "easeOut" }}
            className="absolute w-24 h-24 rounded-full border-evoke-gold z-10"
          />

          {/* 3. The Cinematic Typography Unfold */}
          <div className="relative z-30 flex flex-col items-center mt-[-20px]">
            <motion.h1
              initial={{ letterSpacing: "-0.5em", opacity: 0, filter: "blur(20px)", scale: 0.5 }}
              animate={{ letterSpacing: "0.05em", opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ delay: 0.6, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-playfair text-6xl md:text-8xl lg:text-9xl text-white font-bold pl-[0.05em]"
            >
              EVOKE
            </motion.h1>
          </div>

          {/* 4. Elegant Subtext and Line Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
            className="relative z-30 mt-6 flex flex-col items-center"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 1.6, duration: 0.8, ease: "easeInOut" }}
              className="h-[2px] bg-evoke-gold mb-4" 
            />
            <p className="font-sans text-evoke-gold tracking-[0.4em] uppercase text-xs md:text-sm font-semibold">
              Hair & Skin Care
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
