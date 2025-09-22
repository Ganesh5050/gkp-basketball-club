import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X, ChevronRight } from "lucide-react";
import gkpLogo from "@/assets/gkp-logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const openLocation = () => {
    window.open('https://www.google.com/maps/place/Gkp+Basketball+Club+Ghatkopar/@19.0846065,72.914231,174m/data=!3m1!1e3!4m9!1m2!2m1!1sMaratha+Warriors,+Pant+Nagar+Colony+Rd,+Naidu+Colony,+Pant+Nagar,+Mankur,+Mumbai,+Maharashtra+400075!3m5!1s0x3be7c7784a621c99:0xdcfe3110293cfc24!8m2!3d19.0848387!4d72.9141381!16s%2Fg%2F11pxwhplqv?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Coaches", id: "coaches" },
    { label: "Schedule", id: "schedule" },
    { label: "Gallery", id: "gallery" }
  ];
  
  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-card border-b border-glass-border' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => scrollToSection('hero')}
            >
              <motion.div
                className="w-14 h-14 flex items-center justify-center"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={`${gkpLogo}?v=${Date.now()}`} 
                  alt="GKP Basketball Club Logo" 
                  className="w-full h-full object-contain filter brightness-110 drop-shadow-lg"
                />
              </motion.div>
              <div>
                <h1 className="font-display text-xl font-bold text-foreground">GKP</h1>
                <p className="text-xs text-muted-foreground">Basketball Club</p>
              </div>
            </motion.div>

            {/* Center Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  />
                </motion.button>
              ))}
            </div>

            {/* Right Corner Actions */}
            <div className="flex items-center ml-auto">
              {/* Location Button */}
              <motion.button
                onClick={openLocation}
                className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg bg-muted/20 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300 border border-border/20 hover:border-primary/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Location</span>
              </motion.button>

              {/* Mobile Location Button */}
              <motion.button
                onClick={openLocation}
                className="sm:hidden p-2 rounded-lg bg-muted/20 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300 border border-border/20 hover:border-primary/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-5 h-5" />
              </motion.button>

              {/* CTA Button */}
              <Button
                onClick={() => window.open('https://wa.me/919876543210?text=Hi%20Rishi%20Sir!%20I%27m%20interested%20in%20joining%20GKP%20Basketball%20Club.%20Can%20you%20please%20provide%20more%20information%3F', '_blank')}
                className="bg-gradient-orange hover:shadow-glow glow-orange-hover"
              >
                Join Now
              </Button>
              
              {/* Social Media Links */}
              <div className="hidden lg:flex items-center">
                <motion.a
                  href="https://www.instagram.com/gkpbasketballclub/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/10"
                  whileHover={{ scale: 1.1 }}
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
                  className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/10"
                  whileHover={{ scale: 1.1 }}
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
                  className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </motion.a>
              </div>
              
              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-muted/20 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300 border border-border/20 hover:border-primary/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimateMobileMenu isOpen={mobileMenuOpen} navItems={navItems} onItemClick={scrollToSection} onClose={() => setMobileMenuOpen(false)} />

    </>
  );
}

// Mobile Menu Component
const AnimateMobileMenu = ({ isOpen, navItems, onItemClick, onClose }: { 
  isOpen: boolean, 
  navItems: Array<{
    label: string, 
    id: string
  }>, 
  onItemClick: (id: string) => void,
  onClose: () => void
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-40 md:hidden"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { opacity: 1, pointerEvents: "auto" },
        closed: { opacity: 0, pointerEvents: "none" }
      }}
      transition={{ duration: 0.2 }}
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      {/* Backdrop */}
      <motion.div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        variants={{
          open: { opacity: 1 },
          closed: { opacity: 0 }
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Menu Content */}
      <motion.div
        className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-card shadow-xl border-l border-border/30 flex flex-col"
        variants={{
          open: { x: 0 },
          closed: { x: "100%" }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-6 flex flex-col space-y-6 h-full">
          <div className="flex items-center justify-end mb-6">
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-700 text-white hover:text-orange-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className="w-full flex items-center justify-between py-3 px-2 rounded-md hover:bg-muted/50 text-foreground hover:text-primary transition-colors"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                custom={index}
                variants={{
                  open: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.05 } }),
                  closed: { opacity: 0, x: -10 }
                }}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            ))}
          </div>
          
          {/* Social Media Links in Mobile Menu */}
          <div className="mt-8 pt-6 border-t border-border/20">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/gkpbasketballclub/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
                whileHover={{ scale: 1.1 }}
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
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
                whileHover={{ scale: 1.1 }}
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
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};