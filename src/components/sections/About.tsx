import { motion } from "framer-motion";

export const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
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
            About <span className="text-primary">GKP Basketball Club</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded with a passion for basketball excellence, GKP Basketball Club has been nurturing 
            talent and building champions in Ghatkopar for over 5 years.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-card p-8 rounded-2xl hover-lift">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center mr-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To develop skilled basketball players while fostering teamwork, discipline, and leadership. 
              We believe in creating not just better players, but better individuals who excel on and off the court.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover-lift">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center mr-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be Mumbai's premier basketball club, recognized for excellence in player development, 
              competitive success, and positive community impact through the beautiful game of basketball.
            </p>
          </div>
        </motion.div>

        {/* Club Values */}
        <motion.div
          className="mt-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="font-display text-3xl font-bold mb-12">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: "💪", title: "Excellence", desc: "Striving for the best in everything we do" },
              { icon: "🤝", title: "Teamwork", desc: "Success comes through unity and collaboration" },
              { icon: "🎯", title: "Discipline", desc: "Commitment to training and continuous improvement" },
              { icon: "❤️", title: "Passion", desc: "Love for the game drives our dedication" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="glass-card p-6 rounded-xl hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="font-display font-bold text-primary mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};