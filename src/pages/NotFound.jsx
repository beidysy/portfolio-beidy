// src/pages/NotFound.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TerminalWindow from '../components/TerminalWindow';

export default function NotFound() {
  return (
    <motion.section
      className="py-16 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="w-full max-w-lg">
        <TerminalWindow
          title="error.log"
          lines={[
            '➜ ~ cd ./requested-page',
            '',
            'bash: cd: ./requested-page: No such file or directory',
            'exit code: 404',
            '',
            '➜ ~'
          ]}
        />
      </div>

      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 bg-accent-600 dark:bg-accent-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm shadow-sm hover:bg-accent-700 dark:hover:bg-accent-600 transition-colors"
      >
        cd ~ (Go Home)
      </Link>
    </motion.section>
  );
}
