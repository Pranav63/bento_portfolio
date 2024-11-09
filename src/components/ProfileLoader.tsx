import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProfileLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className={`fixed inset-0 flex items-center justify-center ${
        isLoading ? 'z-50' : 'z-0'
      }`}
      initial={false}
      animate={{
        position: isLoading ? 'fixed' : 'relative',
        scale: isLoading ? 1.2 : 1,
        top: isLoading ? '50%' : '0%',
        left: isLoading ? '50%' : '0%',
        transform: isLoading 
          ? 'translate(-50%, -50%)' 
          : 'translate(0, 0)',
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className="relative w-48 h-48 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isImageLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/images/pranav_pho.png"
          alt="Pranav Arora"
          className="w-full h-full object-cover"
          onLoad={() => setIsImageLoaded(true)}
        />
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProfileLoader;