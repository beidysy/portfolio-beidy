// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const links = [
  {
    label: 'Email',
    value: 'beidyasy@gmail.com',
    href: 'mailto:beidyasy@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/beidy-sy',
    href: 'https://www.linkedin.com/in/beidy-sy/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/beidysy',
    href: 'https://github.com/beidysy',
    icon: Github,
  },
];

export default function Contact() {
  return (
    <motion.section
      className="py-10 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <p className="font-mono text-xs text-accent-600 dark:text-accent-400 mb-4 self-start">$ ./contact.sh</p>

      <motion.div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-10 text-center"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Let's Connect</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 max-w-md mx-auto">
          Whether you're hiring, collaborating, or just want to say hi — I'd love to hear from you.
        </p>

        <div className="space-y-3">
          {links.map(({ label, value, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ y: -2 }}
              className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 hover:bg-accent-50 dark:hover:bg-accent-500/10 border border-slate-200 dark:border-slate-700 hover:border-accent-300 dark:hover:border-accent-500 rounded-xl px-4 py-3 text-left transition-colors group"
            >
              <span className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 group-hover:border-accent-300 dark:group-hover:border-accent-500 transition-colors">
                <Icon size={18} />
              </span>
              <span>
                <span className="block text-xs text-slate-400 dark:text-slate-500">{label}</span>
                <span className="block text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-accent-700 dark:group-hover:text-accent-400">
                  {value}
                </span>
              </span>
            </motion.a>
          ))}
        </div>

        <p className="mt-8 text-xs text-slate-400 dark:text-slate-500">Beidy Sy</p>
      </motion.div>
    </motion.section>
  );
}
