import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Linkedin, Cloud, Shield, Zap } from 'lucide-react';
import { resumeData } from '../data';

export const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-accent/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-secondary/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.3em] uppercase border rounded-full border-white/10 bg-white/5 backdrop-blur-md text-accent shadow-[0_0_20px_rgba(0,242,255,0.1)]"
        >
          <Zap className="w-3 h-3" />
          {resumeData.basics.title}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8"
        >
          <h1 className="text-5xl font-black tracking-tighter text-white md:text-8xl lg:text-9xl leading-[0.9] uppercase">
            <span className="block">Aniruddha</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-secondary">Hossen</span>
          </h1>
          
          {/* Decorative floating icons */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 md:-right-12 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-accent hidden md:block"
          >
            <Cloud className="w-6 h-6" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 md:-left-12 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-secondary hidden md:block"
          >
            <Shield className="w-6 h-6" />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-12 text-base leading-relaxed text-white/50 md:text-xl font-light tracking-wide"
        >
          {resumeData.basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <button
            onClick={scrollToExperience}
            className="relative group px-10 py-5 font-bold transition-all bg-white rounded-2xl text-black hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Experience
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </span>
            <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
          
          <a
            href={resumeData.basics.links[0].url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-10 py-5 font-bold transition-all border-2 rounded-2xl border-white/10 text-white hover:bg-white/5 hover:border-white/20 backdrop-blur-sm group"
          >
            LinkedIn
            <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110 text-accent" />
          </a>
        </motion.div>
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">Scroll</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-accent to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};
