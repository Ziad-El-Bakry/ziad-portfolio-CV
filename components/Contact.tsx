import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaDownload } from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="bg-white p-6 rounded-2xl shadow-md"
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-2 text-sm text-gray-700 flex items-center gap-2">
            <FaMapMarkerAlt className="w-4 h-4 text-indigo-500" />
            Ain Shams, Cairo, Egypt
          </p>

          <div className="mt-3 flex items-center gap-4">
            <a
              href="https://linkedin.com/in/ziad-el-bakry-103b81326"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <FaLinkedin className="w-4 h-4" /> LinkedIn
            </a>

            <a
              href="https://github.com/Ziad-El-Bakry"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
            >
              <FaGithub className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>

        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          href="/Ziad El Bakry - CV.pdf"
          download
          className="inline-flex items-center gap-1.5 bg-indigo-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700"
        >
          <FaDownload className="w-4 h-6" />
          <span className="text-sm">Download CV</span>
        </motion.a>
      </div>
    </motion.section>
  )
}

export default Contact
