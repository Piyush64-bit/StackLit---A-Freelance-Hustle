import React from "react";
import Hero from "./component/Hero";
import { motion } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  return (
    <main className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-900">
      <Hero />

      {/* Service Glimpse */}
      <section className="py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-indigo-600 mb-4">
            Explore Our Services
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2} className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            From websites to AI tools, we design smart, fast, and scalable solutions. Want the full list? <span className="underline cursor-pointer text-purple-600" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>Check it out</span>.
          </motion.p>
        </motion.div>
      </section>

      {/* About Glimpse */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-indigo-600 mb-4">
            Meet the Team
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2} className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We're a crew of devs, designers & marketers who love building cool things together. Learn more <span className="underline cursor-pointer text-purple-600" onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}>about us</span>.
          </motion.p>
        </motion.div>
      </section>

      {/* Portfolio Glimpse */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-gray-800 dark:to-gray-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-indigo-600 mb-4">
            A Peek Into Our Work
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2} className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We've built apps, portfolios, stores & tools across industries. Want to see them? <span className="underline cursor-pointer text-purple-600" onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}>Click here</span>.
          </motion.p>
        </motion.div>
      </section>

      {/* ...rest of your homepage stays unchanged... */}

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-10"
          >
            Why Choose <span className="text-indigo-600">Us?</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {["Fast Delivery", "Custom Designs", "Real Collaboration", "Results-Driven"].map((label, i) => (
              <motion.div key={i} variants={fadeInUp} custom={i + 1}>
                <h3 className={`text-lg font-semibold ${i === 0 ? "text-indigo-600" : i === 1 ? "text-purple-600" : i === 2 ? "text-emerald-600" : "text-yellow-600"}`}>
                  {i === 0 && "⚡"} {i === 1 && "🎨"} {i === 2 && "🤝"} {i === 3 && "📈"} {label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {i === 0 && "We move quick, but never rush the quality."}
                  {i === 1 && "Your brand, your vibe—crafted from scratch."}
                  {i === 2 && "We work with you, not just for you."}
                  {i === 3 && "Our success = your success. Simple as that."}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-emerald-100 dark:from-gray-800 dark:to-gray-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-10"
          >
            Client Love 💬
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[{
              quote: "These folks are magic makers. They turned my vision into a stunning, high-performing app.",
              name: "Rohan K., Founder @ IdeaLab",
              color: "text-indigo-600"
            }, {
              quote: "I’ve never had a smoother dev experience. The team felt like an extension of mine.",
              name: "Simran T., Creative Director",
              color: "text-purple-600"
            }].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i + 1}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
              >
                <p className="text-gray-700 dark:text-gray-300 mb-4">“{testimonial.quote}”</p>
                <h4 className={`font-semibold ${testimonial.color}`}>— {testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-white text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build?</h2>
        <p className="text-lg mb-6">Let’s co-create something legendary together. 🚀</p>
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Let's Talk →
        </button>
      </motion.section>
    </main>
  );
};

export default Home;