import React, { useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useColorMode } from '../contexts/ColorModeContext';

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
  const { colors, colorMode } = useColorMode();
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0", "100%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0", "100%"]);

  const getVariantStyles = () => {
    if (colorMode === 'dark') {
      switch(variant) {
        case 'light':
          return 'bg-[#2d4a54] text-[#f5f5f5] border-[#395c68]';
        case 'dark':
          return 'bg-[#1a2f38] text-[#f5f5f5] border-[#2d4a54]';
        default:
          return 'bg-[#233d47] text-[#f5f5f5] border-[#34565f]';
      }
    } else {
      // New light mode colors with better contrast
      switch(variant) {
        case 'light':
          return 'bg-white text-[#2d3748] border-[#e2e8f0]';
        case 'dark':
          return 'bg-[#edf2f7] text-[#2d3748] border-[#e2e8f0]';
        default:
          return 'bg-[#f7fafc] text-[#2d3748] border-[#e2e8f0]';
      }
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
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
          className="relative perspective-1000"
        >
          <motion.div
            style={{
              background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${
                colorMode === 'dark' ? 'rgba(52, 86, 95, 0.2)' : 'rgba(237, 242, 247, 0.7)'
              }, transparent 50%)`,
              position: 'absolute',
              inset: '-1px',
              borderRadius: 'inherit',
              filter: 'blur(1px)',
            }}
          />

          <motion.div
            style={{
              transform: "translateZ(50px)",
              transformStyle: "preserve-3d",
            }}
            className={`rounded-2xl p-6 
                       border shadow-lg hover:shadow-xl 
                       transition-all duration-300 
                       backdrop-blur-sm
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BentoCard;