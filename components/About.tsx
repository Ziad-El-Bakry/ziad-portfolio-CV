import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl font-semibold">About</h2>
      <p className="mt-2">Motivated Computer Science student with a strong passion for Full Stack Development, Artificial Intelligence, and Machine Learning. Proficient in React, Next.js, Node.js, NestJS, and experienced with MongoDB and MySQL. Has hands-on experience in robotics (Arduino) and participated in university competitions.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium">Skills</h3>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
            <li>React, Next.js, JavaScript, TypeScript, HTML, CSS</li>
            <li>Node.js, NestJS, PHP, Laravel</li>
            <li>MongoDB, MySQL</li>
            <li>C++, Python</li>
            <li>Arduino & Robotics</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium">Education & Certificates</h3>
          <p className="mt-2 text-sm">B.Tech in Computer Science — Cairo Higher Institute (2022 - expected 2026)</p>
          <p className="mt-2 text-sm">Full Stack Certificate — RaiseUp Academy (2024)</p>
          <p className="mt-2 text-sm">AI & ML Certificate (2025)</p>
        </div>
      </div>
    </motion.section>
  )
}

export default About
