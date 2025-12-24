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

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.9, delay: 0.02, ease: [0.2, 0.8, 0.5, 1] }}
      className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 bg-white p-6 sm:p-8 rounded-2xl shadow-xl"
    >
      {/* <motion.div
        whileHover={{ scale: 1.12, rotate: 4 }}
        transition={{ type: 'spring', stiffness: 260 }}
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-indigo-400 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white shadow-2xl"
      >
        <Image
          src="/ziad.jpg"
          alt="Ziad EL Bakry"
          width={300}
          height={300}
          priority
          className="object-cover"
        />
      </motion.div> */}

      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.12 }}
        className="text-center sm:text-left mt-3 sm:mt-0 flex-1"
      >
        <div className="flex items-center gap-3">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900">Ziad El Bakry</h1>
          <motion.span
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center text-xs bg-emerald-400 text-white px-2 py-1 rounded-full shadow-sm"
          >
            Open to work
          </motion.span>
        </div>

        <p className="text-sm sm:text-base text-indigo-600 mt-2">
          Full-Stack Developer — AI Enthusiast
        </p>

  <div className="mt-3 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <a href="mailto:zezomamdouh6@gmail.com" className="inline-flex items-center gap-2 text-gray-700 hover:text-indigo-600">
              <FaEnvelope className="w-4 h-4" />
              <span className="underline">zezomamdouh6@gmail.com</span>
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:+201129650192" className="underline text-gray-700 hover:text-indigo-600">
              +20 112 965 0192
            </a>
          </div>

          <div className="flex items-center gap-3 ml-0 sm:ml-auto">
            <a href="https://github.com/Ziad-El-Bakry" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/ziad-el-bakry-103b81326"
              target="_blank " rel="noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin className="w-5 h-5" />
            </a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/qr/4ZFURFBNVUB2J1"
              target="_blank "
              rel="noopener noreferrer"
              aria-label="Open WhatsApp chat"
              title="WhatsApp"
              className="ml-2 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded-md text-sm shadow-md"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}

export default Header
