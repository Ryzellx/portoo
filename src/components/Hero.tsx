import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Zap, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-20 relative">
      {/* Floating elements */}
      <motion.div
        className="absolute top-10 left-10 text-blue-500 opacity-20"
        animate={{ rotate: 360, y: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>
      <motion.div
        className="absolute top-20 right-20 text-purple-500 opacity-20"
        animate={{ rotate: -360, y: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <Zap className="w-6 h-6" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-20 text-pink-500 opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-7 h-7" />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        className="mb-6"
      >
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-1 animate-float">
          <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-4xl font-bold gradient-text">
            F
          </div>
        </div>
      </motion.div>

      <motion.h1 
        className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Halo <motion.span
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="inline-block"
        >👋</motion.span>, Saya{' '}
        <span className="gradient-text">Fiksi Nama</span>
      </motion.h1>
      
      <motion.p 
        className="text-xl max-w-2xl mb-8 text-gray-600 dark:text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Gen Z creative developer yang passionate tentang teknologi cutting-edge, 
        design modern yang aesthetic, dan pengalaman pengguna yang{' '}
        <span className="font-semibold text-blue-500 dark:text-blue-400">smooth banget</span>. 
        Mari berkolaborasi dan create something amazing! ✨
      </motion.p>
      
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <motion.a
          href="#portfolio"
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg font-semibold text-lg relative overflow-hidden group"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Lihat Portfolio</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            layoutId="button-bg"
          />
        </motion.a>
        
        <motion.a
          href="#contact"
          className="px-8 py-4 glass-effect text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Connect
        </motion.a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="text-gray-400 dark:text-gray-500"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}