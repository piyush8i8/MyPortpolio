import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillWave, FaStar } from "react-icons/fa";

const internships = [
  {
    company: "The Edglide Project",
    position: "Web Developer & Graphics Designer",
    duration: "04/2024 – 09/2024",
    location: "On-site",
    description: "Developed websites using Wix, designed responsive layouts, maintained client sites, and created graphics. Gained hands-on experience in web development and design.",
    technologies: ["Wix", "Web Design", "Graphics Design", "Responsive Design"],
    stipend: "₹10,000 monthly stipend",
    achievements: ["Successfully delivered multiple client projects", "Improved website performance", "Created engaging graphics"]
  },
  {
    company: "ISB Mohali",
    position: "Interview Coordinator",
    duration: "12/2023 – 01/2024",
    location: "On-site",
    description: "Facilitated interviews, coordinated schedules, and managed communication between candidates and interviewers. Enhanced organizational and communication skills.",
    technologies: ["Communication", "Coordination", "Scheduling", "Management"],
    stipend: "Voluntary Position",
    achievements: ["Coordinated 50+ interviews", "Improved process efficiency", "Enhanced candidate experience"]
  }
];

const Internships = () => {
  return (
    <section id="internships" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Internships
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional experience gained through internships
          </p>
        </motion.div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-8 hover-lift"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                    <FaBriefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{internship.position}</h3>
                    <p className="text-lg text-blue-400 font-medium">{internship.company}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span>{internship.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {internship.description}
              </p>

              {/* Stipend Information */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <FaMoneyBillWave className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-medium">{internship.stipend}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {internship.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Achievements */}
              {internship.achievements && internship.achievements.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <span>Key Achievements:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.achievements.map((achievement, achIndex) => (
                      <span
                        key={achIndex}
                        className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full border border-yellow-500/30"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
