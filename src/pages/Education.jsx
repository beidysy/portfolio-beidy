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
      className="min-h-screen py-16 px-4 bg-gradient-to-b from-purple-100 to-purple-50"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-12">📘 Education</h1>

        <div className="space-y-12 border-l-4 border-purple-400 pl-6">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative pl-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-purple-500 border-2 border-white shadow-sm" />

              <h2 className="text-xl font-semibold text-gray-800">{item.degree}</h2>
              <p className="text-sm text-gray-600 italic">
                {item.school} — {item.location}
              </p>
              <p className="text-sm text-gray-600 mb-1">{item.date}</p>
              {item.honors && (
                <p className="text-sm text-purple-600 font-medium mb-2">{item.honors}</p>
              )}
              <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
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
