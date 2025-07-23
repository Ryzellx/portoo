import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, TrendingUp } from 'lucide-react'

const projects = [
  {
    name: "Calculator Lengkap",
    desc: "Calculator yang bisa melakukan berbagai operasi matematika kompleks dengan UI yang sleek.",
    link: "https://calculator.ryzell.my.id",
    github: "https://github.com/Ryzellx/kalkulator",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Live",
    stars: 124,
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Online Store",
    desc: "E-commerce platform dengan payment gateway, inventory management, dan analytics dashboard.",
    link: "https://toko-orpin.vercel.app/",
    github: "https://github.com/Ryzellx/toko",
    tags: ["Next.js", "Tailwind CSS", "JavaScript", "React", "PHP"],
    status: "In Development",
    stars: 89,
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Linktr Clone",
    desc: "Shortcut link service untuk mengelola semua link penting di satu tempat.",
    link: "https://www.ryzell.my.id/",
    github: "https://github.com/Ryzellx/shortcut-sosmed",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Live",
    stars: 67,
    image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Jakarta Projects",
    desc: "Server GTA SA:MP Build by Baizalq",
    link: "https://discord.gg/jprp",
    github: "",
    tags: ["Pawno", "C"],
    status: "Beta",
    stars: 156,
    image: "https://cdn.discordapp.com/attachments/1391311263925276772/1391311413091238000/1751605644257.png?ex=6880873a&is=687f35ba&hm=6f7ef877ec16f1931439c48245230757f03c822c5d56f6642a876264282f88e8&"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Beberapa project keren yang udah saya buat dengan teknologi terdepan dan design yang aesthetic ✨
        </p>
      </motion.div>
      
      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group relative glass-effect rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={p.image} 
                alt={p.name}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  p.status === 'Live' ? 'bg-green-500 text-white' :
                  p.status === 'Beta' ? 'bg-yellow-500 text-white' :
                  'bg-blue-500 text-white'
                }`}>
                  {p.status}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-xl text-gray-800 dark:text-white">{p.name}</h3>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">{p.stars}</span>
                </div>
              </div>
              
              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">{p.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t, i) => (
                  <motion.span
                    key={i}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <motion.a
                  href={p.link}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
                <motion.a
                  href={p.github}
                  className="flex items-center gap-2 px-4 py-2 glass-effect text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 glass-effect text-gray-700 dark:text-gray-300 rounded-full font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
}