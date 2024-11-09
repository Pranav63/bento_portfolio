import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import BentoCard from './BentoCard';
import ProjectCard from './ProjectCard';
import AnimatedHero from './AnimatedHero';
import { useColorMode } from '../contexts/ColorModeContext';

const BentoGrid: React.FC = () => {
  const { colorMode } = useColorMode();
  const [isLoading, setIsLoading] = useState(true);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/images/pranav_pho.png';
    
    img.onload = () => {
      // Longer initial display time
      setTimeout(() => {
        setIsLoading(false);
        // Wait for hero animation to fully complete before showing cards
        setTimeout(() => {
          setShowCards(true);
        }, 2000); // Increased delay to match slower hero animation
      }, 2000);
    };

    img.onerror = () => {
      setIsLoading(false);
      setTimeout(() => {
        setShowCards(true);
      }, 2500);
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
    { name: "Python & SQL", level: "Expert" },
    { name: "Data Analytics", level: "Expert" },
    { name: "Generative AI", level: "Advanced" },
    { name: "Deep Learning", level: "Advanced" },
    { name: "DevOps", level: "Advanced" }
  ];

  const projects = [
    {
      title: "Production Cycle Time Prediction",
      description: "ML model to predict & optimize manufacturing cycle times using XGBoost. Achieved 85% accuracy and deployed via FastAPI.",
      link: "https://github.com/Pranav63/production_cycle_time_prediction",
      tags: ["Python", "XGBoost", "FastAPI", "Docker"],
      highlights: [
        "Reduced cycle time variations by 30%",
        "Deployed model using FastAPI & Docker",
        "Implemented real-time predictions"
      ]
    },
    {
      title: "GAN's Face Generation",
      description: "Face profile completion using Generative Adversarial Networks with advanced image synthesis.",
      link: "https://github.com/Pranav63/Generative-adverserial-Networks-Face-profile-completion-",
      tags: ["PyTorch", "GANs", "Computer Vision"],
      highlights: [
        "Implemented custom GAN architecture",
        "Achieved high-quality face completion",
        "Real-time processing capabilities"
      ]
    },
    {
      title: "RL Simulated Car Race",
      description: "Self-driving car simulation using Reinforcement Learning with dynamic environment adaptation.",
      link: "https://github.com/Pranav63/SelfDrivingCar",
      tags: ["Python", "RL", "PyTorch"],
      highlights: [
        "Custom reward function design",
        "Real-time performance optimization",
        "Dynamic obstacle avoidance"
      ]
    }
  ];
  

  const contactInfo = {
    email: "pranav2vis@gmail.com",
    github: "https://github.com/Pranav63",
    linkedin: "https://www.linkedin.com/in/pranavarora63/"
  };

return (
    <div className={`min-h-screen ${
      colorMode === 'dark' ? 'bg-[#1a2f38]' : 'bg-[#f0f4f8]'
    } text-[#e4e4e4] p-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Hero Section - Spans 2 columns */}
          <div className="md:col-span-2">
            <AnimatedHero isLoading={isLoading} />
          </div>

          {/* Contact/Social Links - Single column */}
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

          {/* Experience Section - Spans 2 columns */}
          <div className="md:col-span-2">
            <BentoCard 
              index={1} 
              delay={0.2} 
              isVisible={showCards} 
              className="h-full"
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
          </div>

          {/* Skills Section - Single column */}
          <BentoCard 
            index={2} 
            delay={0.3} 
            isVisible={showCards}
            className="h-full"
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

          {/* Projects Section - Spans full width */}
          <div className="md:col-span-3">
            <BentoCard 
              index={3} 
              delay={0.4} 
              isVisible={showCards} 
              variant="light"
            >
              <h2 className="text-xl font-bold mb-6">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </div>
);
}
export default BentoGrid;