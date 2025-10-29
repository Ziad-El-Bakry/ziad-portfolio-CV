import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SiTypescript, SiJavascript, SiPython, SiReact, SiTailwindcss, SiNodedotjs } from 'react-icons/si'
import { FaClipboard } from 'react-icons/fa'

type Lang = {
  id: string
  name: string
  icon: React.ComponentType<any>
  level: number // percent
  sample: string
}

const LANGS: Lang[] = [
  {
    id: 'ts',
    name: 'TypeScript',
    icon: SiTypescript,
    level: 85,
    sample: `// TypeScript example\nconst greet = (name: string): string => ` + "`Hello ${name}!`" + `\nconsole.log(greet('Ziad'))`
  },
  {
    id: 'js',
    name: 'JavaScript',
    icon: SiJavascript,
    level: 90,
    sample: `// JavaScript example\nfunction sum(a, b) { return a + b }\nconsole.log(sum(3,4))`
  },
  {
    id: 'py',
    name: 'Python',
    icon: SiPython,
    level: 70,
    sample: `# Python example\ndef fib(n):\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a\nprint(fib(10))`
  },
  {
    id: 'react',
    name: 'React',
    icon: SiReact,
    level: 88,
    sample: `// React (JSX)\nimport React from 'react'\nexport default function App(){\n  return <h1 className=\"text-2xl\">Hello from React</h1>\n}`
  },
  {
    id: 'tailwind',
    name: 'Tailwind',
    icon: SiTailwindcss,
    level: 82,
    sample: `<!-- Tailwind example -->\n<button class=\"px-4 py-2 bg-indigo-600 text-white rounded\">Click me</button>`
  }
]

const SkillBar: React.FC<{name: string; percent: number; color?: string}> = ({ name, percent, color = 'bg-indigo-500' }) => {
  return (
    <div className="my-3">
      <div className="flex justify-between mb-1 text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-gray-500">{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
        <motion.div className={`${color} h-2`} initial={{ width: 0 }} animate={{ width: `${percent}%` }} transition={{ duration: 1.2 }} />
      </div>
    </div>
  )
}

export default function About(): JSX.Element {
  const [selected, setSelected] = useState<string>(LANGS[0].id)
  const [copied, setCopied] = useState(false)

  const current = LANGS.find((l) => l.id === selected) || LANGS[0]

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 1500)
    return () => clearTimeout(t)
  }, [copied])

  const copyCode = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
    } catch (e) {
      // fallback
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
    }
  }

  return (
    <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="bg-white p-6 md:p-8 rounded-2xl shadow-md">
      <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold">About me</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">I'm a Computer Science student and a full-stack enthusiast building responsive, accessible interfaces with React, Next.js and Tailwind. I enjoy translating ideas into polished user experiences and learning new tools — lately I've been focused on TypeScript, performance and clean component design.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-800">Core skills</h3>
              <div className="mt-3">
                <SkillBar name="JavaScript" percent={90} color="bg-yellow-500" />
                <SkillBar name="TypeScript" percent={85} color="bg-sky-600" />
                <SkillBar name="React / Next.js" percent={88} color="bg-cyan-600" />
                <SkillBar name="Node.js" percent={78} color="bg-green-600" />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-800">Tools & Databases</h3>
              <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
                <li>Tailwind CSS, Framer Motion</li>
                <li>MongoDB, MySQL</li>
                <li>Git, Docker (basic)</li>
                <li>Arduino & microcontrollers</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700">Hire / Contact</a>
            <a href="/resume.pdf" className="text-sm text-gray-600 underline">Download CV</a>
          </div>
        </div>

        <aside className="w-full md:w-96 mt-6 md:mt-0">
          <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm bg-gray-50">
            <div className="p-3 flex items-center justify-between">
              <h4 className="font-medium">Programming languages</h4>
              <span className="text-xs text-gray-500">Interactive</span>
            </div>

            <div className="p-3 flex flex-wrap gap-2">
              {LANGS.map((l) => {
                const Icon = l.icon
                const active = l.id === selected
                return (
                  <button key={l.id} onClick={() => setSelected(l.id)} aria-pressed={active} className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-shadow ${active ? 'bg-white shadow' : 'hover:bg-white/50'} focus:outline-none`}>
                    <span className={`${active ? 'text-indigo-600' : 'text-gray-600'}`}><Icon /></span>
                    <span className={`font-medium ${active ? 'text-gray-900' : 'text-gray-700'}`}>{l.name}</span>
                  </button>
                )
              })}
            </div>

            <div className="p-3 border-t bg-white">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-gray-600">{current.name}</div>
                  <div className="text-xs text-gray-500 mt-1">Proficiency: {current.level}%</div>
                </div>
                <button onClick={() => copyCode(current.sample)} aria-label="Copy code" className="text-gray-500 hover:text-gray-700">
                  <FaClipboard />
                </button>
              </div>

              <pre className="mt-3 text-xs bg-gray-900 text-green-200 rounded-md p-3 overflow-auto font-mono max-h-40">
                <code>{current.sample}</code>
              </pre>

              <div className="mt-2 text-right text-xs text-green-600">{copied ? 'Copied!' : 'Click the clipboard to copy'}</div>
            </div>
          </div>
        </aside>
      </div>
    </motion.section>
  )
}
