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
      scale: 1.2,
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

  const imageVariants: Variants = {
    loading: { 
      scale: 1,  // Changed from 1.2 to 1
      opacity: 1  // Changed from 0 to 1
    },
    loaded: { 
      scale: 1, 
      opacity: 1 
    }
  };

  const textVariants: Variants = {
    loading: { 
      opacity: 1,  // Changed from 0 to 1
      y: 0  // Changed from 20 to 0
    },
    loaded: { 
      opacity: 1, 
      y: 0 
    }
  };

  return (
    <motion.div
      className="md:col-span-2 overflow-hidden"
      initial={false}  // Changed from "loading" to false
      animate={isLoading ? "loading" : "loaded"}
      variants={containerVariants}
      transition={{ 
        duration: 0.8, 
        ease: "easeInOut",
        position: { duration: 0 }
      }}
    >
      <div className="relative backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <motion.div
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl ring-2 ring-purple-500/20"
            variants={imageVariants}
            initial={{ opacity: 1, scale: 1 }}  // Added initial state
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/images/pranav_pho.png"
              alt="Pranav Arora"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
              variants={textVariants}
              initial={{ opacity: 1, y: 0 }}  // Added initial state
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Pranav Arora
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mt-2 text-purple-100"
              variants={textVariants}
              initial={{ opacity: 1, y: 0 }}  // Added initial state
              transition={{ duration: 0.6, delay: 0.5 }}
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