// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Download,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Globe,
  ShieldCheck,
  FolderGit2,
  Briefcase,
  ArrowUpRight,
} from 'lucide-react';
import InteractiveTerminal from '../components/InteractiveTerminal';
import beidy from '../assets/beidy.jpg';

const stats = [
  { icon: GraduationCap, label: '4.0 GPA graduate degree' },
  { icon: Globe, label: 'Bilingual French / English' },
  { icon: ShieldCheck, label: 'Cybersecurity focused' },
];

const quickLinks = [
  {
    to: '/projects',
    icon: FolderGit2,
    title: 'Featured Projects',
    blurb: 'Microservices, Kubernetes, and data dashboards.',
  },
  {
    to: '/experience',
    icon: Briefcase,
    title: 'Experience',
    blurb: 'Enterprise IT support, SaaS troubleshooting, and more.',
  },
  {
    to: '/contact',
    icon: Mail,
    title: 'Get in Touch',
    blurb: "Open to new opportunities — let's connect.",
  },
];

const techStack = [
  'Python', 'JavaScript', 'SQL', 'Linux', 'Docker', 'AWS', 'Azure',
  'CrowdStrike', 'Splunk', 'Active Directory', 'Git', 'PostgreSQL', 'PowerShell',
];

export default function Home() {
  return (
    <motion.section
      className="relative py-10 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute -top-10 -left-10 w-72 h-72 bg-accent-300/30 dark:bg-accent-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Compact identity bar */}
      <motion.div
        className="relative flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-4 text-center sm:text-left">
          <img
            src={beidy}
            alt="Beidy Sy"
            className="w-16 h-16 rounded-xl object-cover shadow-sm border border-slate-200 dark:border-slate-700"
          />
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Beidy Sy</h1>
            <p className="text-sm font-medium text-accent-600 dark:text-accent-400">
              Cybersecurity & IT Operations Specialist
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/beidysy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 hover:border-accent-300 dark:hover:border-accent-500 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/beidy-sy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 hover:border-accent-300 dark:hover:border-accent-500 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:beidyasy@gmail.com"
            aria-label="Email"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 hover:border-accent-300 dark:hover:border-accent-500 transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href="/Beidy_Sy_Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-accent-600 dark:bg-accent-500 text-white px-4 py-2 rounded-xl font-medium text-sm shadow-sm hover:bg-accent-700 dark:hover:bg-accent-600 transition-colors"
          >
            <Download size={16} />
            Resume
          </a>
        </div>
      </motion.div>

      {/* Interactive terminal — hero */}
      <motion.div
        className="relative max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      >
        <InteractiveTerminal />
        <p className="mt-3 text-center text-xs text-slate-400 dark:text-slate-500">
          💡 Click the terminal and try typing <code className="font-mono text-accent-600 dark:text-accent-400">help</code>
        </p>
      </motion.div>

      {/* Quick links */}
      <motion.div
        className="relative mt-10 max-w-3xl mx-auto grid sm:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {quickLinks.map(({ to, icon: Icon, title, blurb }, idx) => (
          <motion.div
            key={to}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.05 }}
          >
            <Link
              to={to}
              className="group block h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md hover:border-accent-300 dark:hover:border-accent-500 transition-all p-5"
            >
              <div className="flex items-center justify-between">
                <Icon size={20} className="text-accent-600 dark:text-accent-400" />
                <ArrowUpRight
                  size={16}
                  className="text-slate-400 dark:text-slate-500 group-hover:text-accent-600 dark:group-hover:text-accent-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>
              <h2 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">{title}</h2>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{blurb}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech marquee */}
      <div className="relative mt-10 max-w-3xl mx-auto">
        <p className="font-mono text-xs text-slate-400 dark:text-slate-500 mb-3 text-center">
          // tools & technologies
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-3 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="shrink-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Quick stats */}
      <motion.div
        className="relative mt-8 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        {stats.map(({ icon: Icon, label }, idx) => (
          <motion.div
            key={label}
            className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-xs font-medium text-slate-600 dark:text-slate-300 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.05 }}
          >
            <Icon size={16} className="text-accent-600 dark:text-accent-400 shrink-0" />
            {label}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
