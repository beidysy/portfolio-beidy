// src/components/Sidebar.jsx
export default function Sidebar() {
    return (
      <div className="fixed top-0 right-4 md:right-10 h-screen pt-32 hidden md:flex flex-col gap-4 text-right">
        <a href="/" className="text-gray-700 hover:text-purple-600 font-medium">Home</a>
        <a href="/education" className="text-gray-700 hover:text-purple-600 font-medium">Education</a>
        <a href="/experience" className="text-gray-700 hover:text-purple-600 font-medium">Experience</a>
        <a href="/projects" className="text-gray-700 hover:text-purple-600 font-medium">Projects</a>
        <a href="/contact" className="text-gray-700 hover:text-purple-600 font-medium">Contact</a>
      </div>
    );
  }
  