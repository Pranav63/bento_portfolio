import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeroProps {
  isLoading: boolean;
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({ isLoading }) => {
  const moveTransition = {
    type: "keyframes",
    duration: 4,
    ease: [0.22, 1, 0.36, 1],
    times: [0, 1],
  };

  return (
    <motion.div
      className="md:col-span-2"
      initial={{
        y: '50vh',
        x: '50%',
        scale: 1.1,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        y: isLoading ? '50vh' : 0,
        x: isLoading ? '50%' : 0,
        scale: isLoading ? 1.1 : 1,
        translateX: isLoading ? '-50%' : '0%',
        translateY: isLoading ? '-50%' : '0%',
      }}
      style={{
        position: 'relative',
        zIndex: isLoading ? 50 : 1,
      }}
      transition={{
        y: moveTransition,
        x: moveTransition,
        scale: {
          ...moveTransition,
          duration: 3.8,
        },
        translateX: moveTransition,
        translateY: moveTransition,
      }}
    >
      <div 
        className={`
          relative bg-[#1c1c1c] rounded-2xl p-8 
          border border-[#333333] hover:border-[#444444]
          shadow-lg transition-shadow duration-300
          ${isLoading ? 'shadow-xl' : 'shadow-md'}
        `}
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full 
                       overflow-hidden shadow-xl transition-transform 
                       duration-300 hover:scale-105"
          >
            <img
              src="/images/pranav_pho.png"
              alt="Pranav Arora"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Pranav Arora
            </h1>
            <p className="text-lg md:text-xl mt-2 text-[#b4b4b4]">
              Data Scientist | AI Enthusiast | GenAI Engineer
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedHero;