import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  TrendingUp,
  Database,
  Award,
  Calendar,
  MapPin,
  Mail,
  Linkedin,
  Github,
  Twitter,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import piyush from "../../assets/PiyushProfile.jpg";
import bittu from "../../assets/AmanKararProfile.jpg";
import jimmy from "../../assets/AmanSaxenaProfile.jpg";
import ujjwal from "../../assets/UjjwalProfile.jpg";

const TeamShowcase = () => {
  const teamMembers = [
    {
      id: "aman-karar",
      name: "Aman Karar",
      role: "UI/UX Designer",
      title: "Lead UI/UX Strategist",
      img: bittu,
      location: "Jaipur",
      experience: "2+ Years",
      email: "amankarar240@gmail.com",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
      about: `Aman is a UI/UX Designer with 2+ years of hands-on experience in creating clean, user-friendly digital interfaces. He's currently in his final year of Computer Science Engineering at GIT, Jaipur, where he's been blending design thinking with tech skills to build meaningful user experiences.

He’s also interning as the COO – Technical Department at the Renu Sharma Foundation, where he contributes to impactful, design-led tech initiatives. Aman enjoys turning complex ideas into simple, usable designs — with a focus on both form and function. Always learning, always designing.`,

      skills: [
        "UI/UX Design",
        "Figma & Adobe Creative Suite",
        "User Research & Usability Testing",
        "Wireframing & Prototyping",
        "Design Systems",
        "Design Thinking",
        "Responsive Web Design",
        "Interaction Design",
      ],

      certifications: [
        {
          name: "Build Dynamic User Interfaces (UI) for Websites",
          issuer: "Google",
          date: "May 2024",
          icon: Award,
        },
        {
          name: "Foundations of User Experience (UX) Design",
          issuer: "Google",
          date: "May 2024",
          icon: Award,
        },
        {
          name: "Create High-Fidelity Designs and Prototypes in Figma",
          issuer: "Google",
          date: "May 2024",
          icon: Award,
        },
      ],
      projects: [
        "AI-powered Design Tool",
        "Healthcare App with 500K+ downloads",
        "FinTech Dashboard Redesign",
        "E-learning Platform UX",
      ],
      color: "from-yellow-500 to-pink-600",
      icon: Palette,
    },
    {
      id: "aman-saxena",
      name: "Aman Saxena",
      role: "SEO/Digital Marketing",
      title: "Performance Marketing Expert",
      img: jimmy,
      location: "Jaipur",
      experience: "2+ Years",
      email: "aman.s@devcraft.com",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
      about: `Aman is a driven digital marketing enthusiast with 2+ years of hands-on experience in SEO, content strategy, and performance marketing. A BBA graduate from Poddar University, he’s also mastered the basics of programming with C++, blending creative marketing skills with technical know-how.

Currently crushing it as a Digital Marketing Intern at Arena Infosolution, Aman loves staying ahead of digital trends and experimenting with the latest tools to boost brand visibility and engagement. His passion? Turning data-driven insights into real, measurable growth.`,
      skills: [
        "SEO & Technical SEO",
        "Google Analytics & Search Console",
        "Content Marketing",
        "Social Media Marketing",
        "PPC & Google Ads",
        "Email Marketing",
        "Conversion Optimization",
        "Marketing Automation",
      ],
      certifications: [
        {
          name: "Digital Marketing Course",
          issuer: "Arena Tranings",
          date: "July 204",
          icon: Award,
        },
      ],
      projects: [
        "300% increase in organic traffic for SaaS client",
        "Multi-channel campaign with 5x ROAS",
        "SEO strategy for e-commerce (2M+ visitors)",
        "Content marketing for B2B tech company",
      ],
      color: "from-emerald-500 to-green-600",
      icon: TrendingUp,
    },
    {
      id: "piyush-soni",
      name: "Piyush Soni",
      role: "Full Stack Developer",
      title: "Full Stack Developer & Tech Lead",
      img: piyush,
      location: "Jaipur",
      experience: "5+ Years",
      email: "piiyush.sonii@gmail.com",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
      about: `Piyush is a passionate full-stack developer with 3+ years of hands-on experience in building scalable and user-centric web applications. Currently in his final year of Computer Science Engineering at Global Institute of Technology, Jaipur, he’s been blending technical depth with creative problem-solving to craft impactful digital solutions.

He’s also working as a Java Full-Stack Intern at Groot Software, where he focuses on developing robust backend systems and intuitive frontend interfaces using React, Node.js, and cloud technologies. Piyush loves writing clean, maintainable code that follows best practices — turning complex requirements into efficient, production-ready software.`,
      skills: [
        "React & Next.js",
        "Node.js & Express",
        "TypeScript",
        "PostgreSQL & MongoDB",
        "AWS & Docker",
        "GraphQL & REST APIs",
        "Redux & Context API",
        "Jest & Testing",
      ],
      certifications: [
        {
          name: "Java Full-Stack Development",
          issuer: "Groot Academy",
          date: "June 2025",
          icon: Award,
        },
        {
          name: "Frontend Web Development with React",
          issuer: "Learn and Build",
          date: "July 2023",
          icon: Award,
        },
        {
          name: "Core Java",
          issuer: "Learn and Build",
          date: "Aug 2023",
          icon: Award,
        },
      ],
      projects: [
        "E-commerce Platform with 1M+ users",
        "Real-time Chat Application",
        "Healthcare Management System",
        "Financial Dashboard with Analytics",
      ],
      color: "from-blue-500 to-indigo-600",
      icon: Code,
    },
    {
      id: "ujjwal-agarwal",
      name: "Ujjval Agarwal",
      role: "Backend Developer + AI/ML",
      title: "Backend Architect & AI Engineer",
      img: ujjwal,
      location: "Jaipur",
      experience: "3+ Years",
      email: "ujjval.18@gmail.com",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
      about: `Ujjval Agarwal is a backend architect and AI engineer with 3+ years of experience designing scalable systems and building intelligent applications. Currently in his final year of Computer Science Engineering at JECRC Foundation, Jaipur, he combines deep technical expertise with a passion for innovation.

Ujjval specializes in microservices architecture, cloud computing, and machine learning, crafting backend solutions that can scale to millions of users. Beyond his professional work, he’s deeply engaged in AI research and actively contributes to open-source machine learning projects — always exploring new ways to push technology forward.`,
      skills: [
        "Python & Django",
        "Node.js & Express",
        "Microservices Architecture",
        "Docker & Kubernetes",
        "AWS & GCP",
        "Machine Learning & Deep Learning",
        "PostgreSQL & Redis",
        "API Design & Development",
      ],
      certifications: [
        {
          name: "Artificial Intelligence and Machine Learning Techniques”",
          issuer: "IIT Guwahati",
          date: "July 2024",
          icon: Award,
        },
        {
          name: "Web Development Bootcamp",
          issuer: "Udemy",
          date: "Aug 2023",
          icon: Award,
        },
      ],
      projects: [
        "AI-powered recommendation engine",
        "Microservices platform handling 10M+ requests/day",
        "Real-time analytics system",
        "Machine learning pipeline for fraud detection",
      ],
      color: "from-orange-500 to-red-600",
      icon: Database,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <Link
            to="/"
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link> */}

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Expert Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know the talented individuals behind DevCraft. Each team
            member brings unique expertise and passion to deliver exceptional
            digital solutions.
          </p>
        </motion.div>

        {/* Team Members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className={`grid lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Profile Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${
                  member.color
                } p-8 rounded-3xl text-white ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex items-center space-x-6 mb-6">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-white/90 font-medium mb-2">
                      {member.title}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-white/80">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {member.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {member.experience}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Contact</h4>
                    <div className="flex items-center space-x-2 text-white/90">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{member.email}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Connect</h4>
                    <div className="flex space-x-3">
                      {Object.entries(member.social).map(([platform, url]) => {
                        const Icon =
                          platform === "linkedin"
                            ? Linkedin
                            : platform === "github"
                            ? Github
                            : Twitter;
                        return (
                          <motion.a
                            key={platform}
                            href={url}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                          >
                            <Icon className="w-4 h-4" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Details */}
              <div
                className={`space-y-8 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                {/* About */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    About
                  </h4>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    {member.about.split("\n\n").map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4"
                      >
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Core Skills
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {member.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.02 }}
                        className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Certifications
                  </h4>
                  <div className="space-y-3">
                    {member.certifications.map((cert, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <div className="flex-shrink-0">
                          <cert.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {cert.name}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Notable Projects */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Notable Projects
                  </h4>
                  <ul className="space-y-2">
                    {member.projects.map((project, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                        <span>{project}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work with Our Team?
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how our expertise can help
              bring your vision to life.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-50 transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamShowcase;
