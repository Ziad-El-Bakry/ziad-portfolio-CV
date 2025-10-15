import { motion } from 'framer-motion'

type Project = { title: string; desc: string; link: string }

const projects: Project[] = [
  { title: 'OCR Project', desc: 'OCR application using computer vision and ML for text extraction.', link: 'https://github.com/Ziad-El-Bakry/OCR_Project' },
  { title: 'Node.js MongoDB Registration System (Optimized)', desc: 'Secure registration and authentication system with query optimization.', link: 'https://github.com/Ziad-El-Bakry/nodejs_mongodb_register_optimize' }
]

const Projects = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <motion.article key={p.title} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.45}} className="p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-lg text-indigo-600">{p.title}</h3>
            <p className="text-sm mt-1">{p.desc}</p>
            <a className="text-sm mt-3 inline-block text-indigo-500 hover:text-indigo-700 font-medium" href={p.link} target="_blank" rel="noreferrer">View on GitHub →</a>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
