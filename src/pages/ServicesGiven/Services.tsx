import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Image, 
  TrendingUp, 
  MessageCircle, 
  Brain, 
  FolderKanban, 
  Search 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web applications using React, Node.js, and modern frameworks',
      color: 'from-blue-500 to-indigo-600',
      features: ['React & Next.js', 'Node.js & Express', 'Database Design', 'API Development'],
    },
    {
      icon: Palette,
      title: 'UX/UI Design',
      description: 'User-centered design that converts visitors into customers',
      color: 'from-purple-500 to-pink-600',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: Image,
      title: 'Logo Design',
      description: 'Memorable brand identities that stand out in the market',
      color: 'from-emerald-500 to-green-600',
      features: ['Brand Strategy', 'Logo Creation', 'Brand Guidelines', 'Visual Identity'],
    },
    {
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      description: 'Drive organic traffic and boost your online presence',
      color: 'from-orange-500 to-red-600',
      features: ['SEO Optimization', 'Content Strategy', 'Social Media', 'Analytics'],
    },
    {
      icon: MessageCircle,
      title: 'Chatbot Development',
      description: 'AI-powered chatbots for customer service and engagement',
      color: 'from-cyan-500 to-blue-600',
      features: ['Natural Language Processing', 'Integration', 'Training', 'Maintenance'],
    },
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Custom AI solutions to automate and optimize your business',
      color: 'from-violet-500 to-purple-600',
      features: ['Machine Learning', 'Data Analysis', 'Automation', 'Predictive Models'],
    },
    {
      icon: FolderKanban,
      title: 'Project Management',
      description: 'Agile project management ensuring timely delivery',
      color: 'from-rose-500 to-pink-600',
      features: ['Agile Methodology', 'Timeline Management', 'Quality Assurance', 'Communication'],
    },
    {
      icon: Search,
      title: 'UX Research',
      description: 'Data-driven insights to improve user experience',
      color: 'from-teal-500 to-cyan-600',
      features: ['User Testing', 'Analytics', 'A/B Testing', 'Research Reports'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we offer comprehensive digital solutions 
            that help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className={`h-20 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="text-sm text-gray-500 dark:text-gray-400 flex items-center"
                    >
                      <div className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
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
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Don't see what you're looking for?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We love taking on unique challenges. Let's discuss your custom requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors"
            >
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;