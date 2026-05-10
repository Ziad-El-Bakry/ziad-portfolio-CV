import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaDownload } from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 dark:border-slate-700"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Let's Connect</h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2 font-medium">
            <FaMapMarkerAlt className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            Ain Shams, Cairo, Egypt
          </p>

          <div className="mt-5 flex items-center gap-5">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/ziad-el-bakry-103b81326"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors"
            >
              <FaLinkedin className="w-5 h-5" /> LinkedIn
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Ziad-El-Bakry"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold transition-colors"
            >
              <FaGithub className="w-5 h-5" /> GitHub
            </motion.a>
          </div>
        </div>

        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          href="/Ziad El Bakry-CV.pdf"
          download
          className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:bg-indigo-700 w-full md:w-auto font-semibold transition-all group"
        >
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10, repeat: Infinity, repeatType: "reverse" }}
          >
            <FaDownload className="w-4 h-4" />
          </motion.div>
          <span className="text-sm">Download CV</span>
        </motion.a>
      </div>
    </motion.section>
  )
}

export default Contact