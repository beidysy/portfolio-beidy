// src/pages/Home.jsx
import { motion } from 'framer-motion';
import TerminalWindow from '../components/TerminalWindow';
import beidy from '../assets/beidy.jpg';

export default function Home() {
  return (
    <motion.section
      className="min-h-screen px-4 py-16 bg-gradient-to-b from-blue-50 to-purple-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Terminal Intro */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <TerminalWindow
            title="aboutme.txt"
            lines={[
              "➜ ~ cat aboutme.txt",
              "",
              "Hello, welcome to my digital terminal.",
              "",
              "* I'm Beidy Sy — Cybersecurity & IT Operations Specialist.",
              "* Experienced in DevOps, data analysis, and secure system design.",
              "* Skilled in Python, Linux, Docker, SQL, and automation tools.",
              "* Bilingual: Fluent in French and English.",
              "* Passionate about cloud, cybersecurity, and solving real-world problems with data.",
              "",
              "➜ ~"
            ]}
          />
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative group transition-all">
            <img
              src={beidy}
              alt="Beidy Sy"
              className="w-48 h-48 rounded-full border-4 border-purple-600 shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-full border-4 border-purple-300 blur-xl opacity-30 group-hover:opacity-40 transition duration-300"></div>
          </div>
        </motion.div>
      </div>

      {/* Tagline */}
      <motion.p
        className="text-center mt-10 text-sm md:text-base text-gray-500"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        ⚡ Making systems secure. Supporting tech. Always learning.
      </motion.p>
    </motion.section>
  );
}
