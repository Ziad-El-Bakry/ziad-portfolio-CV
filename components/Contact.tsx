import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.section initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-sm">Location: Ain Shams, Cairo, Egypt</p>
      <div className="mt-3">
        <a href="https://linkedin.com/in/ziad-el-bakry-103b81326" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
        <span className="mx-2">•</span>
        <a href="https://github.com/Ziad-El-Bakry" target="_blank" rel="noreferrer" className="underline">GitHub</a>
      </div>
      <a href="/Ziad El Bakry - CV.pdf" download className="mt-4 inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition">
        Download CV
      </a>
    </motion.section>
  )
}

export default Contact
