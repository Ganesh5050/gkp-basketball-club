import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypewriterText = ({ 
  text, 
  delay = 0, 
  speed = 100, 
  className = "", 
  onComplete 
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        // Animation complete
        if (onComplete) {
          onComplete();
        }
        // Hide cursor after completion
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    if (currentIndex < text.length || showCursor) {
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorTimer);
    }
  }, [currentIndex, text.length, showCursor]);

  return (
    <span className={`${className} typewriter-glow`}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {displayText.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.05,
              duration: 0.3,
              ease: "easeOut"
            }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
      {showCursor && (
        <motion.span
          className="inline-block w-1 h-[1em] bg-primary ml-2 rounded-sm"
          animate={{ 
            opacity: [1, 0],
            scaleY: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 0.8, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};