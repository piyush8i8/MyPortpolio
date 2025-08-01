import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const certifications = [
  {
    name: "MERN Stack",
    issuer: "SVIET",
    period: "Feb 2024 – Aug 2024",
  },
  {
    name: "C",
    issuer: "SVIET",
    period: "Oct 2022 – Jan 2023",
  },
  {
    name: "C++",
    issuer: "SVIET",
    period: "Mar 2023 – Jun 2023",
  },
  {
    name: "Communication",
    issuer: "ISB",
    period: "Sep 2023 – Dec 2023",
  },
  {
    name: "Flutter",
    issuer: "SVIET",
    period: "July 2024 – Nov 2025",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-10 text-center text-white">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-6 bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg rounded-xl glass overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-pink-500/10 pointer-events-none"></div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                {cert.name}
              </h3>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold">Issuer:</span> {cert.issuer}
              </p>
              <p className="text-gray-300 flex items-center">
                <FaCalendarAlt className="mr-2" /> {cert.period}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

