import React from 'react';

export interface ProjectType {
  title: string;
  description: string;
  link: string;
  tags: string[];
  highlights: string[];
}

const ProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-6 rounded-lg bg-[#2d2d2d] hover:bg-[#333333]
             transition-all duration-300 border border-[#404040] hover:border-[#505050]
             text-white transform hover:scale-[1.02]"
  >
    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
    <p className="text-[#b4b4b4] mb-3">{project.description}</p>
    
    <div className="flex flex-wrap gap-2 mb-3">
      {project.tags.map((tag, index) => (
        <span 
          key={index}
          className="px-2 py-1 text-xs rounded-full bg-[#404040] text-[#e4e4e4]"
        >
          {tag}
        </span>
      ))}
    </div>
    
    <div className="space-y-1">
      {project.highlights.map((highlight, index) => (
        <div 
          key={index}
          className="text-sm text-[#b4b4b4] flex items-start"
        >
          <span className="text-[#666666] mr-2">•</span>
          {highlight}
        </div>
      ))}
    </div>
  </a>
);

export default ProjectCard;