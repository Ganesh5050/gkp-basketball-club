import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqItems = [
    {
      question: "What age groups can join GKP Basketball Club?",
      answer: "We welcome players from ages 8 to 50. We have dedicated programs for juniors (8-17), seniors (18+), and a women's team for all ages."
    },
    {
      question: "Do I need prior basketball experience to join?",
      answer: "No, we welcome players of all skill levels! We have beginner-friendly programs where you'll learn the fundamentals, as well as advanced training for experienced players."
    },
    {
      question: "How much does it cost to join the club?",
      answer: "Membership fees vary based on the program you join. Basic membership starts at ₹2,000 per month, with discounts available for quarterly and annual payments. Please contact us for detailed fee information for specific programs."
    },
    {
      question: "Where and when are the training sessions held?",
      answer: "Training sessions are held at our Ghatkopar court facility. Schedule varies by team category - juniors typically train weekday evenings and weekend mornings, while senior and women's teams have additional late evening sessions. Check the Schedule section for detailed timings."
    },
    {
      question: "What should I bring to my first training session?",
      answer: "Please bring comfortable sports attire, basketball shoes, a water bottle, and a positive attitude! We provide basketballs and other training equipment. For your first session, arrive 15 minutes early to meet the coach and complete any necessary paperwork."
    },
    {
      question: "Do you participate in tournaments and competitions?",
      answer: "Yes! GKP Basketball Club actively participates in local, state, and national level tournaments. Our teams compete in various leagues across Mumbai and Maharashtra, giving players plenty of competitive opportunities."
    },
    {
      question: "How do I schedule a trial session?",
      answer: "You can schedule a trial session by filling out the Join Us form on our website, or by contacting us directly. We'll arrange a suitable time for you to come and experience our training program before making a commitment."
    },
    {
      question: "Are there any scholarships available?",
      answer: "Yes, we offer limited scholarships for talented players who demonstrate financial need. These are evaluated on a case-by-case basis. Please mention your interest in scholarships when applying."
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about joining and training with GKP Basketball Club
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={`faq-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <AccordionItem value={`item-${index}`} className="border border-border/40 rounded-lg mb-4 px-2 overflow-hidden bg-card/30 backdrop-blur-sm">
                  <AccordionTrigger className="text-lg font-medium py-4 px-2 hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-2 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-2">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
          >
            Contact us directly
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};