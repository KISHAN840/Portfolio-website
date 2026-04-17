import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Wrench, Lightbulb } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const languages = [
    { name: 'Java', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'Python', level: 85, color: 'from-blue-500 to-cyan-500' },
    { name: 'SQL', level: 80, color: 'from-purple-500 to-pink-500' },
    { name: 'JavaScript', level: 75, color: 'from-yellow-500 to-orange-500' },
  ];

  const tools = [
    'VS Code',
    'IntelliJ IDEA',
    'Android Studio',
    'Git & GitHub',
    'MySQL',
    'Postman',
  ];

  const concepts = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Object-Oriented Programming',
    'Web Development',
    'Software Engineering',
    'System Design',
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools I use to bring ideas to life
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Languages</h3>
              </div>

              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{lang.name}</span>
                      <span className="text-gray-400 text-sm">{lang.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${lang.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Tools</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-lg text-cyan-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Concepts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Concepts</h3>
              </div>

              <ul className="space-y-3">
                {concepts.map((concept, index) => (
                  <motion.li
                    key={concept}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-pink-400 mt-1">▹</span>
                    <span>{concept}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
