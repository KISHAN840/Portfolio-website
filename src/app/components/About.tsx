import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, BookOpen, Code2 } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Main About Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Education</h3>
                  <p className="text-gray-400">B.Tech in Computer Science Engineering</p>
                  <p className="text-cyan-400 font-semibold">NIET (2022–2026)</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate B.Tech CSE student with a keen interest in creating innovative technological solutions. 
                My journey in computer science has equipped me with strong fundamentals and practical experience in various domains.
              </p>
            </motion.div>

            {/* Interests Cards */}
            <div className="grid gap-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-700/50 rounded-xl p-6 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Software Development</h3>
                </div>
                <p className="text-gray-400">Building robust applications with modern technologies and best practices.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 backdrop-blur-sm border border-cyan-700/50 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">Cloud Computing</h3>
                </div>
                <p className="text-gray-400">Exploring cloud technologies and scalable system architecture.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 backdrop-blur-sm border border-pink-700/50 rounded-xl p-6 hover:border-pink-500 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-6 h-6 text-pink-400" />
                  <h3 className="text-xl font-semibold text-white">Cyber Security</h3>
                </div>
                <p className="text-gray-400">Ensuring software security and protecting digital assets.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
