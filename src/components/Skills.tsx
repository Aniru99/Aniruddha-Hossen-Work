import React from 'react';
import { motion } from 'motion/react';
import { Cloud, Container, Code2, Terminal, Wrench, Layers, Cpu } from 'lucide-react';
import { resumeData } from '../data';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud Platforms': return <Cloud className="w-5 h-5" />;
      case 'Containers & Orchestration': return <Container className="w-5 h-5" />;
      case 'Infrastructure as Code': return <Layers className="w-5 h-5" />;
      case 'Languages': return <Code2 className="w-5 h-5" />;
      case 'Tools': return <Wrench className="w-5 h-5" />;
      case 'Specialized': return <Terminal className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
            <Cpu className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-white md:text-5xl">Technical Arsenal</h2>
        </div>
        <div className="w-20 h-1 bg-accent rounded-full ml-16" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(resumeData.skills).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all hover:border-accent/30 hover:bg-white/[0.05]"
          >
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-white/5 text-accent group-hover:bg-accent group-hover:text-black transition-all duration-500">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-bold text-white/70 bg-white/5 border border-white/10 rounded-xl hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 cursor-default shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_15px_rgba(0,242,255,0.3)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Subtle corner glow */}
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-accent/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
