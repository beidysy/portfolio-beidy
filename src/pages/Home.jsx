import TerminalWindow from '../components/TerminalWindow';
import beidy from '../assets/beidy.jpg';

export default function Home() {
  return (
    <section className="min-h-screen px-4 py-16 bg-gradient-to-b from-blue-50 to-purple-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Terminal Intro */}
        <div className="w-full md:w-2/3">
          <TerminalWindow
            title="aboutme.txt"
            lines={[
                "➜ ~ cat aboutme.txt",
                "",
                "Hello, welcome to my digital terminal.",
                "",
                "* I'm Beidy Sy — Cybersecurity & IT Operations Specialist.",
                "* Experienced in DevOps, data analysis, and secure system design.",
                "* Skilled in Python, Linux, Docker, SQL, and automation tools.",
                "* Bilingual: Fluent in French 🇫🇷 and English 🇨🇦.",
                "* Passionate about cloud, cybersecurity, and solving real-world problems with data.",
                "",
                "➜ ~"
              ]}
              
          />
        </div>

        {/* Profile Picture */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="relative group transition-all">
            <img
              src={beidy}
              alt="Beidy Sy"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-purple-600 shadow-lg transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full border-4 border-purple-300 blur-xl opacity-30 group-hover:opacity-40 transition duration-300"></div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-center mt-10 text-sm md:text-base text-gray-500">
        ⚡ Making systems secure. Supporting tech. Always learning.
      </p>
    </section>
  );
}
