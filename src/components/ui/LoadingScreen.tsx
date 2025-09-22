import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import gkpLogo from "@/assets/gkp-logo.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          className="mx-auto mb-8 h-32 w-32 flex items-center justify-center"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src={gkpLogo} 
            alt="GKP Basketball Club Logo" 
            className="w-full h-full object-contain filter brightness-110 drop-shadow-2xl"
          />
        </motion.div>
        
        {/* Club Name */}
        <motion.h1 
          className="mb-4 font-display text-4xl font-bold text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          GKP Basketball Club
        </motion.h1>
        
        {/* Loading Bar */}
        <div className="mx-auto w-64 rounded-full bg-secondary p-1">
          <motion.div
            className="h-2 rounded-full bg-gradient-orange"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <motion.p 
          className="mt-4 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Building Champions On and Off the Court
        </motion.p>
      </div>
    </motion.div>
  );
};