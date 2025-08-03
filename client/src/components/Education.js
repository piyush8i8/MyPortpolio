import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaMedal } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor in CSE",
    institution: "SVIET",
    duration: "09/2022 – 10/2026",
    location: "Punjab, India",
    grade: "CGPA: 8.4",
    description: "Pursuing comprehensive study in Computer Science Engineering with focus on software development, data structures, algorithms, and modern technologies.",
    achievements: ["College Topper in 4th Semester", "Class Representative (5 Semesters)", "Event Management for College Events"]
  },
  {
    degree: "Intermediate (Science)",
    institution: "Shivam Convent",
    duration: "08/2019 – 06/2021",
    location: "Patna, Bihar",
    grade: "93%",
    description: "Completed intermediate education in Science stream with excellent academic performance.",
    achievements: ["Academic Excellence", "Science Stream Topper"]
  },
  {
    degree: "Matriculation",
    institution: "Shivam Convent",
    duration: "03/2017 – 05/2019",
    location: "Patna, Bihar",
    grade: "85%",
    description: "Successfully completed matriculation with strong foundation in core subjects.",
    achievements: ["Good Academic Performance", "Active Participation in School Activities"]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and educational background
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-8 hover-lift"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0">
                    <FaGraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-lg text-blue-400 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaMedal className="w-4 h-4 text-yellow-400" />
                    <div className="cgpa-container">
                      <span className="cgpa-text">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>

              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <span
                        key={achIndex}
                        className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30"
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

export default Education;
