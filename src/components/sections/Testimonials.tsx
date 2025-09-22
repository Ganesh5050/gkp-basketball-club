import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Sample testimonial data - in a real implementation, these would come from a database
const testimonialData = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Senior Player",
    quote: "GKP Basketball Club has transformed my game completely. The coaching is world-class and the community feels like family.",
    avatar: "/src/assets/player-silhouette.jpg"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Junior Player's Parent",
    quote: "My daughter has gained so much confidence since joining GKP. The coaches focus not just on basketball skills but also on character development.",
    avatar: "/src/assets/player-silhouette.jpg"
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Women's Team Captain",
    quote: "The inclusive environment at GKP is what sets it apart. Everyone is welcome and encouraged to reach their full potential.",
    avatar: "/src/assets/player-silhouette.jpg"
  },
  {
    id: 4,
    name: "Ananya Gupta",
    role: "Junior Player",
    quote: "I've improved so much in just a few months! The training sessions are challenging but always fun and encouraging.",
    avatar: "/src/assets/player-silhouette.jpg"
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonialData.length);
    }, 5000); // Change testimonial every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            What Our Players Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the members of our basketball family about their experiences with GKP Basketball Club.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden rounded-xl bg-card p-6 md:p-10 border border-border/30 shadow-lg">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-primary/50">
                  <img 
                    src={testimonialData[activeIndex].avatar} 
                    alt={testimonialData[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary/60 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg md:text-xl text-foreground italic">
                    {testimonialData[activeIndex].quote}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary">{testimonialData[activeIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonialData[activeIndex].role}</p>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};