import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

export function InternshipsSection() {
  const internships = [
    {
      role: "Web Developer Intern",
      company: "Prodigy InfoTech",
      duration: "Remote",
      description:
        "Developed responsive web applications and collaborated with cross-functional teams to deliver high-quality projects. Worked on front-end development using modern frameworks and best practices.",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      role: "Web Developer Intern",
      company: "Bharat Intern",
      duration: "Remote",
      description:
        "Built and maintained web applications, focusing on user experience and performance optimization. Gained hands-on experience in full-stack development and agile methodologies.",
      gradient: "from-cyan-600 to-blue-600",
    },
  ];

  return (
    <section id="internships" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-900/10 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Internship Experience
          </h2>

          <div className="space-y-6">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-gradient-to-br ${internship.gradient} rounded-lg flex-shrink-0 mt-1`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl text-gray-100 mb-2">{internship.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-gray-400">
                      <span className="text-lg">{internship.company}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-500" />
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {internship.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {internship.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
