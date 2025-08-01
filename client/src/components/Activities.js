import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaCode, FaGraduationCap, FaMicrophone } from "react-icons/fa";

const activities = [
  {
    title: "Class Representative (5 Semesters)",
    description: "Actively represented classmates' interests and coordinated events.",
    icon: FaUsers,
    period: "Consecutive 5 Semesters",
    color: "text-blue-400"
  },
  {
    title: "Event Management for College Events",
    description: "Organized and managed college-wide cultural and academic events.",
    icon: FaMicrophone,
    period: "During College Years",
    color: "text-orange-400"
  },
  {
    title: "Leadership Roles in Academic and Cultural Activities",
    description: "Led various initiatives and activities promoting student engagement and learning.",
    icon: FaGraduationCap,
    period: "Throughout College",
    color: "text-purple-400"
  },
  {
    title: "Teamwork in Diverse Group Settings",
    description: "Collaborated with peers in different projects and activities.",
    icon: FaUsers,
    period: "Ongoing",
    color: "text-green-400"
  },
  {
    title: "Problem Solving during event coordination and projects",
    description: "Effectively solved challenges and improved outcomes during events and academic projects.",
    icon: FaCode,
    period: "Consistently",
    color: "text-yellow-400"
  }
];

const Activities = () => {
  return (
    <section id="activities" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Extra-Curricular Activities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond coding, I actively contribute to the tech community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-6 hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon className={`text-3xl ${activity.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
                    <p className="text-gray-300 mb-3">{activity.description}</p>
                    <span className="text-sm text-blue-400 font-medium">{activity.period}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;
