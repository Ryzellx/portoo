import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ||
    localStorage.getItem('theme') === 'dark'
  )

  function toggleTheme() {
    setDark(!dark)
    document.documentElement.classList.toggle('dark', !dark)
    localStorage.setItem('theme', !dark ? 'dark' : 'light')
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 glass-effect shadow-lg rounded-full p-4 z-50 transition-all duration-300 hover:shadow-xl"
      aria-label="Toggle Dark Mode"
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 500, damping: 30 }}
    >
      <motion.div
        key={dark ? 'sun' : 'moon'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {dark ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        )}
      </motion.div>
    </motion.button>
  )
}