import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaHeart, FaEnvelope, FaDownload } from "react-icons/fa";
import Resume from "../assets/docs/resume.pdf";

const socialLinks = [
  { 
    icon: FaGithub, 
    href: "https://github.com/piyushkumar", 
    label: "GitHub",
    hoverColor: "hover:text-gray-800 dark:hover:text-white",
    bgHover: "hover:bg-gray-100 dark:hover:bg-gray-700"
  },
  { 
    icon: FaLinkedin, 
    href: "https://linkedin.com/in/piyushkumar", 
    label: "LinkedIn",
    hoverColor: "hover:text-blue-600 dark:hover:text-blue-400",
    bgHover: "hover:bg-blue-50 dark:hover:bg-blue-900/30"
  },
  { 
    icon: FaTwitter, 
    href: "https://x.com/Piyush_kumar09?t=28j_YBsJij_VAPmubVs0Pw&s=09", 
    label: "Twitter",
    hoverColor: "hover:text-blue-500 dark:hover:text-blue-300",
    bgHover: "hover:bg-blue-50 dark:hover:bg-blue-900/30"
  },
  { 
    icon: FaWhatsapp, 
    href: "https://api.whatsapp.com/send?phone=916203329639", 
    label: "WhatsApp",
    hoverColor: "hover:text-green-600 dark:hover:text-green-400",
    bgHover: "hover:bg-green-50 dark:hover:bg-green-900/30"
  },
];

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12 bg-white/80 dark:bg-black/50 backdrop-blur-md border-t border-gray-200/20 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Piyush Kumar
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <motion.a
              href="mailto:piyushkumar@example.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="no-underline px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <FaEnvelope className="w-4 h-4" />
              <span>Email Me</span>
            </motion.a>
            
            <motion.a
              href="https://api.whatsapp.com/send?phone=916203329639"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="no-underline px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Hire Me</span>
            </motion.a>
            
            <motion.a
              href={Resume}
              download="Piyush_Kumar_Resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="no-underline px-6 py-3 bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <FaDownload className="w-4 h-4" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => {
              const SocialIcon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    group p-4 rounded-xl transition-all duration-300
                    bg-white/50 dark:bg-white/5 backdrop-blur-sm
                    border border-gray-200/50 dark:border-white/10
                    text-gray-600 dark:text-gray-400
                    ${social.hoverColor} ${social.bgHover}
                    hover:shadow-lg hover:border-transparent
                  `}
                  aria-label={social.label}
                >
                  <SocialIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </motion.a>
              );
            })}
          </div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent max-w-md"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-2"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
              Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaHeart className="text-red-500 w-4 h-4" />
              </motion.span>
              by Piyush Kumar
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

