// src/pages/Projects.jsx
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      name: "Hospital Appointment System",
      link: "https://github.com/beidysy/SOA-915-Final-Project-Group-3",
      description:
        "Microservices-based system for booking appointments, managing doctors/patients, and sending notifications. Built with Flask, PostgreSQL, Docker, Kubernetes.",
      tech: ["Flask", "Docker", "PostgreSQL", "Kubernetes", "Prometheus"]
    },
    {
      name: "Data Center Life Tracking",
      link: "https://github.com/beidysy/Data_center_life_tracking",
      description:
        "Tracks environmental and operational metrics for data center infrastructure. Uses Python and dashboards for monitoring lifecycle events.",
      tech: ["Python", "Pandas", "Visualization", "Infrastructure"]
    }
  ];

  return (
    <motion.section
      className="min-h-screen py-16 px-4 bg-gradient-to-b from-blue-50 to-purple-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 mb-12">🛠 Projects</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 border-l-4 border-purple-300 hover:border-purple-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h2>
              <p className="text-sm text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-purple-700">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 px-2 py-1 rounded-full border border-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
