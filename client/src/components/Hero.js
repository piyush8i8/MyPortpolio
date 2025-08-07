import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaDownload, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import Resume from "../assets/docs/piyush-updated-resume-9.pdf";

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/piyush8i8", color: "text-gray-400 hover:text-white" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/piyush-kumar-464b16251", color: "text-blue-400 hover:text-blue-300" },
    { icon: FaWhatsapp, href: "https://api.whatsapp.com/send?phone=916203329639", color: "text-green-400 hover:text-green-300" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2s"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4s"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
        
          <motion.div variants={itemVariants} className="mb-12">
            <motion.div
              className="relative mx-auto w-[300px] md:w-[360px] lg:w-[420px] h-[220px] md:h-[250px] lg:h-[300px] overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              {/* <img
                src="/images/image.png"
                alt="Piyush Kumar - Creative Developer"
                className="w-full h-full object-contain p-4 hover:scale-110 transition-transform duration-700 ease-in-out"
                onError={(e) => { 
                  console.log('Image failed to load:', e.target.src);
                  e.target.style.display = 'none'; 
                }}
              /> */}

  <div className="relative w-full max-w-md mx-auto p-4">
    <div className="relative z-10">
      <img
        src="/images/image.png"
        alt="Piyush Kumar - Creative Developer"
        className="w-full h-auto rounded-xl shadow-xl transition-transform duration-700 ease-in-out hover:scale-105"
        onError={(e) => {
          console.error("Image failed to load:", e.target.src);
          e.target.style.display = "none";
        }}
      />
    </div>

    {/* Gradient background */}
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-xl" />
  </div>

              

            
              <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none"></div>

             
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-10 pointer-events-none"></div>

             
              <div className="absolute top-4 left-4 w-3 h-3 bg-white/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
            </motion.div>
          </motion.div>

         
          <motion.div variants={itemVariants} className="mb-4">
            <p className="text-lg md:text-xl text-gray-300 font-medium">
              Hello, I'm
            </p>
          </motion.div>

          
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Piyush Kumar
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white h-16 flex items-center justify-center">
              <span className="mr-2">I'm a</span>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "MERN Stack Developer",
                    "Flutter Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  typeSpeed: 80,
                }}
              />
            </div>
          </motion.div>

         
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A dedicated Full-Stack Developer with experience in frontend, backend, and Flutter development. 
              Passionate about building scalable and user-centric solutions with the latest technologies. Always evolving and contributing to impactful software projects.
            </p>
          </motion.div>

         
          <motion.div variants={itemVariants} className="mb-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://api.whatsapp.com/send?phone=916203329639"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Hire Me</span>
              </motion.a>

              <motion.a
                href={Resume}
                download="Piyush_Kumar_Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
              >
                <FaDownload className="w-5 h-5" />
                <span>Download CV</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 bg-white/10 border border-white/20 rounded-full transition-all duration-300 ${social.color} hover:shadow-lg`}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
