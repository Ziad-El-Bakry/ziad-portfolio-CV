import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { useEffect, useState } from 'react'

type Project = { title: string; desc: string; link: string; tags?: string[] }

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProjects(data)
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Featured Projects</h2>
        <span className="text-xs font-medium text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">Live from GitHub</span>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-48 bg-gray-100 dark:bg-slate-800 animate-pulse rounded-2xl"></div>
          ))}
        </div>
      ) : (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.title + i}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-50 dark:border-slate-700 flex flex-col h-full"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white capitalize leading-tight pr-4">{p.title}</h3>
                <motion.a 
                  whileHover={{ rotate: 15, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  href={p.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white flex-shrink-0"
                >
                  <FaGithub className="w-6 h-6" />
                </motion.a>
              </div>

              <p className="text-sm mt-3 text-gray-600 dark:text-gray-300 flex-grow leading-relaxed">{p.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {(p.tags || []).map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-50 dark:border-slate-700">
                <motion.a
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover="hover"
                >
                  View Repository 
                  <motion.span 
                    variants={{
                      hover: { x: 5 }
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >→</motion.span>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      )}
    </motion.section>
  )
}

export default Projects