import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, Shield, Code, Cloud } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 p-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500">
              <div className="w-full h-full rounded-full overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1716471361267-9bc5d3291fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBtYWxlJTIwc3R1ZGVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2NDEyOTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Kishan Maurya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent"
          >
            Kishan Maurya
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-6 text-gray-300"
          >
            <span className="flex items-center gap-2 text-lg md:text-xl">
              <Code className="w-5 h-5 text-cyan-400" />
              Computer Science Engineer
            </span>
            <span className="hidden md:inline text-gray-500">|</span>
            <span className="flex items-center gap-2 text-lg md:text-xl">
              <Code className="w-5 h-5 text-purple-400" />
              Java Developer
            </span>
            <span className="hidden md:inline text-gray-500">|</span>
            <span className="flex items-center gap-2 text-lg md:text-xl">
              <Shield className="w-5 h-5 text-pink-400" />
              Cyber Security Enthusiast
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 italic"
          >
            "Passionate about building secure and intelligent software systems."
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-10"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/KISHAN840"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-300" />
            </a>
            <a
              href="https://linkedin.com/in/kishanmauryaniet"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-gray-300" />
            </a>
            <a
              href="mailto:Kishanmaurya8473@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-gray-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
