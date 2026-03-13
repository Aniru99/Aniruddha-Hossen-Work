import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { SplashLoader } from './components/SplashLoader';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { resumeData } from './data';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-white selection:text-black">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashLoader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <div key="content" className="relative">
            <AnimatedBackground />
            <Navbar />
            <main>
              <Hero />
              
              <div id="experience">
                <Experience />
              </div>

              <div id="skills">
                <Skills />
              </div>

              <div id="impact">
                <Achievements />
              </div>

              <div id="education">
                <Education />
              </div>
            </main>

            <footer className="py-20 px-6 border-t border-white/5 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">Let's build the future of cloud.</h2>
                <div className="flex flex-wrap justify-center gap-8 text-white/40">
                  <a href={`mailto:${resumeData.basics.email}`} className="hover:text-white transition-colors">{resumeData.basics.email}</a>
                  <span>{resumeData.basics.phone}</span>
                  <span>{resumeData.basics.location}</span>
                </div>
                <p className="mt-12 text-xs text-white/20 uppercase tracking-widest">
                  © {new Date().getFullYear()} {resumeData.basics.name} • Designed for Impact
                </p>
              </div>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
