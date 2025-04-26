// src/pages/Experience.jsx
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Professional Tutor - Math and Computer Skills',
    company: 'Wilmington University',
    location: 'New Castle, Delaware',
    period: 'March 2019 – June 2023',
    highlights: [
      'Tutored students one-on-one in math and computer skills, improving GPA outcomes.',
      'Developed customized study materials and exam preparation resources.',
      'Supported students in achieving academic goals, with an average exam score of 90%.',
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
      'Provided bilingual (French and English) assistance to students and faculty for account setup, password resets, and troubleshooting.',
      'Monitored classroom IT setups to ensure systems were functional before lectures.',
      'Translated technical documentation between English and French to improve accessibility.',
    ],
    tech: ['Technical Support', 'French-English Support', 'Active Directory', 'IT Operations'],
  },
  {
    title: 'Freelance UI/UX Designer & Digital Illustrator',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'February 2018 – July 2021',
    highlights: [
      'Designed web and mobile graphics optimized for user experience and performance across platforms.',
      'Created UI mockups, technical illustrations, and marketing assets using Adobe Creative Suite and Procreate.',
      'Customized layouts, typography, and visuals based on client requirements and UX best practices.',
    ],
    tech: ['Adobe Photoshop', 'Procreate', 'UI/UX Design', 'Digital Illustration'],
  },
  {
    title: 'Data Analyst Intern',
    company: 'SEMA-SA',
    location: 'Bamako, Mali',
    period: 'December 2019 – February 2020',
    highlights: [
      'Analyzed sales data and provided insights that increased construction pricing in key markets.',
      'Developed Excel reports to monitor sales trends and flag suspicious transactions.',
      'Modeled data to predict future trends and supported business decision-making.',
    ],
    tech: ['Data Analysis', 'Excel', 'Sales Forecasting', 'Fraud Detection'],
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
      className="min-h-screen py-16 px-4 bg-gradient-to-b from-purple-50 to-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-700 mb-12">💼 Professional Experience</h1>

        <div className="space-y-8">
          {experiences.map((job, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex flex-wrap justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                <span className="text-sm text-gray-500">{job.period}</span>
              </div>
              <p className="text-sm text-gray-600 italic mb-2">
                {job.company} — {job.location}
              </p>
              <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
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
