import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "../../imports/WhatsApp_Image_2026-04-17_at_1.23.52_PM.jpeg";
import resumePdf from "../../imports/Kishan_resume.pdf";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700/30 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-2xl opacity-50" />
              <img
                src={profileImage}
                alt="Kishan Maurya"
                className="w-48 h-48 rounded-full object-cover border-4 border-purple-500/30 relative z-10"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Kishan Maurya
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6"
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Computer Science Engineer | Java Developer | Cyber Security Enthusiast
            </p>
            <p className="text-lg text-gray-400 italic max-w-2xl">
              "Passionate about building secure and intelligent software systems."
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex gap-4 mb-8"
          >
            <a
              href="https://github.com/KISHAN840"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10"
            >
              <Github className="w-6 h-6 text-gray-300" />
            </a>
            <a
              href="https://linkedin.com/in/kishanmauryaniet"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10"
            >
              <Linkedin className="w-6 h-6 text-gray-300" />
            </a>
            <a
              href="mailto:Kishanmaurya8473@gmail.com"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10"
            >
              <Mail className="w-6 h-6 text-gray-300" />
            </a>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-6 text-lg"
              asChild
            >
              <a href={resumePdf} download="Kishan_Maurya_Resume.pdf">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}