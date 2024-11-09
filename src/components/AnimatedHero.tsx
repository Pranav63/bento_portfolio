import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedHeroProps {
  isLoading: boolean;
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({ isLoading }) => {
  const containerVariants: Variants = {
    loading: {
      position: 'fixed' as const,
      top: '50%',
      left: '50%',
      x: '-50%',
      y: '-50%',
      scale: 1,
      zIndex: 50,
    },
    loaded: {
      position: 'relative' as const,
      top: '0%',
      left: '0%',
      x: 0,
      y: 0,
      scale: 1,
      zIndex: 1,
    }
  };

  return (
    <motion.div
      className="md:col-span-2 overflow-hidden"
      initial={false}
      animate={isLoading ? "loading" : "loaded"}
      variants={containerVariants}
      transition={{ 
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
        position: { duration: 0 }
      }}
    >
      <div className="relative bg-[#1c1c1c] rounded-2xl p-8 
                    border border-[#333333] hover:border-[#444444]
                    shadow-lg transition-all duration-300">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <motion.div
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl"
            initial={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src="/images/pranav_pho.png"
              alt="Pranav Arora"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white"
              initial={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              Pranav Arora
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mt-2 text-[#b4b4b4]"
              initial={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              Data Scientist | AI Enthusiast | GenAI Engineer
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedHero;