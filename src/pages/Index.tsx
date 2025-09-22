import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Coaches } from "@/components/sections/Coaches";
import { Schedule } from "@/components/sections/Schedule";
import { FAQ } from "@/components/sections/FAQ";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Achievements } from "@/components/sections/Achievements";
import { WhatsAppChat } from "@/components/ui/WhatsAppChat";
import { BackToTop } from "@/components/ui/BackToTop";
import { Head } from "@/components/Head";
import gkpLogo from "@/assets/gkp-logo.png";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Add font import
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Head />
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navigation />
          <WhatsAppChat />
          
          <main>
            <section id="hero">
              <Hero />
            </section>
            
            <section id="about">
              <About />
            </section>
            
            <section id="coaches">
              <Coaches />
            </section>
            
            <section id="schedule">
              <Schedule />
            </section>
            
            <section id="faq">
              <FAQ />
            </section>
            
            <section id="gallery">
              <Gallery />
            </section>
            
            <section id="testimonials">
              <Testimonials />
            </section>
            
            <section id="achievements">
              <Achievements />
            </section>
          </main>

          {/* Footer */}
          <footer className="py-12 px-6 bg-muted/20 border-t border-border/20">
            <div className="max-w-7xl mx-auto text-center">
              <BackToTop />
              <motion.div
                className="flex items-center justify-center space-x-3 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-12 h-12 flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={`${gkpLogo}?v=${Date.now()}`} 
                    alt="GKP Basketball Club Logo" 
                    className="w-full h-full object-contain filter brightness-110 drop-shadow-lg"
                  />
                </motion.div>
                <h3 className="font-display text-xl font-bold text-primary">GKP Basketball Club</h3>
              </motion.div>
              <p className="text-muted-foreground mb-6">Building Champions On and Off the Court</p>
              
              {/* Social Media Links */}
              <motion.div 
                className="flex justify-center space-x-6 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.a
                  href="https://www.instagram.com/gkpbasketballclub/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
                
                <motion.a
                  href="https://www.facebook.com/profile.php?id=100063695628293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
                
                <motion.a
                  href="https://www.youtube.com/@Shreebasketball"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </motion.a>
              </motion.div>
              
              <p className="text-sm text-muted-foreground">© 2024 GKP Basketball Club, Ghatkopar. All rights reserved.</p>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
