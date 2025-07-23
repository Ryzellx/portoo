import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Portfolio from './components/Portfolio.tsx'
import Skills from './components/Skills.tsx'
import Contact from './components/Contact.tsx'
import ThemeToggle from './components/ThemeToggle.tsx'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  // Dark mode persistence
  useEffect(() => {
    const dark = localStorage.getItem('theme') === 'dark'
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  return (
    <div className="min-h-screen font-sans relative overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <Portfolio />
          <Skills />
          <Contact />
        </motion.div>
      </main>
      <ThemeToggle />
      <footer className="text-center py-8 text-gray-400 dark:text-gray-500 text-sm relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          &copy; 2025 whoryzell | Web Developer ✨
        </motion.div>
      </footer>
    </div>
  )
}