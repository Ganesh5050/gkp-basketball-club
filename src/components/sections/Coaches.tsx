import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import coachRishi from "@/assets/coach-rishi.jpg";
import coachShree from "@/assets/coach-shree.jpg";

export const Coaches = () => {
  const coaches = [
    {
      name: "Shree Sir",
      role: "Head Coach",
      image: coachShree,
      experience: "12+ Years",
      achievements: ["Professional Player", "Advanced Coaching License", "Tournament Champion"],
      description: "Leading the club with vision and passion for developing young basketball talent in Mumbai."
    },
    {
      name: "Rishi Sir", 
      role: "Assistant Coach",
      image: coachRishi,
      experience: "10+ Years",
      achievements: ["National Level Player", "FIBA Certified", "Youth Development Expert"],
      description: "Dedicated to bringing out the best in every player through innovative training methods."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const cardHover = {
    rest: { scale: 1, rotateY: 0 },
    hover: { scale: 1.05, rotateY: 5 }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl font-bold mb-6">
            Meet Our <span className="text-primary">Coaching Staff</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our experienced and passionate coaches are dedicated to developing the next generation 
            of basketball champions through expert guidance and innovative training methods.
          </p>
        </motion.div>

        {/* Coaching Staff */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {coaches.map((coach, index) => (
              <motion.div
                key={coach.name}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                transition={{ duration: 0.3 }}
                className="perspective-1000"
              >
                <Card className="glass-card border-glass-border overflow-hidden hover:shadow-glow transition-all duration-500">
                  <div className="relative">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-80 object-contain bg-muted/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-gradient-orange text-background mb-2">
                        {coach.experience}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h4 className="font-display text-2xl font-bold text-primary mb-2">
                      {coach.name}
                    </h4>
                    <p className="text-lg text-muted-foreground mb-4">{coach.role}</p>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {coach.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-foreground">Key Achievements:</h5>
                      <div className="flex flex-wrap gap-2">
                        {coach.achievements.map((achievement, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coaching Philosophy */}
        <motion.div
          className="mt-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="font-display text-3xl font-bold mb-12">Our Coaching Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "🎯", title: "Skill Development", desc: "Focus on fundamental skills and advanced techniques" },
              { icon: "💪", title: "Physical Training", desc: "Building strength, endurance, and athleticism" },
              { icon: "🧠", title: "Mental Toughness", desc: "Developing game intelligence and competitive mindset" }
            ].map((philosophy, index) => (
              <motion.div
                key={philosophy.title}
                className="glass-card p-8 rounded-xl hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl mb-6">{philosophy.icon}</div>
                <h4 className="font-display font-bold text-primary mb-4 text-xl">{philosophy.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{philosophy.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
