import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, TrendingUp } from 'lucide-react';
import { resumeData } from '../data';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white md:text-5xl mb-4">Professional Experience</h2>
        <div className="w-20 h-1 bg-white rounded-full" />
      </motion.div>

      <div className="space-y-6">
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                expandedIndex === index
                  ? 'bg-white/10 border-white/20'
                  : 'bg-white/5 border-white/5 hover:border-white/10'
              } backdrop-blur-md`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-4 h-4 text-accent" />
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  </div>
                  <p className="text-white/60 font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-white/40">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-accent/60" />
                    {exp.dates}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-accent/60" />
                    {exp.location}
                  </div>
                  {expandedIndex === index ? <ChevronUp className="w-5 h-5 text-accent" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-6 border-t border-white/10">
                      {exp.metrics && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {exp.metrics.map((metric, mIndex) => (
                            <div
                              key={mIndex}
                              className="flex items-center gap-2 px-3 py-1 text-xs font-bold text-black bg-accent rounded-full"
                            >
                              <TrendingUp className="w-3 h-3" />
                              {metric}
                            </div>
                          ))}
                        </div>
                      )}
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex gap-3 text-white/60 leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
