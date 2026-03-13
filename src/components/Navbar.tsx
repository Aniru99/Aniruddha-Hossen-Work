import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { resumeData } from '../data';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Impact', href: '#impact' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group cursor-pointer"
        >
          <div className="text-2xl font-black tracking-tighter text-white flex items-center gap-1">
            <span className="text-accent">A</span>H
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
          </div>
          <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
        </motion.div>

        {/* Desktop Nav - Pill Design */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`hidden md:flex items-center gap-1 p-1 rounded-full border border-white/10 transition-all duration-500 ${
            scrolled ? 'bg-black/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'bg-white/5 backdrop-blur-md'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href={resumeData.basics.links[0].url} 
            target="_blank" 
            rel="noreferrer" 
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/50 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          
          <div className="relative group">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-accent text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all">
              Contact
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="absolute top-full right-0 mt-4 p-6 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-72 shadow-2xl z-50">
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-1">Email Address</p>
                  <a href={`mailto:${resumeData.basics.email}`} className="text-sm font-bold text-white hover:text-accent transition-colors">{resumeData.basics.email}</a>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-1">Phone Number</p>
                  <p className="text-sm font-bold text-white">{resumeData.basics.phone}</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-[10px] text-accent uppercase tracking-[0.2em] font-bold">Available for Cloud Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black/98 backdrop-blur-3xl border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="p-8 flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black text-white/40 hover:text-accent transition-colors uppercase tracking-tighter"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex gap-4 pt-8 border-t border-white/10">
                <a href={resumeData.basics.links[0].url} target="_blank" rel="noreferrer" className="flex-1 py-4 bg-white/5 rounded-2xl flex items-center justify-center text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={`mailto:${resumeData.basics.email}`} className="flex-1 py-4 bg-accent rounded-2xl flex items-center justify-center text-black">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
