import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import AnimatedHero from './AnimatedHero';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay: number;
  index: number;
  isVisible: boolean;
  variant?: 'light' | 'dark' | 'neutral';
}

const BentoCard: React.FC<BentoCardProps> = ({ 
  children, 
  className = '', 
  delay,
  index,
  isVisible,
  variant = 'neutral'
}) => {
  const getVariantStyles = () => {
    switch(variant) {
      case 'light':
        return 'bg-[#f5f5f5] text-[#1c1c1c] border-[#e0e0e0] hover:border-[#cccccc]';
      case 'dark':
        return 'bg-[#1c1c1c] text-[#f5f5f5] border-[#333333] hover:border-[#444444]';
      default:
        return 'bg-[#2d2d2d] text-[#f5f5f5] border-[#404040] hover:border-[#505050]';
    }
  };

  const getAnimationPath = () => {
    switch(index % 4) {
      case 0: return { x: -20, y: -20 };
      case 1: return { x: 20, y: -20 };
      case 2: return { x: -20, y: 20 };
      case 3: return { x: 20, y: 20 };
      default: return { x: 0, y: 20 };
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ 
            opacity: 0,
            ...getAnimationPath(),
            scale: 0.95
          }}
          animate={{ 
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1
          }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ 
            duration: 0.4,
            delay: delay,
            ease: [0.23, 1, 0.32, 1]
          }}
          className={`rounded-2xl p-6 
                     border shadow-lg hover:shadow-xl 
                     transition-all duration-300 
                     ${getVariantStyles()}
                     ${className}`}
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
    const img = new Image();
    img.src = '/images/pranav_pho.png';
    
    img.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setShowCards(true);
        }, 600);
      }, 1000);
    };
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

  const contactInfo = {
    email: "pranav2vis@gmail.com",
    github: "https://github.com/Pranav63",
    linkedin: "https://www.linkedin.com/in/pranavarora63/"
  };

  return (
    <div className="min-h-screen bg-[#212121] text-[#e4e4e4] p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AnimatedHero isLoading={isLoading} />

          {/* Contact/Social Links */}
          <BentoCard 
            index={0} 
            delay={0.1} 
            isVisible={showCards}
            variant="light"
          >
            <h2 className="text-xl font-bold mb-6">Connect</h2>
            <div className="flex flex-col space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 hover:text-[#1c1c1c] transition-colors p-2 rounded-lg hover:bg-[#e0e0e0]"
              >
                <FaEnvelope className="text-xl" />
                <span>Email Me</span>
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-[#1c1c1c] transition-colors p-2 rounded-lg hover:bg-[#e0e0e0]"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-[#1c1c1c] transition-colors p-2 rounded-lg hover:bg-[#e0e0e0]"
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>
            </div>
          </BentoCard>

          {/* Experience Section */}
          <BentoCard 
            index={1} 
            delay={0.2} 
            isVisible={showCards} 
            className="md:col-span-2"
            variant="dark"
          >
            <h2 className="text-xl font-bold mb-4">Experience</h2>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-[#404040] pl-4">
                  <h3 className="font-bold">{exp.title}</h3>
                  <p className="text-sm text-[#b4b4b4]">{exp.company} • {exp.period}</p>
                  <p className="mt-2 text-[#e4e4e4]">{exp.description}</p>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Skills Section */}
          <BentoCard 
            index={2} 
            delay={0.3} 
            isVisible={showCards}
            variant="neutral"
          >
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{skill.name}</span>
                  <span className="text-sm text-[#b4b4b4]">{skill.level}</span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Projects Section */}
          <BentoCard 
            index={3} 
            delay={0.4} 
            isVisible={showCards} 
            className="md:col-span-3"
            variant="light"
          >
            <h2 className="text-xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-[#2d2d2d] hover:bg-[#333333]
                           transition-colors border border-[#404040] hover:border-[#505050]
                           text-white"
                >
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="text-sm text-[#b4b4b4] mt-2">{project.description}</p>
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