import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { resumeData } from '../data';

export const Education: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl mb-4 flex items-center gap-3">
              <GraduationCap className="w-8 h-8" />
              Education
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full" />
          </motion.div>

          <div className="space-y-8">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white" />
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-white/60 mb-2">{edu.institution}</p>
                <div className="flex justify-between text-sm text-white/40 mb-3">
                  <span>{edu.dates}</span>
                  {edu.score && <span className="font-bold text-white/80">{edu.score}</span>}
                </div>

                {/* @ts-ignore */}
                {edu.project && (
                  <div className="mt-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      {/* @ts-ignore */}
                      <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Featured Project: {edu.project.name}</span>
                      {/* @ts-ignore */}
                      <a href={edu.project.url} target="_blank" rel="noreferrer" className="text-white/40 hover:text-accent transition-colors">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    {/* @ts-ignore */}
                    <p className="text-[10px] text-white/50 leading-tight mb-1">{edu.project.description}</p>
                    {/* @ts-ignore */}
                    <p className="text-[9px] font-mono text-accent/60">{edu.project.skills}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
