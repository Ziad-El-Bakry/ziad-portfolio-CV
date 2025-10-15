import Image from 'next/image'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex items-center gap-8 bg-white p-8 rounded-2xl shadow-md"
    >
      <motion.div
        whileHover={{ scale: 1.4, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-400 flex items-center justify-center bg-indigo-50 shadow-lg"
      >
        <Image
          src="/profile.png"
          alt="Ziad El Bakry"
          width={160}
          height={160}
          priority
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold text-gray-800">Ziad El Bakry</h1>
        <p className="text-base text-indigo-600 mt-1">
          Full-Stack Developer — AI & Robotics enthusiast
        </p>
        <div className="mt-3 text-sm space-x-4">
          <a
            href="mailto:zezomamdouh6@gmail.com"
            className="underline text-gray-700 hover:text-indigo-600"
          >
            zezomamdouh6@gmail.com
          </a>
          <span>•</span>
          <a
            href="tel:+201129650192"
            className="underline text-gray-700 hover:text-indigo-600"
          >
            +20 112 965 0192
          </a>
        </div>
      </motion.div>
    </motion.header>
  )
}

export default Header
