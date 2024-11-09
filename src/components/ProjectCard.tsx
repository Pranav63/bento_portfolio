import React from 'react';
import { useColorMode } from '../contexts/ColorModeContext';

export interface ProjectType {
  title: string;
  description: string;
  link: string;
  tags: string[];
  highlights: string[];
}

const ProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => {
  const { colorMode } = useColorMode();
  
  const isDark = colorMode === 'dark';

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-6 rounded-lg 
                ${isDark 
                  ? 'bg-[#2d4a54] hover:bg-[#34565f] border-[#395c68] hover:border-[#446b7a] text-white' 
                  : 'bg-white hover:bg-[#f8fafc] border-[#e2e8f0] hover:border-[#cbd5e0] text-[#2d3748]'}
                transition-all duration-300 border
                transform hover:scale-[1.02] shadow-lg hover:shadow-xl`}
    >
      <h3 className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-[#2d3748]'}`}>
        {project.title}
      </h3>
      <p className={`mb-3 ${isDark ? 'text-[#e2e8f0]' : 'text-[#4a5568]'}`}>
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag, index) => (
          <span 
            key={index}
            className={`px-2 py-1 text-xs rounded-full 
                      ${isDark 
                        ? 'bg-[#1a2f38] text-[#e2e8f0]' 
                        : 'bg-[#edf2f7] text-[#4a5568]'}`}
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="space-y-1">
        {project.highlights.map((highlight, index) => (
          <div 
            key={index}
            className={`text-sm flex items-start 
                       ${isDark ? 'text-[#e2e8f0]' : 'text-[#4a5568]'}`}
          >
            <span className={`mr-2 ${isDark ? 'text-[#8a9fb4]' : 'text-[#a0aec0]'}`}>•</span>
            {highlight}
          </div>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;