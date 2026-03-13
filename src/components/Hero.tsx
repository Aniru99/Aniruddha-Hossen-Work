import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Linkedin } from 'lucide-react';
import { SiDocker, SiKubernetes, SiTerraform, SiGooglecloud, SiRedhatopenshift, SiLinux, SiJenkins, SiPython, SiGo, SiGit, SiGooglegemini } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { IconType } from 'react-icons';
import { resumeData } from '../data';

interface TechItem {
  name: string;
  Icon: IconType;
  color: string;
}

const techStack: TechItem[] = [
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  { name: 'Azure', Icon: VscAzure, color: '#0089D6' },
  { name: 'OpenShift RedHat', Icon: SiRedhatopenshift, color: '#EE0000' },
  { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
  { name: 'Jenkins', Icon: SiJenkins, color: '#D24939' },
  { name: 'Terraform', Icon: SiTerraform, color: '#7B42BC' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'Go', Icon: SiGo, color: '#00ADD8' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'GenAI', Icon: SiGooglegemini, color: '#8E75FF' },
];

export const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase border rounded-full border-white/10 bg-white/5 backdrop-blur-md text-accent"
        >
          <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
          {resumeData.basics.title}
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Aniruddha <span className="text-white/40">Hossen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-12 text-sm leading-relaxed text-white/50 md:text-base font-light"
        >
          Lead Software Engineer specializing in <span className="text-white/90">Cloud Infrastructure</span>, 
          <span className="text-white/90"> Kubernetes, Networking</span>, and <span className="text-white/90">Multi-cloud Platform Engineering</span>. 
          Driving engineering productivity through AI-assisted development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-6 sm:flex-row mb-24"
        >
          <button
            onClick={scrollToExperience}
            className="px-10 py-4 font-semibold transition-all bg-white rounded-full text-black hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            View Experience
          </button>
          <a
            href={resumeData.basics.links[0].url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-10 py-4 font-semibold transition-all border rounded-full border-white/10 text-white hover:bg-white/5 backdrop-blur-sm group"
          >
            LinkedIn
            <Linkedin className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        {/* Enhanced Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative max-w-4xl mx-auto pt-14 pb-10 px-6 md:p-12 rounded-[2rem] border border-white/5 bg-white/[0.01] backdrop-blur-sm group hover:border-white/10 transition-colors duration-500"
        >
          {/* Section Label */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 md:px-6 py-1.5 bg-[#020617] border border-white/10 rounded-full shadow-xl whitespace-nowrap">
            <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-white/40 group-hover:text-accent transition-colors duration-500">
              Core Infrastructure Stack
            </span>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-12">
            {techStack.map((tech) => (
              <div key={tech.name} className="group relative flex flex-col items-center gap-3">
                <div 
                  className="w-7 h-7 md:w-9 md:h-9 transition-all duration-500 grayscale-0 opacity-100 md:grayscale md:opacity-60 md:group-hover:grayscale-0 md:group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
                  style={{ color: tech.color }}
                >
                  <tech.Icon size="100%" />
                </div>
                {/* Always visible but subtle label */}
                <span className="text-[9px] font-bold tracking-widest uppercase text-white/60 md:text-white/20 md:group-hover:text-white/60 transition-all duration-300 text-center">
                  {tech.name}
                </span>
                
                {/* Glow Effect on Hover */}
                <div 
                  className="absolute inset-0 -z-10 blur-2xl opacity-20 md:opacity-0 md:group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: tech.color }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
