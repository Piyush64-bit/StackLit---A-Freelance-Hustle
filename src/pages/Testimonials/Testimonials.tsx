import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      content: 'DevCraft transformed our digital presence completely. Their attention to detail and innovative solutions exceeded our expectations. The team delivered on time and within budget.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'TechStart Inc.',
    },
    {
      name: 'Michael Chen',
      position: 'Founder, EcoTech Solutions',
      content: 'Working with DevCraft was a game-changer for our startup. Their AI-powered solutions helped us automate processes and scale efficiently. Highly recommended!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'EcoTech Solutions',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, Creative Agency',
      content: 'The team at DevCraft created a stunning website that perfectly captures our brand essence. Their UX/UI design skills are exceptional, and the SEO results speak for themselves.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'Creative Agency',
    },
    {
      name: 'David Park',
      position: 'CTO, FinanceFlow',
      content: 'DevCraft delivered a complex financial dashboard that handles millions of transactions. Their technical expertise and project management skills are outstanding.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'FinanceFlow',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with DevCraft.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-8 md:p-12"
              >
                <div className="flex items-center justify-center mb-6">
                  <Quote className="w-12 h-12 text-indigo-200 dark:text-indigo-400" />
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 text-center mb-8 leading-relaxed font-medium">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div className="flex flex-col items-center">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover mb-4 shadow-lg"
                  />
                  
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                  
                  <div className="flex items-center mt-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrev}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">5.0</div>
            <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;