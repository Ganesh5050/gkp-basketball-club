import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { useState } from "react";
import basketballCourtHero from "@/assets/basketball-court-hero.jpg";

export const Hero = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleJoinUsClick = () => {
    // Open WhatsApp directly
    window.open('https://wa.me/919876543210?text=Hi%20Rishi%20Sir!%20I%27m%20interested%20in%20joining%20GKP%20Basketball%20Club.%20Can%20you%20please%20provide%20more%20information%3F', '_blank');
  };

  const handleWatchHighlightsClick = () => {
    // Open YouTube channel
    window.open('https://www.youtube.com/@Shreebasketball', '_blank');
  };

  const handleTitleComplete = () => {
    setShowSubtitle(true);
  };

  const handleSubtitleComplete = () => {
    setShowContent(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Fallback */}
      <div className="absolute inset-0">
        <iframe
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.youtube.com/embed/fI-XfjQCDwM?autoplay=1&mute=1&loop=1&playlist=fI-XfjQCDwM&controls=0&showinfo=0&rel=0&modestbranding=1&vq=hd1080"
          title="Basketball Motivation Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ 
            pointerEvents: 'none',
            transform: 'scale(1.2)',
            transformOrigin: 'center center'
          }}
        />
        {/* Fallback Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"
          style={{ 
            backgroundImage: `url(${basketballCourtHero})`,
            animation: 'fade-in 1s ease-out 3s forwards'
          }}
        />
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/70" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50" />
      </div>



      {/* Animated Basketball Elements - Safe Positions */}
      <motion.div
        className="absolute top-20 left-8 w-6 h-6 rounded-full bg-gradient-orange opacity-40"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-32 right-12 w-8 h-8 rounded-full bg-gradient-orange opacity-30"
        animate={{
          y: [0, -25, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute top-1/2 left-4 w-4 h-4 rounded-full bg-gradient-orange opacity-35"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 180],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute top-1/2 right-6 w-5 h-5 rounded-full bg-gradient-orange opacity-25"
        animate={{
          y: [0, -18, 0],
          rotate: [180, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Title with Typewriter Effect */}
          <motion.h1 
            className="font-display text-4xl sm:text-6xl md:text-8xl font-bold mb-6 min-h-[120px] sm:min-h-[160px] md:min-h-[220px] flex flex-col items-center justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="text-foreground mb-2 sm:mb-4">
              <TypewriterText 
                text="GKP" 
                delay={1000} 
                speed={200}
                className="text-4xl sm:text-6xl md:text-8xl font-bold"
                onComplete={handleTitleComplete}
              />
            </div>
            {showSubtitle && (
              <div className="text-transparent bg-gradient-orange bg-clip-text">
                <TypewriterText 
                  text="Basketball Club" 
                  delay={500} 
                  speed={150}
                  className="text-3xl sm:text-5xl md:text-7xl font-bold animate-glow-pulse leading-tight"
                  onComplete={handleSubtitleComplete}
                />
              </div>
            )}
          </motion.h1>

          {/* Content that appears after typewriter */}
          {showContent && (
            <>
              {/* Location */}
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Ghatkopar, Mumbai
              </motion.p>

              {/* Tagline */}
              <motion.p 
                className="text-2xl md:text-3xl font-semibold text-foreground mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Building Champions On and Off the Court
              </motion.p>
            </>
          )}

          {/* CTA Buttons */}
          {showContent && (
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
            <Button
              onClick={handleJoinUsClick}
              size="lg"
              className="bg-gradient-orange hover:shadow-glow glow-orange-hover text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 font-display font-bold w-full sm:w-auto"
            >
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Join Us Now
              </motion.span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleWatchHighlightsClick}
              className="border-primary text-primary hover:bg-primary/10 text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 font-display w-full sm:w-auto"
            >
              Watch Highlights
            </Button>
            </motion.div>
          )}

          {/* Stats */}
          {showContent && (
            <motion.div 
              className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-border/20 px-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-primary mb-1 sm:mb-2">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Active Players</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-primary mb-1 sm:mb-2">5+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-primary mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Tournaments Won</div>
            </div>
            </motion.div>
          )}
        </motion.div>
      </div>



    </section>
  );
};