// src/pages/Skills.jsx
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Programming / Scripting',
    items: ['Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Operating Systems',
    items: ['Windows', 'Linux (Ubuntu, Kali)', 'macOS'],
  },
  {
    category: 'Cybersecurity & SIEM',
    items: ['CrowdStrike', 'Elastic SIEM', 'KQL', 'Splunk', 'Nmap', 'Burp Suite', 'SQLMap', 'Malware Analysis', 'Bugcrowd'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
  },
  {
    category: 'IT Support & Systems',
    items: ['Active Directory', 'Microsoft 365', 'SaaS Support', 'API Troubleshooting', 'Log Analysis', 'Ticketing Systems', 'VPN', 'TCP/IP', 'DNS', 'DHCP'],
  },
  {
    category: 'Cloud & Tools',
    items: ['AWS', 'Azure', 'Git', 'Jira', 'Slack', 'Salesforce', 'Tableau', 'Excel'],
  },
  {
    category: 'Languages',
    items: ['French (Fluent)', 'English (Fluent)'],
  },
];

export default function Skills() {
  return (
    <motion.section
      className="py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <p className="font-mono text-xs text-accent-600 dark:text-accent-400 mb-2">$ cat skills.json</p>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Skills</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-10 text-sm">A snapshot of what I work with day to day.</p>

      <div className="space-y-8">
        {skillGroups.map((group, gIdx) => (
          <motion.div
            key={group.category}
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: gIdx * 0.05 }}
          >
            <h2 className="text-xs font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400 mb-3">
              {group.category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.06, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm px-3 py-1.5 rounded-lg shadow-sm hover:border-accent-300 dark:hover:border-accent-500 hover:text-accent-700 dark:hover:text-accent-400 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
