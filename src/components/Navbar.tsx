import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
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
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'py-4 bg-black/50 backdrop-blur-xl border-b border-white/10' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter text-white"
        >
          AH.
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 pl-8 border-l border-white/10 h-5">
            <a href={resumeData.basics.links[0].url} target="_blank" rel="noreferrer" className="text-white/40 hover:text-accent transition-colors flex items-center">
              <Linkedin className="w-5 h-5" />
            </a>
            <div className="relative group flex items-center">
              <button className="text-white/40 hover:text-accent transition-colors cursor-pointer flex items-center">
                <Mail className="w-5 h-5" />
              </button>
              <div className="absolute top-full right-0 mt-2 p-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-64 z-50">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Direct Contact</p>
                <p className="text-sm font-bold text-white mb-1">{resumeData.basics.email}</p>
                <p className="text-sm text-accent">{resumeData.basics.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 pt-6 border-t border-white/10">
                <a href={resumeData.basics.links[0].url} target="_blank" rel="noreferrer" className="text-white/60">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={`mailto:${resumeData.basics.email}`} className="text-white/60">
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
