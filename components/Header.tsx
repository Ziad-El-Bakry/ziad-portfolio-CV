"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaMoon, FaSun } from 'react-icons/fa'

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

import { useTheme } from 'next-themes'

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
    </motion.button>
  )
}

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.15 
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
}

const Header = () => {
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 dark:border-slate-700"
    >
      <div className="text-center sm:text-left mt-3 sm:mt-0 flex-1">
        <motion.div variants={childVariants} className="flex flex-col sm:flex-row items-center justify-between sm:justify-start gap-3 w-full">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Ziad El Bakry</h1>
            <motion.span
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(16, 185, 129, 0)", "0px 0px 10px rgba(16, 185, 129, 0.4)", "0px 0px 0px rgba(16, 185, 129, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center text-[10px] uppercase font-bold tracking-widest bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 px-3 py-1.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Open to work
            </motion.span>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-auto">
            <ThemeToggle />
          </div>
        </motion.div>

        <motion.p variants={childVariants} className="text-sm sm:text-base font-medium text-indigo-600 dark:text-indigo-400 mt-3">
          Full-Stack Developer <span className="text-gray-300 dark:text-gray-600 mx-2">|</span> AI Enthusiast
        </motion.p>

        <motion.div variants={childVariants} className="mt-6 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap justify-center sm:justify-start">
          <div className="flex items-center gap-4 bg-gray-50 dark:bg-slate-900/50 px-4 py-2 rounded-2xl border border-gray-100 dark:border-slate-700">
            <a href="mailto:zezomamdouh6@gmail.com" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
              <FaEnvelope className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              <span>zezomamdouh6@gmail.com</span>
            </a>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-600">|</span>
            <a href="tel:+201129650192" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
              +20 112 965 0192
            </a>
          </div>

          <div className="flex items-center gap-3 ml-0 sm:ml-auto">
            <motion.a 
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Ziad-El-Bakry" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-slate-700 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/ziad-el-bakry-103b81326"
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 flex items-center justify-center bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/qr/4ZFURFBNVUB2J1"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
