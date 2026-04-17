import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Github,
  ExternalLink,
  Sprout,
  Hospital,
  Pill,
  DollarSign,
} from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const projects = [
    {
      title: "Krishi Mitra",
      subtitle: "Smart Agriculture Assistant",
      description:
        "AI-based farming solution that helps farmers monitor crop health and get agricultural recommendations using machine learning algorithms.",
      icon: Sprout,
      tech: ["AI/ML", "Python", "TensorFlow", "IoT"],
      github: "https://github.com/KISHAN840/Krishi_Mitra",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-900/30 to-emerald-900/20",
      borderColor: "border-green-700/50",
      hoverBorder: "hover:border-green-500",
    },
    {
      title: "Hospital Management System",
      subtitle: "Java & MySQL",
      description:
        "Comprehensive healthcare management solution for patient records, appointments, billing, and staff management with secure database integration.",
      icon: Hospital,
      tech: ["Java", "MySQL", "JDBC", "Swing"],
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-900/30 to-cyan-900/20",
      borderColor: "border-blue-700/50",
      hoverBorder: "hover:border-blue-500",
    },
    {
      title: "AgriGuard ",
      subtitle: "Java EE",
      description:
        "An agricultural app for farmers. It is user friendly and has many features like flood alerts, crop recommendation, irrigation requirements, graphical representation of precipitation and soil moisture data along with many more useful features to help farmers.",
      icon: Pill,
      tech: ["Java EE", "JSP", "Servlets", "JDBC"],
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-900/30 to-pink-900/20",
      borderColor: "border-purple-700/50",
      hoverBorder: "hover:border-purple-500",
    },
    {
      title: "Money Mate Salary & Expenses  System",
      subtitle: "Java Springboot ,PHP & MySQL",
      description:
        "MoneyMate is a comprehensive desktop application developed to empower users in managing their personal finances efficiently.",
      icon: DollarSign,
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "JavaSpringboot"],
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-900/30 to-red-900/20",
      borderColor: "border-orange-700/50",
      hoverBorder: "hover:border-orange-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in
            software development and problem-solving
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className={`group bg-gradient-to-br ${project.bgGradient} backdrop-blur-sm border ${project.borderColor} rounded-2xl p-6 ${project.hoverBorder} transition-all duration-300 hover:shadow-2xl cursor-pointer`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5 text-gray-300" />
                        </a>
                      )}
                      <div className="p-2 bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-5 h-5 text-gray-300" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}