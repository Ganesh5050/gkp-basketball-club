import { motion, useAnimation } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, User, Calendar, Star, Trophy, Target, Zap, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export const Schedule = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);
  const controls = useAnimation();

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Enhanced training schedule data with more details - Starting from Sunday
  const scheduleData = {
    Sunday: [], // No sessions
    Monday: [
      { 
        id: '1', 
        category: 'Kids Below 10 Years', 
        start_time: '16:00', 
        end_time: '17:00', 
        participants: '4-5 kids', 
        location: 'GKP Basketball Club',
        coach: 'Rishi Sir',
        level: 'Beginner',
        focus: 'Basic Skills & Fun Games',
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        id: '2', 
        category: 'Above 10+ Years', 
        start_time: '17:30', 
        end_time: '18:30', 
        participants: '5-6 sessions', 
        location: 'GKP Basketball Club',
        coach: 'Rishi Sir',
        level: 'Intermediate',
        focus: 'Advanced Techniques',
        color: 'from-green-500 to-emerald-500'
      }
    ],
    Tuesday: [], // No sessions
    Wednesday: [
      { 
        id: '3', 
        category: 'Kids Below 10 Years', 
        start_time: '16:00', 
        end_time: '17:00', 
        participants: '4-5 kids', 
        location: 'GKP Basketball Club',
        coach: 'Rishi Sir',
        level: 'Beginner',
        focus: 'Basic Skills & Fun Games',
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        id: '4', 
        category: 'Above 10+ Years', 
        start_time: '17:30', 
        end_time: '18:30', 
        participants: '5-6 sessions', 
        location: 'GKP Basketball Club',
        coach: 'Rishi Sir',
        level: 'Intermediate',
        focus: 'Advanced Techniques',
        color: 'from-green-500 to-emerald-500'
      }
    ],
    Thursday: [], // No sessions
    Friday: [
      { 
        id: '5', 
        category: 'Kids Below 10 Years', 
        start_time: '16:00', 
        end_time: '17:00', 
        participants: '4-5 kids', 
        location: 'GKP Basketball Club',
        coach: 'Rishi Sir',
        level: 'Beginner',
        focus: 'Basic Skills & Fun Games',
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        id: '6', 
        category: 'Above 10+ Years', 
        start_time: '17:30', 
        end_time: '18:30', 
        participants: '5-6 sessions', 
        location: 'GKP Basketball Club',
        coach: 'Rishi Sir',
        level: 'Intermediate',
        focus: 'Advanced Techniques',
        color: 'from-green-500 to-emerald-500'
      }
    ],
    Saturday: [] // No sessions
  };

  const formatTime = (time: string) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getDayColor = (day: string) => {
    const colors = {
      'Sunday': 'border-gray-300',
      'Monday': 'border-red-400',
      'Tuesday': 'border-gray-300',
      'Wednesday': 'border-orange-400',
      'Thursday': 'border-gray-300',
      'Friday': 'border-purple-400',
      'Saturday': 'border-gray-300'
    };
    return colors[day as keyof typeof colors] || 'border-gray-300';
  };

  const getDayTextColor = (day: string) => {
    const colors = {
      'Sunday': 'text-gray-600',
      'Monday': 'text-red-600',
      'Tuesday': 'text-gray-600',
      'Wednesday': 'text-orange-600',
      'Thursday': 'text-gray-600',
      'Friday': 'text-purple-600',
      'Saturday': 'text-gray-600'
    };
    return colors[day as keyof typeof colors] || 'text-gray-600';
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const bounceIn = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.8
      }
    }
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -180, scale: 0.5 },
    visible: { 
      opacity: 1, 
      rotate: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 15,
        duration: 1
      }
    }
  };

  const pulseGlow = {
    animate: {
      boxShadow: [
        "0 0 0 0 rgba(59, 130, 246, 0.4)",
        "0 0 0 10px rgba(59, 130, 246, 0)",
        "0 0 0 0 rgba(59, 130, 246, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const shimmerAnimation = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/20">
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
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            variants={bounceIn}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              variants={rotateIn}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Calendar className="w-8 h-8 text-primary" />
            </motion.div>
            <motion.h2 
              className="font-display text-2xl font-bold text-primary"
              variants={fadeInUp}
            >
              Training Schedule
            </motion.h2>
            <motion.div
              variants={rotateIn}
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Trophy className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>
          <motion.p 
            className="text-base text-gray-700 dark:text-gray-300 max-w-xl mx-auto leading-relaxed"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Join our professional basketball training sessions designed for all skill levels. 
            <motion.span 
              className="text-primary font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Expert coaching
            </motion.span> meets 
            <motion.span 
              className="text-primary font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              fun learning
            </motion.span>!
          </motion.p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <motion.div 
            variants={slideInLeft}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              variants={pulseGlow}
              animate="animate"
            >
              <Card className="glass-card border-glass-border bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    transition: { duration: 3, repeat: Infinity, ease: "linear" }
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                <CardContent className="p-6 text-center relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    variants={floatingAnimation}
                    animate="animate"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Calendar className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-bold text-primary mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    3 Days
                  </motion.h3>
                  <p className="text-muted-foreground">Training Sessions Per Week</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={bounceIn}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              variants={pulseGlow}
              animate="animate"
            >
              <Card className="glass-card border-glass-border bg-gradient-to-br from-green-500/10 to-emerald-500/10 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    transition: { duration: 3, repeat: Infinity, ease: "linear" }
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                <CardContent className="p-6 text-center relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    variants={floatingAnimation}
                    animate="animate"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <User className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-primary mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    2 Groups
                  </motion.h3>
                  <p className="text-muted-foreground">Age-Based Training Programs</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={slideInRight}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              variants={pulseGlow}
              animate="animate"
            >
              <Card className="glass-card border-glass-border bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    transition: { duration: 3, repeat: Infinity, ease: "linear" }
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                <CardContent className="p-6 text-center relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    variants={floatingAnimation}
                    animate="animate"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-primary mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    Expert
                  </motion.h3>
                  <p className="text-muted-foreground">Professional Coaches</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Schedule Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {Object.entries(scheduleData).map(([day, sessions]) => (
              <motion.div
                key={day}
                variants={fadeInUp}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              onHoverStart={() => setHoveredDay(day)}
              onHoverEnd={() => setHoveredDay(null)}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className={`glass-card border-2 ${getDayColor(day)} h-full overflow-hidden relative group bg-white dark:bg-gray-900 ${
                sessions.length > 0 ? 'hover:shadow-xl' : 'opacity-75'
              }`}>
                <CardHeader className="pb-3 relative">
                  <CardTitle className="font-display text-lg font-bold text-center mb-2">
                    <span className={getDayTextColor(day)}>
                      {day}
                    </span>
                    </CardTitle>
                  <div className="text-center text-sm text-muted-foreground font-medium">
                    {sessions.length > 0 ? `${sessions.length} Session${sessions.length > 1 ? 's' : ''}` : 'Rest Day'}
                  </div>
                  </CardHeader>

                <CardContent className="space-y-3 p-4">
                    {sessions.length > 0 ? (
                      sessions.map((session, index) => (
                        <motion.div
                          key={session.id}
                          className="p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 relative group/session mb-2 hover:shadow-lg transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ 
                            scale: 1.02, 
                            y: -2,
                            transition: { type: "spring", stiffness: 400 }
                          }}
                        >
                          {/* Session Header */}
                          <div className="flex items-center justify-between mb-1">
                            <Badge className={`${
                              session.level === 'Beginner' 
                                ? 'bg-blue-100 text-blue-700 border-blue-200' 
                                : 'bg-green-100 text-green-700 border-green-200'
                            } text-sm font-semibold px-3 py-1`}>
                              {session.level}
                            </Badge>
                            <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm font-bold">
                              <Clock className="w-5 h-5 mr-2 text-primary" />
                              {formatTime(session.start_time)} - {formatTime(session.end_time)}
                            </div>
                          </div>
                          
                          {/* Session Details */}
                          <div className="space-y-1">
                            <h4 className="font-bold text-base text-gray-900 dark:text-white leading-tight">
                              {session.category}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-xs">
                              {session.focus}
                            </p>
                            
                            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                              <div className="flex items-center">
                                <User className="w-4 h-4 mr-2 text-primary" />
                                <span className="font-medium">{session.participants}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2 text-primary" />
                                <span className="truncate">{session.location}</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                              <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                                <Target className="w-4 h-4 mr-2 text-primary" />
                                <span>Coach: {session.coach}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                    <motion.div 
                      className="text-center py-8 text-muted-foreground"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-6 h-6 text-gray-400" />
                      </div>
                      <p className="text-base font-semibold text-gray-600 dark:text-gray-300">
                        Rest Day
                      </p>
                    </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

        {/* Enhanced Contact Section */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            variants={pulseGlow}
            animate="animate"
          >
            <Card className="glass-card border-glass-border bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5 overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  transition: { duration: 4, repeat: Infinity, ease: "linear" }
                }}
                style={{ backgroundSize: "200% 200%" }}
              />
              <CardContent className="p-12 relative z-10">
                <div className="text-center mb-8">
                  <motion.div 
                    className="inline-flex items-center gap-3 mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                        transition: { duration: 3, repeat: Infinity }
                      }}
                    >
                      <motion.div
                        animate={{ rotate: [0, -360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Star className="w-6 h-6 text-white" />
                      </motion.div>
                    </motion.div>
                    <motion.h3 
                      className="font-display text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        transition: { duration: 3, repeat: Infinity, ease: "linear" }
                      }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      Ready to Join?
                    </motion.h3>
                  </motion.div>
                  <motion.p 
                    className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    animate={{
                      opacity: [0.8, 1, 0.8],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                  >
                    Book your trial session today and experience professional basketball training 
                    with our expert coaches. 
                    <motion.span 
                      className="text-primary font-semibold"
                      animate={{
                        scale: [1, 1.05, 1],
                        transition: { duration: 2, repeat: Infinity }
                      }}
                    >
                      Free trial available!
                    </motion.span>
                  </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  <motion.div
                    className="group"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
                  >
                    <Card className="glass-card border-glass-border bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-green-600 dark:text-green-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                              Shree Sir
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-xs mb-2">
                              Head Coach
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-sm font-semibold text-gray-900 dark:text-white">
                                +91 90042 96609
                              </span>
                              <div className="flex gap-2">
                                <button className="p-2 bg-green-100 dark:bg-green-900 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                                  <span className="text-green-600 dark:text-green-400 text-sm">📱</span>
                                </button>
                                <button className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                                  <span className="text-blue-600 dark:text-blue-400 text-sm">📞</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    className="group"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.7 }}
                  >
                    <Card className="glass-card border-glass-border bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                              Rishi Sir
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-xs mb-2">
                              Assistant Coach
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-sm font-semibold text-gray-900 dark:text-white">
                                
                              </span>
                              <div className="flex gap-2">
                                <button className="p-2 bg-green-100 dark:bg-green-900 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                                  <span className="text-green-600 dark:text-green-400 text-sm">📱</span>
                                </button>
                                <button className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                                  <span className="text-blue-600 dark:text-blue-400 text-sm">📞</span>
                                </button>
                              </div>
                            </div>
                </div>
              </div>
            </CardContent>
          </Card>
                  </motion.div>
                </div>

                <motion.div 
                  className="text-center mt-8"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                >
                  <p className="text-sm text-muted-foreground">
                    📞 Call now for immediate assistance or 📱 WhatsApp for quick responses
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};