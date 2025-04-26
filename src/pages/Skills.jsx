// src/pages/Skills.jsx
import { motion } from 'framer-motion';

const skills = [
  'French',
  'Python',
  'Linux',
  'Docker',
  'Git',
  'Bash',
  'SQL',
  'JavaScript',
  'React',
  'Networking',
  'Cybersecurity Tools',
  'DevOps',
  'Data Analysis',
  'PowerShell',
  'Cloud Platforms',
];

export default function Skills() {
  return (
    <motion.section
      className="min-h-screen py-16 px-4 bg-gradient-to-b from-purple-50 to-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-12">🧠 My Skills</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-all"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill}</h3>
              <div className="w-full h-2 bg-purple-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full animate-pulse w-[90%]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
