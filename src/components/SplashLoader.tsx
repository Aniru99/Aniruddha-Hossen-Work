import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const SplashLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="mb-8 text-6xl font-bold tracking-tighter text-white"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        AH
      </motion.div>
      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      <motion.div
        className="mt-4 text-xs tracking-widest uppercase text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Initializing Experience
      </motion.div>
    </motion.div>
  );
};
