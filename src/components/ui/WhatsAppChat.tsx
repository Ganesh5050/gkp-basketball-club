import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  // Auto-open WhatsApp chat after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAutoOpened) {
        setIsOpen(true);
        setHasAutoOpened(true);
      }
    }, 60000); // Open after 1 minute

    return () => clearTimeout(timer);
  }, [hasAutoOpened]);

  // WhatsApp numbers for coaches
  const coaches = [
    {
      name: "Shree Sir",
      role: "Head Coach",
      phone: "+918765432109",
      message: "Hi! I'm interested in joining GKP Basketball Club. Can you please provide more information about training sessions and membership?"
    },
    {
      name: "Rishi Sir", 
      role: "Assistant Coach",
      phone: "+919876543210",
      message: "Hello! I'd like to know more about basketball training at GKP Basketball Club. Could you help me with the details?"
    }
  ];

  const openWhatsApp = (phone: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const quickMessages = [
    "I need more information about training",
    "What are your fees and packages?",
    "Can I schedule a trial session?",
    "What are the training timings?",
    "I have some enquiries about joining"
  ];

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={isOpen ? {} : { 
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 10px 25px rgba(34, 197, 94, 0.3)",
              "0 15px 35px rgba(34, 197, 94, 0.5)",
              "0 10px 25px rgba(34, 197, 94, 0.3)"
            ]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          {isOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <MessageCircle className="w-8 h-8 text-white" />
          )}
        </motion.button>
      </motion.div>

      {/* WhatsApp Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-2 sm:bottom-24 sm:right-6 z-40 w-[calc(100vw-1rem)] sm:w-80 h-[500px] overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="glass-card border-green-500/30 shadow-2xl">
              <CardHeader className="bg-green-500 text-white rounded-t-lg p-3">
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">GKP Basketball Club</h3>
                    <p className="text-xs opacity-90">Chat with coaches</p>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-1.5 space-y-1.5">
                {/* Welcome Message */}
                <div className="bg-green-50 dark:bg-green-900/20 p-1.5 rounded-lg border-l-4 border-green-500">
                  <p className="text-xs text-green-800 dark:text-green-200 font-medium">
                    👋 Welcome to GKP Basketball Club!
                  </p>
                  <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                    Contact us for more information about training, fees, schedules, and enquiries. We're here to help! 🏀
                  </p>
                </div>

                {/* Coach Options */}
                <div className="space-y-1.5 bg-gray-50 dark:bg-gray-800 p-1.5 rounded-lg">
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Choose a coach:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {coaches.map((coach, index) => (
                      <motion.button
                        key={coach.name}
                        onClick={() => openWhatsApp(coach.phone, coach.message)}
                        className="w-full p-2 bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-200 text-left"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white">📞</span>
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-xs text-gray-900 dark:text-gray-100">{coach.name}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{coach.role}</p>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Quick Messages */}
                <div className="space-y-1.5 bg-gray-50 dark:bg-gray-800 p-1.5 rounded-lg">
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Common enquiries:</p>
                  <div className="space-y-1.5">
                    {quickMessages.slice(0, 3).map((message, index) => (
                      <motion.button
                        key={index}
                        onClick={() => openWhatsApp(coaches[0].phone, message)}
                        className="w-full p-1 text-xs bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-200 text-left text-gray-800 dark:text-gray-200 hover:text-green-800 dark:hover:text-green-200"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                            <span className="text-xs">💬</span>
                          </div>
                          <span>{message}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Training Hours */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-1.5 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Clock className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-xs font-medium text-blue-800 dark:text-blue-200">Training Hours</p>
                  </div>
                  <p className="text-xs text-blue-700 dark:text-blue-300 ml-6">
                    Mon-Fri: 6AM-9PM | Sat-Sun: 7AM-8PM
                  </p>
                </div>

                {/* Response Time */}
                <div className="text-center">
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    ⚡ Quick replies
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};