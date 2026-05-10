"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
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
      className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 bg-white p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50"
    >
      <div className="text-center sm:text-left mt-3 sm:mt-0 flex-1">
        <motion.div variants={childVariants} className="flex items-center justify-center sm:justify-start gap-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Ziad El Bakry</h1>
          <motion.span
            animate={{ 
              boxShadow: ["0px 0px 0px rgba(16, 185, 129, 0)", "0px 0px 10px rgba(16, 185, 129, 0.4)", "0px 0px 0px rgba(16, 185, 129, 0)"]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center text-[10px] uppercase font-bold tracking-widest bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            Open to work
          </motion.span>
        </motion.div>

        <motion.p variants={childVariants} className="text-sm sm:text-base font-medium text-indigo-600 mt-3">
          Full-Stack Developer <span className="text-gray-300 mx-2">|</span> AI Enthusiast
        </motion.p>

        <motion.div variants={childVariants} className="mt-6 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap justify-center sm:justify-start">
          <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-2xl border border-gray-100">
            <a href="mailto:zezomamdouh6@gmail.com" className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              <FaEnvelope className="w-4 h-4 text-gray-400" />
              <span>zezomamdouh6@gmail.com</span>
            </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a href="tel:+201129650192" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
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
              className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/ziad-el-bakry-103b81326"
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-full text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors"
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
