// src/pages/Contact.jsx
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      className="min-h-screen py-16 px-4 bg-gradient-to-b from-purple-100 to-blue-50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="max-w-3xl mx-auto text-center bg-white rounded-xl shadow-lg p-10 border-l-4 border-purple-400"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-3xl font-bold text-purple-700 mb-6"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          🚀 Let's Connect
        </motion.h1>

        <motion.p
          className="text-gray-700 text-md mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Whether you're looking for a passionate tech teammate, a cybersecurity specialist,
          or just want to say hi — I’d love to hear from you!
        </motion.p>

        <motion.div
          className="space-y-4 text-sm text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>
            📬 <span className="font-semibold">Email:</span>{' '}
            <a
              href="mailto:beidyasy@gmail.com"
              className="text-purple-700 hover:underline"
            >
              beidyasy@gmail.com
            </a>
          </p>

          <p>
            💼 <span className="font-semibold">LinkedIn:</span>{' '}
            <a
              href="https://www.linkedin.com/in/beidy-sy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:underline"
            >
              linkedin.com/in/beidy-sy
            </a>
          </p>

          <p>
            💻 <span className="font-semibold">GitHub:</span>{' '}
            <a
              href="https://github.com/beidysy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:underline"
            >
              github.com/beidysy
            </a>
          </p>
        </motion.div>

        <motion.div
          className="mt-10 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          Beidy Sy
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
