// src/pages/Experience.jsx
import { motion } from 'framer-motion';

export default function Experience() {
  const jobs = [
    {
      title: "Professional Tutor – Math and Computer Skills",
      company: "Wilmington University",
      location: "New Castle, DE",
      period: "Mar 2019 – Jun 2023",
      highlights: [
        "Tutored students in mathematics and computer skills.",
        "Created handouts, quizzes, and study materials to support learning.",
        "Helped students improve GPA and succeed in final exams (avg. 90%).",
        "Supported students in setting learning goals and tracking progress."
      ],
      tech: ["Tutoring", "Excel", "Instructional Design", "Mentorship", "Python", "JavaScript", "Math"]
    },
    {
      title: "Graphic Designer",
      company: "Self-employed",
      location: "Remote",
      period: "Feb 2018 – Jul 2021",
      highlights: [
        "Created high-quality graphic materials using Adobe tools and Procreate.",
        "Designed technical illustrations for banners, brochures, and signage.",
        "Resized and optimized images for digital and print use.",
        "Selected fonts, layouts, and design elements tailored to each client project."
      ],
      tech: ["Adobe Illustrator", "Photoshop", "Procreate", "Typography", "Branding"]
    },
    {
      title: "Data Analyst Intern",
      company: "SEMA-SA",
      location: "Bamako, Mali",
      period: "Dec 2019 – Feb 2020",
      highlights: [
        "Analyzed construction pricing data to support the sales team.",
        "Predicted and modeled future outcomes using sales trends.",
        "Built a loss prevention dashboard in Excel to detect fraud.",
        "Translated data into business insights for pricing strategy."
      ],
      tech: ["Excel", "Data Modeling", "Fraud Detection", "Dashboarding"]
    },
    {
      title: "Help Desk Technician",
      company: "Rowan College at Burlington County",
      location: "Mount Laurel, NJ",
      period: "Aug 2015 – May 2018",
      highlights: [
        "Diagnosed and resolved L1 technical issues for students and staff.",
        "Supported email, accounts, system maintenance, and connectivity.",
        "Managed Active Directory accounts and permission settings.",
        "Maintained computer lab networks with sensitive data access."
      ],
      tech: ["Windows", "Active Directory", "Networking", "Help Desk Support"]
    }
  ];

  return (
    <motion.section
      className="min-h-screen py-16 px-4 bg-gradient-to-b from-purple-50 to-blue-50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 mb-12">💼 Experience</h1>

        <div className="space-y-8">
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center flex-wrap gap-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  {job.title}
                </h2>
                <span className="text-sm text-gray-500">{job.period}</span>
              </div>

              <p className="text-sm text-gray-600 italic mt-1">
                {job.company} — {job.location}
              </p>

              <ul className="list-disc ml-6 mt-4 text-gray-700 text-sm space-y-1">
                {job.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-purple-700">
                {job.tech.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 px-2 py-1 rounded-full border border-purple-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
