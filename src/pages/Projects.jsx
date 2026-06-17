// src/pages/Projects.jsx
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'Hospital Appointment System',
    link: 'https://github.com/beidysy/SOA-915-Final-Project-Group-3',
    description:
      'Microservices-based system for booking appointments, managing doctors/patients, and sending notifications. Built with Flask, PostgreSQL, Docker, Kubernetes.',
    tech: ['Flask', 'Docker', 'PostgreSQL', 'Kubernetes', 'Prometheus'],
  },
  {
    name: 'Data Center Life Tracking',
    link: 'https://github.com/beidysy/Data_center_life_tracking',
    description:
      'Tracks environmental and operational metrics for data center infrastructure. Uses Python and dashboards for monitoring lifecycle events.',
    tech: ['Python', 'Pandas', 'Visualization', 'Infrastructure'],
  },
];

export default function Projects() {
  return (
    <motion.section
      className="py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <p className="font-mono text-xs text-accent-600 dark:text-accent-400 mb-2">$ ls ~/projects</p>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Projects</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-10 text-sm">A few things I've built and shipped.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-accent-300 dark:hover:border-accent-500 transition-shadow p-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-accent-700 dark:group-hover:text-accent-400 transition-colors">
                {project.name}
              </h2>
              <ArrowUpRight size={18} className="text-slate-400 dark:text-slate-500 group-hover:text-accent-600 dark:group-hover:text-accent-400 shrink-0 transition-colors" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-accent-700 dark:text-accent-400 bg-accent-50 dark:bg-accent-500/10 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
