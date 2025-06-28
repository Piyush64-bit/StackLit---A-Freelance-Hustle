import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import teamwork from '../../../assets/Teamwork.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#F5F3EF] via-[#EDE9FE] to-[#FFE4E6] dark:from-gray-900 dark:via-gray-900 dark:to-indigo-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-emerald-200/30 to-blue-200/30 dark:from-emerald-500/20 dark:to-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Welcome to the future of digital experiences
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              We Build.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                We Design.
              </span>{" "}
              We Market.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                Together.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            >
              A team of developers, designers, and AI experts delivering
              impactful digital experiences that transform businesses and
              delight users.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get in Touch
                <ChevronRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .querySelector("#portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
              >
                View Our Work
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  50+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  4
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Expert Team Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  100%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Client Satisfaction
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative w-full h-60 sm:h-64 md:h-72 lg:h-[400px]">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-2xl"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-2 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-3xl opacity-80"
              />
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-4 bg-white dark:bg-gray-800 rounded-3xl shadow-inner overflow-hidden"
              >
                <img
                  src={teamwork}
                  alt="Innovation Visual"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
