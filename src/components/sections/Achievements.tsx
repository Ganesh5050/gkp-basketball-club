import { motion } from "framer-motion";

// Sample achievement data - in a real implementation, these would come from a database
const achievementData = [
  {
    id: 1,
    year: "2015",
    title: "Club Foundation",
    description: "GKP Basketball Club was founded with just 10 members and a shared passion for basketball."
  },
  {
    id: 2,
    year: "2016",
    title: "First Tournament Win",
    description: "Our junior team won their first local tournament, putting GKP on the map."
  },
  {
    id: 3,
    year: "2018",
    title: "Regional Champions",
    description: "The senior team became regional champions after an undefeated season."
  },
  {
    id: 4,
    year: "2019",
    title: "Women's Team Formation",
    description: "Launched our women's basketball program with 15 dedicated players."
  },
  {
    id: 5,
    year: "2021",
    title: "National Recognition",
    description: "Three of our players were selected for national youth camps."
  },
  {
    id: 6,
    year: "2023",
    title: "New Training Facility",
    description: "Opened our state-of-the-art training facility with two full courts."
  },
];

export const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <section id="achievements" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            Our Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Celebrating the milestones that have shaped GKP Basketball Club over the years.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 rounded-full" />
          
          {achievementData.map((achievement, index) => (
            <motion.div 
              key={achievement.id}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              variants={itemVariants}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <h3 className="text-xl font-bold text-primary mb-1">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
              
              {/* Center Point */}
              <div className="w-2/12 relative flex justify-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                  <div className="w-4 h-4 rounded-full bg-background" />
                </div>
              </div>
              
              {/* Year */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>
                <div className="inline-block px-4 py-2 bg-card rounded-lg border border-border/30 shadow-md">
                  <span className="text-lg font-display font-bold">{achievement.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};