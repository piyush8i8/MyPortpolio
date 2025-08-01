import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaCertificate, FaAward } from "react-icons/fa";

const achievements = [
  {
    title: "1st Place in App Development Hackathon",
    description: "Demonstrated excellence in mobile app development, UI/UX, and teamwork at CGC Jhanjeri",
    icon: FaTrophy,
    date: "2024",
    color: "text-yellow-400",
    location: "CGC Jhanjeri"
  },
  {
    title: "College Topper in 4th Semester",
    description: "Achieved top academic performance in B.Tech CSE 4th semester with outstanding grades",
    icon: FaMedal,
    date: "2024",
    color: "text-blue-400",
    location: "SVIET"
  },
  {
    title: "Best Project Award - Craftify E-commerce",
    description: "Recognized for developing an outstanding full-stack e-commerce platform using MERN stack with advanced features like user authentication, payment integration, and admin dashboard",
    icon: FaAward,
    date: "2024",
    color: "text-purple-400",
    location: "SVIET"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 hover-lift"
              >
                <div className="text-center">
                  <Icon className={`text-5xl mb-4 mx-auto ${achievement.color}`} />
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 mb-4">{achievement.description}</p>
                  <span className="text-sm text-blue-400 font-medium">{achievement.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
