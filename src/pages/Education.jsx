// src/pages/Education.jsx
import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      degree: "Ontario Graduate Certificate in Business Information Technology",
      school: "Seneca College",
      location: "Toronto, Ontario, Canada",
      date: "Sep 2023 – Apr 2025",
      honors: "GPA: 4.00",
      details: [
        "Focused on cloud computing, business systems, and IT project management.",
        "Gained hands-on experience with microservices, DevOps tools, and enterprise software design.",
        "Final enterprise project: Designed and deployed a hospital microservices system on Kubernetes.",
      ],
    },
    {
      degree: "Master of Science in Information Systems Technology (Information Assurance)",
      school: "Wilmington University",
      location: "Delaware, USA",
      date: "May 2022",
      honors: "Graduate Academic Award · GPA: 4.00",
      details: [
        "Specialized in security standards, policies, and risk analysis.",
        "Completed projects involving secure network architecture and cloud security controls.",
        "Focused on hybrid Windows/Linux environments and compliance frameworks.",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Wilmington University",
      location: "Delaware, USA",
      date: "May 2020",
      honors: "Dean's List · GPA: 3.77",
      details: [
        "Studied algorithms, databases, object-oriented programming, and system design.",
        "Gained strong foundation in data structures, software engineering, and human-computer interaction.",
      ],
    },
    {
      degree: "Associate of Science in Business Administration",
      school: "Rowan College at Burlington County",
      location: "New Jersey, USA",
      date: "May 2018",
      honors: "Dean's List · GPA: 3.5",
      details: [
        "Learned principles of accounting, finance, marketing, and management.",
        "Built a business foundation that supports your tech/business crossover today.",
      ],
    },
  ];

  return (
    <motion.section
      className="py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <p className="font-mono text-xs text-accent-600 dark:text-accent-400 mb-2">$ cd ~/education</p>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Education</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-10 text-sm">Degrees and programs that shaped my path.</p>

        <div className="space-y-10 border-l-2 border-slate-200 dark:border-slate-700 pl-6">
          {education.map((item, idx) => (
            <motion.div
              key={item.degree}
              className="relative pl-2"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-accent-500 border-2 border-white dark:border-slate-900 shadow-sm" />

              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{item.degree}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                {item.school} — {item.location}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{item.date}</p>
              {item.honors && (
                <p className="text-sm text-accent-600 dark:text-accent-400 font-medium mb-2">{item.honors}</p>
              )}
              <ul className="list-disc ml-5 text-slate-600 dark:text-slate-300 text-sm space-y-1">
                {item.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
