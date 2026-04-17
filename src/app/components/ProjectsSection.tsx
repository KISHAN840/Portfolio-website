import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "Krishi Mitra – Smart Agriculture Assistant",
      description:
        "AI-based farming solution that helps farmers monitor crop health and get agricultural recommendations. Built with modern technologies to assist farmers in making data-driven decisions.",
      technologies: ["AI/ML", "IoT", "Mobile App"],
      github: "https://github.com/KISHAN840/Krishi_Mitra",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      title: "Hospital Management System",
      description:
        "Comprehensive hospital management solution for managing patient records, appointments, and medical staff. Features include patient registration, doctor scheduling, and billing management.",
      technologies: ["Java", "MySQL", "Swing"],
      github:
        "https://github.com/KISHAN840/Hospital-Management-System",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "AgriGuard",
      description:
        "An agricultural app for farmers. It is user friendly and has many features like flood alerts, crop recommendation, irrigation requirements, graphical representation of precipitation and soil moisture data along with many more useful features to help farmers.",
      technologies: ["Java EE", "JSP", "Servlets"],
      github: "https://github.com/KISHAN840/AgriGuard",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: " Money Mate Salary &  Management System",
      description:
        "MoneyMate is a comprehensive desktop application developed to empower users in managing their personal finances efficiently.",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/KISHAN840/Money-Mate",
      gradient: "from-orange-600 to-red-600",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group"
              >
                <div
                  className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-6`}
                />

                <h3 className="text-2xl text-gray-100 mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(
                    (tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-sm bg-gradient-to-r ${project.gradient} bg-opacity-20 text-gray-300 rounded-full border border-white/20`}
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/5 border-white/20 hover:bg-white/10 text-gray-300"
                    onClick={() =>
                      window.open(project.github, "_blank")
                    }
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}