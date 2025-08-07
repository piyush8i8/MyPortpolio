import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaMobile, FaCode, FaDesktop } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiFlutter, SiWix } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Craftify Website",
    description: "Built a fully functional e-commerce website with admin panel for product and order management using MERN Stack.",
    technologies: [
      { name: "React", icon: FaReact, color: "text-blue-400" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "Express", icon: SiExpress, color: "text-gray-400" }
    ],
    image: "https://blog.pwskills.com/wp-content/uploads/2024/09/MERN-Stack-Full-Form-1024x538.webp",
    githubUrl: "https://github.com/piyush8i8/E-commerce-Website",
    liveUrl: "#",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Visitor Project",
    description: "Creative frontend-based and backend project showcasing modern design principles and user interface development.",
    technologies: [
      { name: "React", icon: FaReact, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" }
    ],
    image: "https://siterecording.com/images/blog/website-visitors-tools.png?v=1677668458041789516",
    githubUrl: "https://github.com/piyush8i8/Visitor-WebApp",
    liveUrl: "#",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing skills, projects, and experience built with MERN Stack and modern design.",
    technologies: [
      { name: "React", icon: FaReact, color: "text-blue-400" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "Express", icon: SiExpress, color: "text-gray-400" }
    ],
    image: "https://eu-images.contentstack.com/v3/assets/blt892f41c9788ae399/blt8b8119d066a83fac/65ba056da9ee99040a25afdc/bruno_simon_portfolio.jpg?",
    githubUrl: "https://github.com/piyush8i8/MyPortpolio",
    liveUrl: "https://portpolio-piyush-kumar.onrender.com",
    category: "Full Stack"
  },
  {
    id: 4,
    title: "Flutter Weather Application",
    description: "Real-time weather updates with user-friendly UI built using Flutter for cross-platform mobile development.",
    technologies: [
      { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
      { name: "Mobile", icon: FaMobile, color: "text-green-400" }
    ],
    image: "https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Flutter-Projects-2048x1000.png",
    githubUrl: "https://github.com/piyush8i8",
    liveUrl: "#",
    category: "Mobile"
  },
  {
    id: 5,
    title: "Console-based Voting Application",
    description: "Built using command-line interface showcasing problem-solving skills and console application development.",
    technologies: [
      { name: "C++", icon: FaCode, color: "text-blue-500" },
      { name: "Console", icon: FaDesktop, color: "text-gray-400" }
    ],
    image: "https://tse4.mm.bing.net/th/id/OIP.Th6e4pBF4LZlG9vdP43dCQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    githubUrl: "https://github.com/piyush8i8/Votting_system",
    liveUrl: "#",
    category: "Console"
  },
  {
    id: 6,
    title: "Masum App",
    description: "Mobile application project demonstrating Flutter development skills and modern app architecture.",
    technologies: [
      { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
      { name: "Mobile", icon: FaMobile, color: "text-green-400" }
    ],
    image: "https://i.pinimg.com/originals/3d/a0/97/3da097bfde49aef8e7b0aa00b7ac3ae1.png",
    githubUrl: "https://github.com/piyush8i8/Mausam_Appp",
    liveUrl: "#",
    category: "Mobile"
  }
];

const Projects = () => {
  const [filter, setFilter] = React.useState("All");

  const categories = ["All", "Full Stack", "Frontend", "Mobile", "Console"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and experience
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "glass text-gray-300 hover:text-white hover:shadow-md"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={`${project.id}-${filter}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden hover-lift group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </motion.a>
                    {/* <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </motion.a> */}
                  </div>
                </div>
              </div>

              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1 px-2 py-1 rounded-lg glass-dark"
                    >
                      <tech.icon className={`w-4 h-4 ${tech.color}`} />
                      <span className="text-xs text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                 <a
  href={project.githubUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 py-2 px-5 rounded-xl text-center text-sm font-semibold text-white 
             backdrop-blur-md bg-white/10 border border-white/20 shadow-md 
             hover:bg-white/20 hover:shadow-lg transition-all duration-300"
>
   View Code
</a>

                  {/* <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-center text-sm font-medium hover:shadow-lg transition-all"
                  >
                    Live Demo
                  </a> */}


                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
