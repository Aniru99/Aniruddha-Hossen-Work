import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Linkedin } from 'lucide-react';
import { resumeData } from '../data';

export const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 overflow-hidden">
      <div className="z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 py-1 mb-6 text-xs font-medium tracking-widest uppercase border rounded-full border-white/10 bg-white/5 backdrop-blur-sm text-white/60"
        >
          {resumeData.basics.title}
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 text-2xl font-bold tracking-tight text-white md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-secondary"
        >
          Aniruddha Hossen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-10 text-xs leading-relaxed text-white/60 md:text-sm"
        >
          {resumeData.basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={scrollToExperience}
            className="flex items-center gap-2 px-8 py-4 font-medium transition-all bg-white rounded-full text-black hover:bg-white/90 group"
          >
            View Experience
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>
          <a
            href={resumeData.basics.links[0].url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 font-medium transition-all border rounded-full border-white/10 text-white hover:bg-white/5 backdrop-blur-sm group"
          >
            Connect on LinkedIn
            <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};
