// src/pages/Experience.jsx
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Technical Support Specialist – Bilingual French',
    company: 'Geotab',
    location: 'Oakville, Canada',
    period: 'July 2025 – Present',
    highlights: [
      'Provide enterprise-level technical support for large-scale telematics and SaaS platforms supporting commercial fleet customers across North America and international markets in French and English.',
      'Troubleshoot application, device, connectivity, authentication, authorization/permission, account access, and API integration issues through log analysis, request/response review, system diagnostics, and structured troubleshooting.',
      'Investigate API authentication failures, permission errors, integration behavior, backend workflows, and data inconsistencies across connected enterprise systems.',
      'Use scripting and structured queries to validate data, reproduce technical issues, isolate failure points, and support root-cause analysis and engineering investigations.',
      'Document investigation findings, maintain detailed technical case records, and escalate complex incidents through structured support and incident-management workflows.',
      'Collaborate cross-functionally with engineering and operations teams to resolve customer-impacting incidents, recurring technical issues, and platform reliability concerns.'
    ],
    tech: ['Technical Support', 'API Debugging', 'Log Analysis', 'SaaS', 'Scripting', 'Incident Management']
  },
  {
    title: 'Internal Cybersecurity Operations Program',
    company: 'Geotab',
    location: 'Oakville, Canada',
    period: 'January 2026 – March 2026',
    highlights: [
      'Participated in enterprise cybersecurity workflows spanning SOC monitoring, security alert review, incident triage, phishing investigations, vulnerability management, and software security approvals.',
      'Worked with CrowdStrike, Elastic SIEM, KQL, Google Admin, and Bugcrowd in security investigation and monitoring workflows.',
      'Reviewed security alerts, detection logic, endpoint telemetry, SIEM data, phishing indicators, vulnerability reports, and incident escalation procedures.',
      'Applied security log analysis and investigation concepts to understand alert context, detection and triage processes, and cross-team incident handling.'
    ],
    tech: ['SOC Monitoring', 'CrowdStrike', 'Elastic SIEM', 'KQL', 'Incident Triage', 'Phishing Analysis', 'Vulnerability Management']
  },

  {
    title: 'Professional Tutor - Math and Computer Skills',
    company: 'Wilmington University',
    location: 'New Castle, Delaware',
    period: 'March 2019 – June 2023',
    highlights: [
      'Tutored students one-on-one in math and computer skills, improving GPA outcomes.',
      'Developed study materials and exam resources, improving student performance with an average exam score of 90%.',
    ],
    tech: ['Math Tutoring', 'Computer Skills', 'Academic Support', 'Resource Development'],
  },
  {
    title: 'Bilingual IT Support Assistant',
    company: 'Wilmington University',
    location: 'New Castle, Delaware',
    period: 'September 2018 – May 2022',
    highlights: [
      'Delivered L1 technical support for classrooms and campus facilities, setting up devices, projectors, and computers.',
      'Provided bilingual (French and English) assistance to students and faculty for account setup, password resets, and software troubleshooting.',
      'Monitored classroom IT setups to ensure systems were functional before lectures.',
      'Translated technical documentation between English and French to improve accessibility.',
    ],
    tech: ['Technical Support', 'French-English Support', 'Active Directory', 'IT Operations'],
  },
  {
    title: 'Help Desk Technician',
    company: 'Rowan College at Burlington County',
    location: 'Mount Laurel, New Jersey',
    period: 'August 2015 – May 2018',
    highlights: [
      'Delivered Level 1 support for software, hardware, and network issues via an internal ticketing system.',
      'Managed Active Directory accounts, including user setup and password resets.',
      'Supported email, network, and system maintenance across campus IT infrastructure.',
      'Maintained security of confidential computer networks and databases.',
    ],
    tech: ['Help Desk Support', 'Active Directory', 'Network Maintenance', 'Security'],
  },
];

export default function Experience() {
  return (
    <motion.section
      className="py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <p className="font-mono text-xs text-accent-600 dark:text-accent-400 mb-2">$ cd ~/experience</p>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Experience</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-10 text-sm">Where I've worked and what I've done.</p>

      <div className="space-y-6">
        {experiences.map((job, idx) => (
          <motion.div
            key={job.title}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow p-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
          >
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{job.title}</h2>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{job.period}</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
              {job.company} — {job.location}
            </p>
            <ul className="list-disc ml-5 text-slate-600 dark:text-slate-300 text-sm space-y-1">
              {job.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tech.map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-medium text-accent-700 dark:text-accent-400 bg-accent-50 dark:bg-accent-500/10 px-2 py-1 rounded-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
