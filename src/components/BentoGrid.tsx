import React from 'react';
import { motion } from 'framer-motion';

const BentoCard = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.div>
);

const BentoGrid = () => {
  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "HPE",
      period: "Aug 2024 - Present",
      description: "Leading AI initiatives and developing advanced machine learning models."
    },
    // ... other experiences
  ];

  const skills = [
    { name: "Machine Learning", level: "Expert" },
    { name: "Python", level: "Expert" },
    { name: "TensorFlow", level: "Advanced" },
    // ... other skills
  ];

  const projects = [
    {
      title: "GAN's Face Generation",
      description: "Face profile completion using Generative Adversarial Networks.",
      link: "https://github.com/Pranav63/Generative-adverserial-Networks-Face-profile-completion-"
    },
    // ... other projects
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
      {/* Profile Card - Spans 2 columns */}
      <BentoCard className="md:col-span-2 bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
        <div className="flex items-center gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img
              src="/images/pranav_pho.png"
              alt="Pranav Arora"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Pranav Arora</h1>
            <p className="text-lg">Data Scientist | AI Enthusiast | GenAI Engineer</p>
          </div>
        </div>
      </BentoCard>

      {/* Quick Links */}
      <BentoCard className="flex flex-col gap-4" delay={0.1}>
        <h2 className="text-xl font-bold">Connect</h2>
        <a
          href="https://github.com/Pranav63"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-purple-600 transition-colors"
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
          className="flex items-center gap-2 hover:text-purple-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          LinkedIn
        </a>
        <a
          href="mailto:pranav2vis@gmail.com"
          className="flex items-center gap-2 hover:text-purple-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email
        </a>
      </BentoCard>

      {/* Experience Card */}
      <BentoCard className="md:col-span-2" delay={0.2}>
        <h2 className="text-xl font-bold mb-4">Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold">{exp.title}</h3>
              <p className="text-sm text-gray-600">{exp.company} • {exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </BentoCard>

      {/* Skills Card */}
      <BentoCard delay={0.3}>
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <div className="space-y-3">
          {skills.map((skill, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>{skill.name}</span>
              <span className="text-sm text-purple-600">{skill.level}</span>
            </div>
          ))}
        </div>
      </BentoCard>

      {/* Projects Card */}
      <BentoCard className="md:col-span-3" delay={0.4}>
        <h2 className="text-xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg bg-gray-50 hover:bg-purple-50 transition-colors"
            >
              <h3 className="font-bold">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{project.description}</p>
            </a>
          ))}
        </div>
      </BentoCard>
    </div>
  );
};

export default BentoGrid;