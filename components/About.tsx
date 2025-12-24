import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaJs, FaPython, FaPhp, FaReact, FaNodeJs, FaLaravel } from 'react-icons/fa'
import { SiTypescript, SiCplusplus } from 'react-icons/si'

const languages = [
  { name: 'Laravel', color: 'bg-red-900', level: 88, sample: "console.log('Hello, JS!')", icon: FaLaravel },
  { name: 'TypeScript', color: 'bg-sky-500', level: 82, sample: "const greet = (name: string) => `Hello, ${name}`", icon: SiTypescript },
  { name: 'Python', color: 'bg-sky-700', level: 74, sample: "print('Hello, Python!')", icon: FaPython },
  { name: 'C++', color: 'bg-amber-600', level: 62, sample: "#include <iostream>\nint main(){ std::cout << \"Hi\"; }", icon: SiCplusplus },
  { name: 'PHP', color: 'bg-sky-800', level: 68, sample: "<?php echo 'Hello PHP'; ?>", icon: FaPhp },
  { name: 'Node.js', color: 'bg-violet-600', level: 68, sample: "console.log('Hello, Node.js!')", icon: FaNodeJs },
  { name: 'React', color: 'bg-cyan-400', level: 60, sample: `function Hello() {\n  return (<div>Hello</div>)\n}`, icon: FaReact, },
]

const About = () => {
  const [active, setActive] = useState(0)
  const [mounted, setMounted] = useState(false)

  // (sample panel removed) - removed code-highlighter and copy-to-clipboard helper

  // trigger mount animations
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(id)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.9, ease: [0.2, 0.8, 0.2, 1] }}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">About</h2>
        <span className="text-xs text-gray-500">Energetic · Curious · Building</span>
      </div>

      <p className="mt-3 text-sm text-gray-700">
        Motivated Computer Science student with a strong passion for Full Stack Development, Artificial Intelligence, and
        Machine Learning. Proficient in React, Next.js, Node.js, NestJS, PHP, Laravel and experienced with MongoDB and
        MySQL. Has hands-on experience in robotics (Arduino) and participated in university competitions.
      </p>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h3 className="font-medium">Skills</h3>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>React, Next.js, JavaScript, TypeScript, HTML, CSS</li>
            <li>Node.js, NestJS, PHP, Laravel</li>
            <li>MongoDB, SQL</li>
            <li>C++, Python</li>
            <li>Arduino & Robotics</li>
          </ul>

          <h3 className="font-medium mt-5">Professional Skills</h3>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Leadership & Time Management</li>
            <li>Problem-Solving & Critical Thinking</li>
            <li>Effective Communication & Active Listening</li>
            <li>Professional Interview & Job Application Skills</li>
            <li>Teamwork & Collaboration</li>
            <li>Project Management</li>
          </ul>

          <h3 className="font-medium mt-5">Education & Certificates</h3>
          <p className="mt-2 text-sm">B.Tech in Computer Science — Cairo Higher Institute (2022 - expected 2026)</p>
          <p className="mt-2 text-sm">Full Stack Certificate — RaiseUp Academy (2024)</p>
          <p className="mt-2 text-sm">AI & ML Certificate (2025)</p>
        </div>

  <aside className="bg-gray-50 p-4 rounded-xl border-2 border-sky-100 shadow-inner">
          <h4 className="text-sm font-semibold">Programming Languages</h4>
          <p className="text-xs text-gray-500">A quick energetic snapshot of primary languages</p>

          <div className="mt-3 space-y-3">
            {languages.map((lang, idx) => {
              const Icon = lang.icon
              return (
                <button
                  key={lang.name}
                  onClick={() => setActive(idx)}
                  tabIndex={0}
                  aria-pressed={active === idx}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActive(idx)
                    }
                  }}
                  className={`w-full flex items-center justify-between p-2 rounded-lg transition-transform transform motion-safe:duration-200 hover:-translate-y-1 focus:outline-none ${
                    active === idx
                      ? 'ring-2 ring-offset-2 ring-sky-300 bg-white'
                      : 'hover:bg-white/60 bg-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-md text-white ${lang.color}`}>
                      {Icon ? <Icon className="w-4 h-4" /> : <span className="w-4 h-4" />}
                    </span>
                    <span className="text-sm font-medium">{lang.name}</span>
                  </div>

                  <div className="w-1/2 ml-3">
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full ${lang.color}`}
                        style={{
                          width: mounted ? `${lang.level}%` : '0%',
                          transition: 'width 600ms cubic-bezier(.2,.8,.2,1)',
                        }}
                      />
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-4">
            <div className="text-sm text-gray-500">Select a language to view a sample.</div>
          </div>
        </aside>
      </div>
    </motion.section>
  )
}
// Local alias for IconType to avoid requiring the `react-icons` package at build time.
// If you add `react-icons` to dependencies later, replace this alias with a proper import.
export type IconType = (props?: any) => JSX.Element

export interface Link {
  id: string;
  icon: IconType;
  link: string;
  preview: boolean;
}

export interface ResumeState {
  link: string;
  gradient: string;
  originalGradient: string;
  color1: string;
  color2: string;
}

export interface LinkDialogState {
  editingLink: string;
  linkInput: string;
  showDialog: boolean;
}

export interface ResumeDialogState {
  showDialog: boolean;
  isEditingColors: boolean;
}

export interface AboutProps {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
  resumeState: ResumeState;
  setResumeState: React.Dispatch<React.SetStateAction<ResumeState>>;
  linkDialogState: LinkDialogState;
  setLinkDialogState: React.Dispatch<React.SetStateAction<LinkDialogState>>;
  resumeDialogState: ResumeDialogState;
  setResumeDialogState: React.Dispatch<React.SetStateAction<ResumeDialogState>>;
}

export default About