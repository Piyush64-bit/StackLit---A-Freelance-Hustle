import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, TrendingUp, Database, Brain, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'Piyush Soni',
      role: 'Full Stack Developer',
      icon: Code,
      description: 'Expert in React, Node.js, and modern web technologies. Passionate about creating scalable applications.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      name: 'Aman Karar',
      role: 'UI/UX Designer',
      icon: Palette,
      description: 'Crafts clean, user-friendly interfaces that blend design thinking with tech, turning complex ideas into intuitive digital experiences.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      name: 'Aman Saxena',
      role: 'SEO/Digital Marketing',
      icon: TrendingUp,
      description: 'Digital marketing strategist focused on driving growth through SEO and performance marketing.',
      color: 'from-emerald-500 to-green-600',
    },
    {
      name: 'Ujjwal Agarwal',
      role: 'Backend Developer + AI/ML',
      icon: Database,
      description: 'Backend architect and AI specialist. Expert in scalable systems and intelligent automation.',
      color: 'from-orange-500 to-red-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
  Once just four friends swapping code snippets and late-night design ideas in school corridors, we've grown into StackLit — a team blending creativity, code, and clever strategy. Today, Piyush crafts full-stack magic, Aman K. shapes pixels into stunning UI/UX, Aman S. turns algorithms into audience reach, and Ujjwal builds the brains behind it all with backend architecture and AI. What started as classroom hustle is now a studio where digital dreams go live — driven by passion, friendship, and the love of building experiences that actually <em>matter</em>.
</p>

        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className={`h-32 bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <member.icon className="w-12 h-12 text-white" />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Why Choose DevCraft?</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8 mb-6">
              <div className="flex items-center space-x-3">
                <Brain className="w-8 h-8 text-indigo-200" />
                <span className="font-semibold">AI-Powered Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Search className="w-8 h-8 text-indigo-200" />
                <span className="font-semibold">SEO Optimized</span>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="w-8 h-8 text-indigo-200" />
                <span className="font-semibold">Modern Tech Stack</span>
              </div>
            </div>
            <Link
              to="/team"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-50 transition-colors"
            >
              Learn More About Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;