import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

type Project = { title: string; desc: string; link: string; tags?: string[] }

const projects: Project[] = [
  {
    title: 'OCR Project',
    desc: 'OCR application using computer vision and ML for text extraction.',
    link: 'https://github.com/Ziad-El-Bakry/OCR_Project',
    tags: ['Computer Vision', 'Python', 'ML'],
  },
  {
    title: 'Node.js MongoDB Registration System (Optimized)',
    desc: 'Secure registration and authentication system with query optimization.',
    link: 'https://github.com/Ziad-El-Bakry/nodejs_mongodb_register_optimize',
    tags: ['Node.js', 'MongoDB', 'Security'],
  },
]

const Projects = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="p-5 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-lg text-indigo-600">{p.title}</h3>
              <a href={p.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm mt-2 text-gray-700">{p.desc}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {(p.tags || []).map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-md">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <a
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub <span aria-hidden>→</span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
