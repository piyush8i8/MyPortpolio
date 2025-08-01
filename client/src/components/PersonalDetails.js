import React from "react";
import { motion } from "framer-motion";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaGithub, 
  FaLinkedin, 
  FaMapMarkerAlt,
  FaGlobe,
  FaCalendarAlt
} from "react-icons/fa";

const PersonalDetails = () => {
  const personalInfo = [
    {
      icon: FaUser,
      label: "Name",
      value: "Piyush Kumar",
      color: "text-blue-400"
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "piyush7p54@gmail.com",
      link: "mailto:piyush7p54@gmail.com",
      color: "text-red-400"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 6203329639",
      link: "tel:+916203329639",
      color: "text-green-400"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/piyush8i8",
      link: "https://github.com/piyush8i8",
      color: "text-gray-400"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/piyush-kumar-464b16251",
      link: "https://linkedin.com/in/piyush-kumar-464b16251",
      color: "text-blue-500"
    },
    // {
    //   icon: FaGlobe,
    //   label: "Portfolio",
    //   value: "portpolio-piyush-kumar.onrender.com",
    //   link: "https://portpolio-piyush-kumar.onrender.com",
    //   color: "text-purple-400"
    // },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Patna, Bihar, India",
      color: "text-orange-400"
    },
    // {
    //   icon: FaCalendarAlt,
    //   label: "Availability",
    //   value: "09/2022 – 10/2026",
    //   color: "text-indigo-400"
    // }
  ];

  return (
    <section id="personal-details" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Personal Details
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know me better - here's my contact information and professional details
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 hover-lift"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 ${info.color}`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {info.label}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-sm">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Professional Tagline
            </h3>
            <p className="text-xl text-gray-300 italic">
              "Passion for Scalable & User-Centric Solutions"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalDetails;
