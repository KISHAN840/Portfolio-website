import { motion } from "motion/react";
import { GraduationCap, Code2, Shield } from "lucide-react";

export function AboutSection() {
  const interests = [
    { icon: Code2, text: "Software Development" },
    { icon: GraduationCap, text: "Cloud Computing" },
    { icon: Shield, text: "Cyber Security" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm a B.Tech Computer Science Engineering student at NIET (2022–2026) with a strong passion for 
              creating innovative solutions. My journey in technology is driven by curiosity and a commitment 
              to building secure, efficient, and user-friendly applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors"
                >
                  <interest.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <p className="text-gray-300 text-center">{interest.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl text-gray-200">Education</h3>
              </div>
              <p className="text-gray-300">
                <strong>B.Tech in Computer Science Engineering</strong>
              </p>
              <p className="text-gray-400">
                Noida Institute of Engineering and Technology (NIET)
              </p>
              <p className="text-gray-500">2022 – 2026</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
