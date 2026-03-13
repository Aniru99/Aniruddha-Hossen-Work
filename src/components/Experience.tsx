import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, TrendingUp } from 'lucide-react';
import { resumeData } from '../data';

export const Experience: React.FC = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>(resumeData.experience.map((_, i) => i));

  const toggleExpand = (index: number) => {
    setExpandedIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white md:text-5xl mb-4">Professional Experience</h2>
        <div className="w-20 h-1 bg-accent rounded-full" />
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
              onClick={() => toggleExpand(index)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                expandedIndices.includes(index)
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
                  <div className="flex items-center gap-2">
                    <p className="text-white/60 font-medium">{exp.company}</p>
                    {exp.project && (
                      <>
                        <span className="text-white/20">|</span>
                        <span className="text-accent/80 text-sm font-bold tracking-wider uppercase">Project: {exp.project}</span>
                      </>
                    )}
                  </div>
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
                  {expandedIndices.includes(index) ? <ChevronUp className="w-5 h-5 text-accent" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              <AnimatePresence>
                {expandedIndices.includes(index) && (
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
                            <HighlightText text={bullet} />
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

const HighlightText: React.FC<{ text: string }> = ({ text }) => {
  const keywords = [
    'Kubernetes', 'K8s', 'OpenShift', 'ROSA', 'Docker',
    'AWS', 'Azure', 'GCP', 'IBM MCSP', 'multi-cloud',
    'Terraform', 'Velero', 'Ansible',
    'Go', 'Python', 'Bash', 'Go-based', 'Python-based',
    'Networking', 'BCDR', 'disaster recovery', 'backup', 'restore',
    'AI-assisted', 'IBM BOB', 'GenAI',
    'SLA', 'high availability', 'reliability', 'SLA-driven',
    'controllers', 'add-on', 'reconciliation', 'lifecycle management',
    'production reliability', 'root-cause analysis',
    'migration', 'automation', 'provisioning',
    'MySQL', 'PostgreSQL', 'CosmosDB', 'data integrity',
    'ingress/egress', 'connectivity',
    'AKS', 'EKS', 'resource utilization', 'scalability',
    'containerized', 'optimized', 'Dockerfiles', 'CI/CD',
    'PEP8'
  ];

  // Sort keywords by length descending to avoid partial matches
  const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
  
  // Add percentage pattern to the regex
  const regex = new RegExp(`(${sortedKeywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')}|\\d+%)`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) => 
        regex.test(part) ? (
          <span key={i} className="text-white/90">{part}</span>
        ) : (
          part
        )
      )}
    </span>
  );
};
