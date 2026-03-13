import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Award, Zap, ShieldCheck, Cpu, CheckCircle, ExternalLink } from 'lucide-react';
import { resumeData } from '../data';

export const Achievements: React.FC = () => {
  const getIcon = (type: string, className?: string) => {
    switch (type) {
      case 'award': return <Trophy className={className || "w-8 h-8"} />;
      case 'metric': return <Zap className={className || "w-8 h-8"} />;
      case 'specialist': return <ShieldCheck className={className || "w-8 h-8"} />;
      default: return <Star className={className || "w-8 h-8"} />;
    }
  };

  // Custom data for the visual style requested
  const visualAchievements = [
    {
      title: "Bravo individual award 2026 by Persistent Systems",
      context: "For unwavering dedication and delivering quality solutions to mcsp networking team on complex requirements/issues.",
      type: "award",
      color: "from-[#004d4d] to-[#001a1a]",
      accent: "text-[#00f2ff]",
      bgIcon: <Star className="absolute -right-4 -top-4 w-32 h-32 text-white/5 rotate-12" />
    },
    {
      title: "Persistent Top Talent Award – 2024",
      context: "Recognized as top talent within the organization for exceptional contributions and technical leadership.",
      type: "award",
      color: "from-[#4d3300] to-[#1a1100]",
      accent: "text-[#ffcc00]",
      bgIcon: <Trophy className="absolute -right-4 -top-4 w-32 h-32 text-white/5 rotate-12" />
    },
    {
      title: "Cloud Infrastructure Specialist",
      context: "Certified in AWS (CLF-C02), Azure (AZ-104, AZ-900, AI-900), and Google Cloud (ACE) with 3.5+ years of multi-cloud experience.",
      type: "specialist",
      color: "from-[#00264d] to-[#000d1a]",
      accent: "text-[#0080ff]",
      bgIcon: <ShieldCheck className="absolute -right-4 -top-4 w-32 h-32 text-white/5 rotate-12" />
    }
  ];

  return (
    <section id="impact" className="py-24 px-6 bg-[#030303]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white md:text-4xl mb-4">Impact and Achievements</h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {visualAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden p-8 rounded-[2rem] border border-white/10 bg-gradient-to-br ${achievement.color} flex flex-col min-h-[320px]`}
            >
              {achievement.bgIcon}
              <div className={`mb-8 ${achievement.accent}`}>
                {getIcon(achievement.type)}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                {achievement.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mt-auto">
                {achievement.context}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Pill Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-accent/30 bg-accent/5 backdrop-blur-sm mb-12"
        >
          <Cpu className="w-5 h-5 text-accent" />
          <span className="text-sm font-bold text-white uppercase tracking-[0.2em]">Certifications</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumeData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-4 rounded-xl border border-white/5 bg-white/5 flex flex-col gap-3 hover:bg-white/10 transition-all group"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent/40 group-hover:text-accent transition-colors shrink-0" />
                <span className="text-white/80 text-sm font-medium">{cert.name}</span>
              </div>
              <a 
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-bold text-accent/60 hover:text-accent uppercase tracking-widest flex items-center gap-1 transition-colors ml-8"
              >
                See Credential
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
