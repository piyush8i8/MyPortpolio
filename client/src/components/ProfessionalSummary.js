import React from "react";
import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaMobile, 
  FaRocket, 
  FaLightbulb,
  FaChartLine,
  FaHandshake
} from "react-icons/fa";

const ProfessionalSummary = () => {
  const highlights = [
    {
      icon: FaLaptopCode,
      title: "Full-Stack Development",
      description: "Robust experience in frontend and backend technologies",
      color: "text-blue-400"
    },
    {
      icon: FaMobile,
      title: "Mobile Development",
      description: "Basic Flutter development skills for cross-platform apps",
      color: "text-green-400"
    },
    {
      icon: FaRocket,
      title: "Scalable Solutions",
      description: "Designing applications that grow with your business needs",
      color: "text-purple-400"
    },
    {
      icon: FaLightbulb,
      title: "User-Centric Design",
      description: "Creating intuitive and engaging user experiences",
      color: "text-yellow-400"
    },
    {
      icon: FaChartLine,
      title: "Latest Technologies",
      description: "Staying current with modern development trends",
      color: "text-indigo-400"
    },
    {
      icon: FaHandshake,
      title: "Professional Growth",
      description: "Committed to continuous learning and improvement",
      color: "text-pink-400"
    }
  ];

  return (
    <section id="professional-summary" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Professional Summary
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my expertise and commitment to excellence
          </p>
        </motion.div>

        {/* Main Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              A dedicated <span className="text-blue-400 font-semibold">Full-Stack Developer</span> with robust experience in 
              <span className="text-purple-400 font-semibold"> frontend</span>, 
              <span className="text-green-400 font-semibold"> backend</span>, and basic 
              <span className="text-indigo-400 font-semibold"> Flutter development</span>. 
              Skilled in designing scalable, user-centric applications using the latest technologies.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Committed to staying current with industry trends and contributing to impactful projects with a strong emphasis on 
              <span className="text-pink-400 font-semibold"> professional growth</span>.
            </p>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 hover-lift text-center"
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 mb-4 ${highlight.color}`}>
                <highlight.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              My Mission
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              To leverage cutting-edge technologies and innovative thinking to create digital solutions that not only meet 
              current needs but anticipate future challenges. I strive to bridge the gap between complex technical 
              requirements and intuitive user experiences, ensuring every project delivers measurable value and 
              lasting impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
