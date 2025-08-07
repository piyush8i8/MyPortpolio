import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const certifications = [
  {
    title: "MERN Stack",
    organization: "SVIET",
    duration: "Feb 2024 – Aug 2024",
    icon: FaCertificate,
    color: "text-blue-400"
  },
  {
    title: "C",
    organization: "SVIET",
    duration: "Oct 2022 – Jan 2023",
    icon: FaCertificate,
    color: "text-green-400"
  },
  {
    title: "C++",
    organization: "SVIET",
    duration: "Mar 2023 – Jun 2023",
    icon: FaCertificate,
    color: "text-purple-400"
  },
  {
    title: "Flutter",
    organization: "SVIET",
    duration: "July 2024 – Nov 2025",
    icon: FaCertificate,
    color: "text-indigo-400"
  },
  {
    title: "Communication",
    organization: "ISB",
    duration: "Sep 2023 – Dec 2023",
    icon: FaCertificate,
    color: "text-pink-400"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and completed courses that showcase my technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 hover-lift"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 ${cert.color} flex-shrink-0`}>
                  <cert.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <FaUniversity className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{cert.organization}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{cert.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.6 }}
  viewport={{ once: true }}
  className="mt-16"
>
  <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-2xl relative overflow-hidden">
    
    <div className="absolute inset-0 z-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />

    <h3 className="relative z-10 text-3xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
      🎓 Certification Summary
    </h3>

    <div className="relative z-10 overflow-x-auto rounded-xl">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-white/5 text-blue-300">
            <th className="py-4 px-5 font-semibold">Course</th>
            <th className="py-4 px-5 font-semibold">Institute</th>
            <th className="py-4 px-5 font-semibold">Duration</th>
          </tr>
        </thead>
        <tbody>
          {certifications.map((cert, index) => (
            <tr
              key={index}
              className={`transition-colors ${
                index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'
              } hover:bg-blue-500/10`}
            >
              <td className="py-4 px-5 text-white font-medium">{cert.title}</td>
              <td className="py-4 px-5 text-gray-300">{cert.organization}</td>
              <td className="py-4 px-5 text-gray-400">{cert.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</motion.div>





      </div>
    </section>
  );
};

export default Certifications;
