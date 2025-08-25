import { Button } from "@/components/ui/button";
import { Mail, MapPin, Calendar } from "lucide-react";
import ak from "@/assets/auger.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [animateKey, setAnimateKey] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🟢 Re-trigger animation when Home is clicked
  const restartAnimation = () => {
    setAnimateKey((prev) => prev + 1);
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-hero-gradient min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={animateKey} // 🔑 this resets animation when changed
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Profile Picture */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                  <img
                    src={ak}
                    alt="Auger Kidi - Professional Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-3 border-white flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Auger Kidi
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-xl md:text-2xl text-white/90 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Project Manager & Front-End Developer
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Experienced in leading development teams and crafting intuitive
              user interfaces with React, Next.js, and modern web technologies.
            </motion.p>

            {/* Info Row */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Johannesburg, South Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>4+ Years Experience</span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-indigo-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full px-6 py-3 flex items-center gap-2"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
                onClick={() => scrollToSection("experience")}
              >
                View Work Experience
              </Button>

              {/* Extra: Home button to restart animation */}
              <Button
                size="lg"
                variant="ghost"
                className="text-white/80 underline hover:text-white"
                onClick={restartAnimation}
              ></Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
