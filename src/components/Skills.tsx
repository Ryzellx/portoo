import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Database, Globe, Zap } from 'lucide-react'

const skills = [
  { name: "React.js", level: 76, icon: Code, color: "from-blue-500 to-cyan-500" },
  { name: "TailwindCSS", level: 78, icon: Palette, color: "from-teal-500 to-green-500" },
  { name: "Next.js", level: 83, icon: Globe, color: "from-gray-700 to-gray-900" },
  { name: "UI/UX Design", level: 75, icon: Palette, color: "from-pink-500 to-rose-500" },
  { name: "Mobile Dev", level: 67, icon: Smartphone, color: "from-purple-500 to-indigo-500" },
  { name: "Database", level: 74, icon: Database, color: "from-orange-500 to-red-500" },
  { name: "Performance", level: 79, icon: Zap, color: "from-yellow-500 to-orange-500" }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Teknologi dan tools yang saya kuasai untuk menciptakan pengalaman digital yang luar biasa 🚀
        </p>
      </motion.div>
      
      <motion.div 
        className="grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((sk, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="glass-effect rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${sk.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <sk.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-lg text-gray-800 dark:text-white">{sk.name}</span>
                  <span className="font-bold text-lg text-gray-600 dark:text-gray-300">{sk.level}%</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${sk.color} rounded-full relative`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${sk.level}%` }}
                  transition={{ duration: 1.5, delay: idx * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
              <motion.div
                className="absolute -top-8 bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ left: `${sk.level}%`, transform: 'translateX(-50%)' }}
              >
                {sk.level}%
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 gradient-text">Always Learning</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Sebagai Gen Z developer, saya selalu update dengan teknologi terbaru dan tren industry. 
            Currently exploring <span className="font-semibold text-blue-500">Web3</span>, 
            <span className="font-semibold text-purple-500"> AI/ML</span>, dan 
            <span className="font-semibold text-green-500"> Cloud Architecture</span> 🌟
          </p>
        </div>
      </motion.div>
    </section>
  )
}