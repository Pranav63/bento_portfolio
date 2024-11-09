import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedHero from './AnimatedHero';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index: number;
  isVisible: boolean;
}

const BentoCard: React.FC<BentoCardProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  index,
  isVisible 
}) => {
  const getInitialPosition = () => {
    const positions = [
      { x: -100, y: -50 }, // top-left
      { x: 100, y: -50 },  // top-right
      { x: -100, y: 50 },  // bottom-left
      { x: 100, y: 50 }    // bottom-right
    ];
    return positions[index % positions.length];
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ 
            opacity: 0,
            ...getInitialPosition()
          }}
          animate={{ 
            opacity: 1,
            x: 0,
            y: 0
          }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.8,
            delay: delay,
            ease: "easeOut"
          }}
          className={`backdrop-blur-lg bg-white/10 rounded-2xl p-6 shadow-2xl 
                     border border-white/20 hover:border-purple-500/50 
                     transition-all duration-300 ${className}`}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const BentoGrid: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    // Initial loading sequence
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowCards(true);
      }, 800);
    }, 2000);
  }, []);

  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "HPE",
      period: "Aug 2024 - Present",
      description: "Leading AI initiatives and developing advanced machine learning models."
    },
    {
      title: "Data Scientist",
      company: "Micron",
      period: "Jan 2022 - Aug 2024",
      description: "Developed machine learning models for semiconductor manufacturing optimization."
    },
    {
      title: "Junior Data Scientist",
      company: "Dentsu",
      period: "2020 - 2022",
      description: "Created data analytics solutions and reporting dashboards for marketing campaigns."
    }
  ];

  const skills = [
    { name: "Machine Learning", level: "Expert" },
    { name: "Python", level: "Expert" },
    { name: "TensorFlow", level: "Advanced" },
    { name: "PyTorch", level: "Advanced" },
    { name: "Data Analytics", level: "Expert" },
    { name: "Deep Learning", level: "Advanced" }
  ];

  const projects = [
    {
      title: "GAN's Face Generation",
      description: "Face profile completion using Generative Adversarial Networks.",
      link: "https://github.com/Pranav63/Generative-adverserial-Networks-Face-profile-completion-"
    },
    {
      title: "RL Simulated Car Race",
      description: "Self-driving car simulation using Reinforcement Learning.",
      link: "https://github.com/Pranav63/SelfDrivingCar"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1b2e] to-[#2d2b55] text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Hero Section */}
          <AnimatedHero isLoading={isLoading} />

          {/* Quick Links */}
          <BentoCard index={0} delay={0.2} isVisible={showCards} className="flex flex-col gap-4">
            <h2 className="text-xl font-bold mb-4">Connect</h2>
            <a
              href="https://github.com/Pranav63"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pranavarora63/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:pranav2vis@gmail.com"
              className="flex items-center gap-2 hover:text-purple-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </BentoCard>

          {/* Experience Section */}
          <BentoCard index={1} delay={0.3} isVisible={showCards} className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Experience</h2>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-purple-500/50 pl-4">
                  <h3 className="font-bold text-purple-200">{exp.title}</h3>
                  <p className="text-sm text-purple-100/80">{exp.company} • {exp.period}</p>
                  <p className="mt-2 text-white/80">{exp.description}</p>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Skills Section */}
          <BentoCard index={2} delay={0.4} isVisible={showCards}>
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-purple-100">{skill.name}</span>
                  <span className="text-sm text-purple-300">{skill.level}</span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Projects Section */}
          <BentoCard index={3} delay={0.5} isVisible={showCards} className="md:col-span-3">
            <h2 className="text-xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-white/5 hover:bg-purple-500/20 
                           transition-colors border border-white/10 hover:border-purple-500/50"
                >
                  <h3 className="font-bold text-purple-200">{project.title}</h3>
                  <p className="text-sm text-white/70 mt-2">{project.description}</p>
                </a>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;